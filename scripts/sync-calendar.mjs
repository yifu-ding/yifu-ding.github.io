// Syncs busy/free intervals (no titles, no descriptions) from the calendar
// feeds named by CALENDAR_URL_1 / CALENDAR_URL_2 into data/calendar-busy.json.
// Run via `npm run sync-calendar`; the GitHub Actions workflow runs it on a
// schedule and commits the refreshed JSON.
import ical from "node-ical";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.resolve(__dirname, "..", "data", "calendar-busy.json");

// Buffer beyond the 7-day display window so any visitor's local timezone
// still sees a fully covered range once the frontend clips to "today".
const BUFFER_DAYS_BEFORE = 2;
const BUFFER_DAYS_AFTER = 9;

function toHttps(url) {
  return url.replace(/^webcal:\/\//i, "https://");
}

function dateOnlyKey(date) {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

async function collectBusyFromCalendar(url, windowStart, windowEnd) {
  const timed = [];
  const allDay = new Set();
  const events = await ical.async.fromURL(toHttps(url));

  for (const ev of Object.values(events)) {
    if (!ev || ev.type !== "VEVENT") continue;

    try {
      if (ev.status === "CANCELLED") continue;

      if (ev.rrule) {
        const occurrenceStarts = ev.rrule.between(windowStart, windowEnd, true);
        const baseDurationMs = ev.end.getTime() - ev.start.getTime();

        for (const occStart of occurrenceStarts) {
          const dayKey = dateOnlyKey(occStart);
          if (ev.exdate && dayKey in ev.exdate) continue;

          let start = occStart;
          let end = new Date(occStart.getTime() + baseDurationMs);

          if (ev.recurrences && dayKey in ev.recurrences) {
            const override = ev.recurrences[dayKey];
            if (override.status === "CANCELLED") continue;
            start = override.start;
            end = override.end;
          }

          timed.push({ start, end });
        }
      } else if (ev.datetype === "date") {
        if (ev.start >= windowStart && ev.start <= windowEnd) {
          allDay.add(dateOnlyKey(ev.start));
        }
      } else if (ev.start && ev.end) {
        if (ev.end > windowStart && ev.start < windowEnd) {
          timed.push({ start: ev.start, end: ev.end });
        }
      }
    } catch (err) {
      console.warn(`[sync-calendar] Skipping one malformed event: ${err.message}`);
    }
  }

  return { timed, allDay };
}

function mergeIntervals(intervals) {
  const sorted = intervals
    .filter((iv) => iv.end > iv.start)
    .sort((a, b) => a.start - b.start);
  const merged = [];
  for (const iv of sorted) {
    const last = merged[merged.length - 1];
    if (last && iv.start <= last.end) {
      if (iv.end > last.end) last.end = iv.end;
    } else {
      merged.push({ start: iv.start, end: iv.end });
    }
  }
  return merged;
}

async function main() {
  const urls = [process.env.CALENDAR_URL_1, process.env.CALENDAR_URL_2].filter(Boolean);
  if (urls.length === 0) {
    throw new Error("No calendar URLs configured (set CALENDAR_URL_1 / CALENDAR_URL_2)");
  }

  const now = new Date();
  const windowStart = new Date(now.getTime() - BUFFER_DAYS_BEFORE * 86400000);
  const windowEnd = new Date(now.getTime() + BUFFER_DAYS_AFTER * 86400000);

  const allTimed = [];
  const allDaySet = new Set();

  for (const url of urls) {
    const { timed, allDay } = await collectBusyFromCalendar(url, windowStart, windowEnd);
    allTimed.push(...timed);
    for (const d of allDay) allDaySet.add(d);
  }

  const merged = mergeIntervals(allTimed).filter(
    (iv) => iv.end > windowStart && iv.start < windowEnd
  );

  const output = {
    generatedAt: now.toISOString(),
    windowStart: windowStart.toISOString(),
    windowEnd: windowEnd.toISOString(),
    timedBusy: merged.map((iv) => ({ start: iv.start.toISOString(), end: iv.end.toISOString() })),
    allDayBusy: [...allDaySet].sort(),
  };

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2) + "\n", "utf8");
  console.log(
    `[sync-calendar] Wrote ${output.timedBusy.length} timed busy blocks and ${output.allDayBusy.length} all-day dates to ${OUTPUT_PATH}`
  );
}

main().catch((err) => {
  console.error("[sync-calendar] Failed:", err);
  process.exitCode = 1;
});

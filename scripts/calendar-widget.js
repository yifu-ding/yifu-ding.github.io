// Renders a 7-day, Apple-Calendar-style busy/free week view on the Contact
// page. Data comes from data/calendar-busy.json (produced by
// scripts/sync-calendar.mjs) and only ever contains start/end times — no
// event titles or descriptions are fetched or displayed.
(function () {
    'use strict';

    const DATA_URL = 'data/calendar-busy.json';
    const HOURS_IN_DAY = 24;
    const DAYS_TO_SHOW = 7;

    const I18N_FALLBACK = {
        en: {
            weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            today: 'Today',
            updatedPrefix: 'Last synced',
            loading: 'Loading availability…',
            error: 'Availability is temporarily unavailable.',
            errorLocalFile: 'This calendar loads over a real web server (it works on the live site) — opening this HTML file directly won\'t show it.'
        },
        zh: {
            weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            today: '今天',
            updatedPrefix: '最近同步',
            loading: '正在加载日程…',
            error: '暂时无法加载日程。',
            errorLocalFile: '该日历需要通过网页服务器加载（线上网站可正常显示），直接双击打开本地 HTML 文件无法显示。'
        }
    };

    function getCurrentLang() {
        return localStorage.getItem('language') === 'zh' ? 'zh' : 'en';
    }

    function startOfLocalDay(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    function dateKey(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }

    function minutesFromMidnight(date, dayStart) {
        return (date.getTime() - dayStart.getTime()) / 60000;
    }

    function renderHourLabel(hour, lang) {
        if (lang === 'zh') return `${hour}:00`;
        if (hour === 0) return '12 AM';
        if (hour === 12) return '12 PM';
        return hour < 12 ? `${hour} AM` : `${hour - 12} PM`;
    }

    function buildDayList() {
        const today = startOfLocalDay(new Date());
        const days = [];
        for (let i = 0; i < DAYS_TO_SHOW; i++) {
            days.push(new Date(today.getFullYear(), today.getMonth(), today.getDate() + i));
        }
        return days;
    }

    function render(root, data) {
        const lang = getCurrentLang();
        const strings = I18N_FALLBACK[lang];
        const rowHeight = 40;
        const dayColHeight = rowHeight * HOURS_IN_DAY;

        const days = buildDayList();
        const rangeStart = days[0];
        const rangeEnd = new Date(days[DAYS_TO_SHOW - 1].getFullYear(), days[DAYS_TO_SHOW - 1].getMonth(), days[DAYS_TO_SHOW - 1].getDate() + 1);

        const timedBusy = (data.timedBusy || [])
            .map((iv) => ({ start: new Date(iv.start), end: new Date(iv.end) }))
            .filter((iv) => iv.end > rangeStart && iv.start < rangeEnd);
        const allDaySet = new Set(data.allDayBusy || []);

        const headerRow = root.querySelector('.avail-header-row');
        const alldayRow = root.querySelector('.avail-allday-row');
        const hourCol = root.querySelector('.avail-hour-col');
        const daysCol = root.querySelector('.avail-days-col');

        headerRow.innerHTML = '';
        alldayRow.innerHTML = '';
        hourCol.innerHTML = '';
        daysCol.innerHTML = '';

        const corner = document.createElement('div');
        corner.className = 'avail-header-cell is-corner';
        headerRow.appendChild(corner);

        const alldayCorner = document.createElement('div');
        alldayRow.appendChild(alldayCorner);

        const todayKey = dateKey(new Date());

        days.forEach((day) => {
            const isToday = dateKey(day) === todayKey;

            const headerCell = document.createElement('div');
            headerCell.className = 'avail-header-cell' + (isToday ? ' is-today' : '');
            const weekdayEl = document.createElement('span');
            weekdayEl.className = 'avail-header-weekday';
            weekdayEl.textContent = isToday ? strings.today : strings.weekdays[day.getDay()];
            const daynumEl = document.createElement('span');
            daynumEl.className = 'avail-header-daynum';
            daynumEl.textContent = String(day.getDate());
            headerCell.appendChild(weekdayEl);
            headerCell.appendChild(daynumEl);
            headerRow.appendChild(headerCell);

            const alldayCell = document.createElement('div');
            alldayCell.className = 'avail-allday-cell';
            if (allDaySet.has(dateKey(day))) {
                const bar = document.createElement('div');
                bar.className = 'avail-allday-bar';
                alldayCell.appendChild(bar);
            }
            alldayRow.appendChild(alldayCell);
        });

        for (let h = 0; h < HOURS_IN_DAY; h++) {
            const label = document.createElement('div');
            label.className = 'avail-hour-label';
            label.style.top = `${h * rowHeight}px`;
            label.textContent = renderHourLabel(h, lang);
            hourCol.appendChild(label);
        }

        const now = new Date();

        days.forEach((day) => {
            const dayStart = day;
            const dayEnd = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);

            const col = document.createElement('div');
            col.className = 'avail-day-col';

            for (let h = 0; h < HOURS_IN_DAY; h++) {
                const line = document.createElement('div');
                line.className = 'avail-hour-line';
                line.style.top = `${h * rowHeight}px`;
                col.appendChild(line);
            }

            timedBusy.forEach((iv) => {
                if (iv.end <= dayStart || iv.start >= dayEnd) return;
                const clippedStart = iv.start < dayStart ? dayStart : iv.start;
                const clippedEnd = iv.end > dayEnd ? dayEnd : iv.end;
                const topMin = minutesFromMidnight(clippedStart, dayStart);
                const heightMin = Math.max(minutesFromMidnight(clippedEnd, dayStart) - topMin, 8);

                const block = document.createElement('div');
                block.className = 'avail-busy-block';
                block.style.top = `${(topMin / 60) * rowHeight}px`;
                block.style.height = `${(heightMin / 60) * rowHeight}px`;
                col.appendChild(block);
            });

            if (now >= dayStart && now < dayEnd) {
                const nowLine = document.createElement('div');
                nowLine.className = 'avail-now-line';
                const topMin = minutesFromMidnight(now, dayStart);
                nowLine.style.top = `${(topMin / 60) * rowHeight}px`;
                col.appendChild(nowLine);
            }

            daysCol.appendChild(col);
        });

        hourCol.style.height = `${dayColHeight}px`;

        const updatedEl = document.querySelector('.availability-updated');
        if (updatedEl && data.generatedAt) {
            const generated = new Date(data.generatedAt);
            const formatted = generated.toLocaleString(lang === 'zh' ? 'zh-CN' : 'en-US', {
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
            });
            updatedEl.textContent = `${strings.updatedPrefix}: ${formatted}`;
        }

        const bodyWrap = root.querySelector('.avail-body-wrap');
        if (bodyWrap) {
            const scrollTargetMinutes = Math.max(minutesFromMidnight(now, days[0]) - 120, 0);
            bodyWrap.scrollTop = (scrollTargetMinutes / 60) * rowHeight;
        }
    }

    function init() {
        const root = document.getElementById('availability-grid');
        const loadingEl = document.getElementById('availability-loading');
        if (!root) return;

        let lastData = null;

        function showLoaded(data) {
            lastData = data;
            if (loadingEl) loadingEl.hidden = true;
            root.hidden = false;
            render(root, data);
        }

        function showError() {
            if (loadingEl) {
                loadingEl.hidden = false;
                loadingEl.classList.add('availability-error');
                const strings = I18N_FALLBACK[getCurrentLang()];
                loadingEl.textContent = window.location.protocol === 'file:' ? strings.errorLocalFile : strings.error;
            }
        }

        fetch(`${DATA_URL}?t=${Date.now()}`)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(showLoaded)
            .catch(showError);

        window.addEventListener('languageChanged', () => {
            if (lastData) render(root, lastData);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

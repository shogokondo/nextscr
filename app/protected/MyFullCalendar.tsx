'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
                headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={[
            { id: "1", title: "会議", start: "2025-01-10T10:00:00", end: "2025-01-10T11:00:00" },
            { id: "2", title: "ランチ", start: "2025-01-11T12:00:00", end: "2025-01-11T13:00:00" },
        ]}
        editable={true}
        selectable={true}
        dateClick={(info) => alert(`日付がクリックされました: ${info.dateStr}`)}
        eventClick={(info) => alert(`イベント: ${info.event.title}`)}
    />
  )
}
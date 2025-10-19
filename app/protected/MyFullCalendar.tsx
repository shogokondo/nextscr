'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import { EventApi, EventClickArg } from '@fullcalendar/core'

import { useState } from 'react'

export default function Calendar() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const [selectedEvent, setSelectedEvent] = useState<EventApi | null>(null)

    const handleEventClick = (clickInfo: EventClickArg) => {
        setAnchorEl(clickInfo.el)
        setSelectedEvent(clickInfo.event)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setSelectedEvent(null)
    }
    return (
        <div className='p-[10px]'>
            <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
                        headerToolbar={{
                    center: "prev,next today",
                    left: "title",
                    right: "timeGridWeek,dayGridMonth,timeGridDay",
                }}
                events={[
                    { id: "1", title: "会議", start: "2025-01-11T12:00:00", end: "2025-01-11T13:00:00" },
                    { id: "2", title: "ランチ", start: "2025-01-11T12:00:00", end: "2025-01-11T13:00:00" },
                ]}
                editable={true}
                selectable={true}
                // dateClick={(info) => alert(`日付がクリックされました: ${info.dateStr}`)}
                eventClick={handleEventClick}
            />
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
            >
                {selectedEvent && (
                <div className='h-32'>
                    {selectedEvent.title} の詳細表示
                    {selectedEvent.startStr && (
                        <>開始: {selectedEvent.startStr}</>
                    )}
                    {selectedEvent.endStr && (
                        <>終了: {selectedEvent.endStr}</>
                    )}
                </div>
                )}
            </Popover>
        </div>
    )
}
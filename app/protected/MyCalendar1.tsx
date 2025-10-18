"use client";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './myCalendar1.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyCalendar1() {

  const [value, onChange] = useState<Value>(new Date());

  return (<Calendar
     onChange={onChange} 
     value={value}
     tileContent={<div className='h-20'>hello</div>}
    />);
}

import React, { useEffect, useReducer, useState} from 'react'

import GlobalContext from './GlobalContext'

import dayjs from 'dayjs'

function savedEventsReducer (state, {type, payload}){
  switch (type) {
    case 'push':     
return [...state, payload]  

case 'update':
  return state.map((e)=> e.id ===payload.id ? payload : e)

  case 'delete':
      return state.filter((e) => (e.id !== payload.id));

    default:
    throw new Error();
  }
}

function initial_Events(){
  const storageEvents = localStorage.getItem('savedEvents')
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : []
  return parsedEvents
}

function ContextWrapper(props) {
    const[monthIndex, setMonthIndex] = useState(dayjs().month())
    const[smallCalendarMonth, setSmallCalendarMonth] = useState(null)
    const[selectedDay, setSelectedDay] = useState(dayjs())
    const[showEventModal, setShowEventModal] = useState(false)
    const [savedEvents, dispatch] = useReducer(savedEventsReducer, [], initial_Events )
    const[selectedEvents, setSelectedEvents] = useState(null)

useEffect (()=> {
localStorage.setItem('savedEvents', JSON.stringify(savedEvents))
}, [savedEvents])

  useEffect(()=>{
if(smallCalendarMonth !== null){
  setMonthIndex(smallCalendarMonth)
}
  }, [smallCalendarMonth])
  
    return (
    <div>
<GlobalContext.Provider value={{monthIndex, setMonthIndex, smallCalendarMonth, setSmallCalendarMonth, selectedDay, setSelectedDay,
showEventModal, setShowEventModal, dispatch, savedEvents, selectedEvents, setSelectedEvents}}>
{props.children}
</GlobalContext.Provider>


    </div>
  )
}

export default ContextWrapper
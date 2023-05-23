import React, { useEffect, useState} from 'react'

import GlobalContext from './GlobalContext'

import dayjs from 'dayjs'

function ContextWrapper(props) {
    const[monthIndex, setMonthIndex] = useState(dayjs().month())
    const[smallCalendarMonth, setSmallCalendarMonth] = useState(null)
    const[selectedDay, setSelectedDay] = useState(null)
    const[showEventModal, setShowEventModal] = useState(false)
  useEffect(()=>{
if(smallCalendarMonth !== null){
  setMonthIndex(smallCalendarMonth)
}
  }, [smallCalendarMonth])
  
    return (
    <div>
<GlobalContext.Provider value={{monthIndex, setMonthIndex, smallCalendarMonth, setSmallCalendarMonth, selectedDay, setSelectedDay,
showEventModal, setShowEventModal}}>
{props.children}
</GlobalContext.Provider>


    </div>
  )
}

export default ContextWrapper
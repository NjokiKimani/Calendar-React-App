import React, { useEffect, useState} from 'react'

import GlobalContext from './GlobalContext'

import dayjs from 'dayjs'

function ContextWrapper(props) {
    const[monthIndex, setMonthIndex] = useState(dayjs().month())
    const[smallCalendarMonth, setSmallCalendarMonth] = useState(null)
    const[selectedDay, setSelectedDay] = useState(null)
  useEffect(()=>{
if(smallCalendarMonth !== null){
  setMonthIndex(smallCalendarMonth)
}
  }, [smallCalendarMonth])
  
    return (
    <div>
<GlobalContext.Provider value={{monthIndex, setMonthIndex, smallCalendarMonth, setSmallCalendarMonth, selectedDay, setSelectedDay}}>
{props.children}
</GlobalContext.Provider>


    </div>
  )
}

export default ContextWrapper
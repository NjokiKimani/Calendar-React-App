import React from 'react'

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    smallCalendarMonth:0,
    setSmallCalendarMonth: (index) =>{},
    selectedDay: null,
    setSelectedDay: (day) =>{},
    showEventModal: false,
    setShowEventModal:()=>{},
    dispatch : ({type, payload}) => {},
    savedEvents: [],
    selectedEvents:null,
    setSelectedEvents: () => {}, 

})

export default GlobalContext
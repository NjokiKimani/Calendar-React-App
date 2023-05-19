import React, { useState, useContext, useEffect } from 'react'

//Styles import
import './App.css'

//Component imports
import { getMonth } from './Utility'
 import Sidebar from './Components/Sidebar'
 import CalendarHeader from './Components/CalendarHeader'
 import Month from './Components/Month'
import GlobalContext from './Context/GlobalContext'



function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
 const{monthIndex} = useContext(GlobalContext)
 useEffect (()=>{
  setCurrentMonth(getMonth(monthIndex));
 }, [monthIndex]);
 //console.log(currentMonth)
  return (
<React.Fragment>
  <div className="h-screen flex flex-col">
    <CalendarHeader />
    <div className="flex flex-1">
      <Sidebar />
      <Month month={currentMonth} />
    </div>
  </div>
</React.Fragment>
  )
}

export default App

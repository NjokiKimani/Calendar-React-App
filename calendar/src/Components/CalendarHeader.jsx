import React, { useContext } from 'react'
import logo from '../assets/logo.svg'
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import GlobalContext from '../Context/GlobalContext';
import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";


function CalendarHeader() {
      dayjs.extend(customParseFormat);

  const {monthIndex, setMonthIndex} = useContext(GlobalContext)

    const monthYearFormat = dayjs(dayjs().month(monthIndex), "YYYY-MM-DD HH:mm A");
    

//console.log(monthYearFormat.format('YYYY MMMM'))
    function handlePrevMonth(){
    setMonthIndex(monthIndex - 1)
  }

  function handleNextMonth(){
    setMonthIndex(monthIndex + 1)
  }

  function handleReset(){
    setMonthIndex(dayjs().month())
  }
  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="logo" className="w-12 h-12 mr-2" />
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendar</h1>
      <button onClick={handleReset}  className="border rounded py-2 px-4 mr-5">Today</button>
      <button onClick={handlePrevMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <ChevronLeft />
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <ChevronRight />
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {monthYearFormat.format("MMMM YYYY")}
      </h2>
    </header>
  );
}

export default CalendarHeader
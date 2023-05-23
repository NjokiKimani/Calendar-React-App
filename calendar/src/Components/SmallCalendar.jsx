import React, { useEffect, useState, useContext } from 'react'


//components imports
import dayjs from 'dayjs'
import { getMonth } from '../Utility'
import GlobalContext from '../Context/GlobalContext';

//assets imports
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import customParseFormat from "dayjs/plugin/customParseFormat";


function SmallCalendar() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);
  dayjs.extend(customParseFormat);

  const { monthIndex, setSmallCalendarMonth, selectedDay, setSelectedDay } = useContext(GlobalContext);

useEffect(() => {
    setCurrentMonthIndex(monthIndex)
}, [monthIndex])
  const mon = dayjs((new Date(dayjs().year(), currentMonthIndex)))
  
  function handlePrevMonth() {
    setCurrentMonthIndex(currentMonthIndex - 1);
  }


  function handleNextMonth() {
    setCurrentMonthIndex(currentMonthIndex + 1);
  }

  dayjs.extend(customParseFormat);
  const getCurrentDayClass = (day) => {
    const currentDay = dayjs(day, "YYYY-MM-DD HH:mm A");
   dayjs.extend(customParseFormat);
  // const slcDay = selectedDay.format("DD-MM-YY")
//const daySelected = selectedDay && slcDay;

    if(currentDay.format("DD-MM-YY") === dayjs().format("DD-MM-YY")){
      return "bg-blue-500 text-white rounded-full"}
      else if (
        currentDay.format("DD-MM-YY") === selectedDay &&
        selectedDay.format("DD-MM-YY")
      ) {
        return "bg-blue-100 rounded-full text-blue-600 font-bold";
      } else {
        return "";
      }
  };
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">{mon.format("MMMM YYYY")}</p>
        <div>
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
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i}>
            {dayjs(day, "YYYY-MM-DD HH:mm A").format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, id) => (
          <React.Fragment key={id}>
            {row.map((day, idx) => (
              <button
                key={idx}
                className={`py-1 w-full ${getCurrentDayClass(day)}`}
             onClick={()=>{
                setSmallCalendarMonth(currentMonthIndex)
                setSelectedDay(day)
             }}
             >
                <span className="text-sm">
                  {dayjs(day, "YYYY-MM-DD HH:mm A").format("D")}
                </span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SmallCalendar
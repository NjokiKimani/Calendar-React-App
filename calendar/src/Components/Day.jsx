import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { useContext, useEffect, useState } from "react";

//library imports

//component imports
import GlobalContext from "../Context/GlobalContext";

function Day({day, rowidx}) {

    const { setSelectedDay, setShowEventModal, savedEvents } =
      useContext(GlobalContext);
    dayjs.extend(customParseFormat);
    const days = dayjs(day, "YYYY-MM-DD HH:mm A");

  const [dayEvents, setDayEvents] = useState([])

  useEffect (() =>{
    const events = savedEvents.filter(evt => dayjs(evt.day).format('DD-MM-YY')===days.format('DD-MM-YY'))
    setDayEvents(events)
  }, [savedEvents, day])


    //console.log(days)
  const getCurrentDayClass=()=>{
    return(
 days.format('DD-MM-YY') === dayjs().format("DD-MM-YY") ?
 "bg-blue-600 text-white rounded-full w-7" : ""
  )}
  //console.log(days.format('DD-MM-YY'))
  //console.log(dayjs().format("DD-MM-YY"))
  //var customParseFormat = require("dayjs/plugin/customParseFormat");

  //console.log(days.format('dd'))

    return (
      <div className="border border-gray-200 flex flex-col">
        <header className="flex flex-col text-center">
          {rowidx === 0 && (
            <p className="text-sm mt-1">{days.format("ddd").toUpperCase()}</p>
          )}
          <p
            className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}
          >
            {" "}
            {days.format("DD")}
          </p>
        </header>
        <div className="flex-1 cursor-pointer" onClick={()=>{
setSelectedDay(day);
setShowEventModal(true);
        }}>
{dayEvents.map((evt, idx)=> (
  <div key={idx} className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 rounded text-sm mb-1 truncate`}>
{evt.title}
hello
    </div>
))}
        </div>
      </div>
    );
}

export default Day;

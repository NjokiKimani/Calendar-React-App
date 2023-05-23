import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { useContext } from "react";

//library imports

//component imports
import GlobalContext from "../Context/GlobalContext";

function Day({day, rowidx}) {

  const {setSelectedDay, setShowEventModal} = useContext(GlobalContext)
    dayjs.extend(customParseFormat);
    const days = dayjs(day, "YYYY-MM-DD HH:mm A");
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

        </div>
      </div>
    );
}

export default Day;

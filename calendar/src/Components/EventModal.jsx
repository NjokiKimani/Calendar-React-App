import React, { useContext, useState } from 'react'

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];
//components imports
import GlobalContext from '../Context/GlobalContext';
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

//assets imports
import { DragHandle, Close, Schedule, BookmarkBorder, Check } from "@material-ui/icons";
import SegmentIcon from "@mui/icons-material/Segment";

export default function EventModal() {
  const[title, setTitle] = useState('')
  const[description, setDescription] = useState('')
  const[selectedLabel, setSelectedLabel]=useState(labelsClasses[0])
  const{setShowEventModal, selectedDay, dispatch } = useContext(GlobalContext)


  function handleSubmit (e){
e.preventDefault()
const calendarEvent = {
  title, 
  description, 
  label: selectedLabel,
  day: selectedDay.valueOf(),
  id: Date.now()
}
dispatch ({type: 'push', payload: calendarEvent})
setShowEventModal(false)
  }
   dayjs.extend(customParseFormat);
   const planDay = dayjs(selectedDay, "YYYY-MM-DD HH:mm A");
   
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center ">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-400">
            <DragHandle />
          </span>
          <button onClick={() => setShowEventModal(false)}>
            <span className="text-gray-400">
              <Close />
            </span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7 ">
            <div></div>
            <input
              type="text"
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200
focus: outline-none focus:ring-0 focus:border-blue-500"
              name="title"
              placeholder="Add title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <span className="text-gray-400">
              <Schedule />
            </span>
            <p>{planDay.format("dddd, MMMM DD")}</p>
            <span className="text-gray-400">
              <SegmentIcon />
            </span>
            <input
              type="text"
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200
focus: outline-none focus:ring-0 focus:border-blue-500"
              name="Description"
              placeholder="Add description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <span className="text-gray-400">
              <BookmarkBorder />
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblclass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblclass)}
                  className={`bg-${lblclass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblclass && (
                    <span className="text-white text-sm">
                      <Check />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t pt-3 mt-5">
          <button type="submit" onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white' >
                Save
          </button>
        </footer>
      </form>
    </div>
  );
}

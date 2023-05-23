import React, { useContext, useState } from 'react'

//components imports
import GlobalContext from '../Context/GlobalContext';
//assets imports
import { DragHandle, Close, Schedule } from "@material-ui/icons";

export default function EventModal() {
  const[title, setTitle] = useState('')
  const{setEventModal} = useContext(GlobalContext)
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center ">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-400">
            <DragHandle />
          </span>
          <button onClick={() => setEventModal(false)}>
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
              <Schedule/>
            </span>
            <p></p>
          </div>
        </div>
      </form>
    </div>
  );
}

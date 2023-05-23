import React, { useContext } from 'react'

//components imports
import GlobalContext from '../Context/GlobalContext'

//Assets imports
import plus from '../assets/plus.svg'

function CreateEventButton() {
  const {setShowEventModal} = useContext(GlobalContext)
  return (
<button onClick={()=>setShowEventModal(true)}className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'>
    <img src={plus} alt="create_event" className='w-7 h-7'/>
    <span className='pl-3 pr-4'>Create</span>
</button> 
 )
}

export default CreateEventButton
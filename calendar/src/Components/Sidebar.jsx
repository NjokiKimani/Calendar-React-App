import React from 'react'

//components imports
import CreateEventButton from './CreateEventButton'
import SmallCalendar from './SmallCalendar'

function Sidebar() {
  return (
    <div>
<aside className='border p-5 w-64'>
<CreateEventButton />
<SmallCalendar />
</aside>



    </div>
  )
}

export default Sidebar
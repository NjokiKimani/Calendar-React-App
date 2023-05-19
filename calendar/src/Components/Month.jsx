import React from 'react'

//component imports
import Day from './Day'

function Month({month}) {
    //console.log(month)

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowidx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Month
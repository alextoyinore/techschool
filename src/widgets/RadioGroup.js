import React from 'react'
import Radio from './Radio'

function RadioGroup({radioList, name}) {
  return (
    <div className='radioGroup'>
        {radioList.map((rl) => <Radio name={name} postText={rl} />)}
    </div>
  )
}

export default RadioGroup

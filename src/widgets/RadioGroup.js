import React from 'react'
import Radio from './Radio'

function RadioGroup({radioList, name, labelText}) {
  return (
    <div>
       <label className='labelText'>{labelText}</label>
        <div className='radioGroup'>
          {radioList.map((rl) => <Radio name={name} postText={rl} />)}
        </div>
    </div>
  )
}

export default RadioGroup

import React from 'react'
import CheckBox from './CheckBox'

function CheckBoxGroup({checkBoxList, labelText}) {
  return (
    <div>
      <label className='labelText'>{labelText}</label>
      <div className='checkBoxGroup'>
          {checkBoxList.map((cbl) => <CheckBox postText={cbl} />)}
      </div>
    </div>
    
  )
}

export default CheckBoxGroup

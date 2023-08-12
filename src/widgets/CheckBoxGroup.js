import React from 'react'
import CheckBox from './CheckBox'

function CheckBoxGroup({checkBoxList}) {
  return (
    <div className='checkBoxGroup'>
        {checkBoxList.map((cbl) => <CheckBox postText={cbl} />)}
    </div>
  )
}

export default CheckBoxGroup

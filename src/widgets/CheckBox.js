import React from 'react'

function CheckBox({preText, postText, active, id, name, handleChange}) {
  return (
    <div className='ts-checkbox-container'>
      {/* { preText !== '' &&
        <span className='label' style={{marginRight: '.5rem'}} >{preText}</span> 
      } */}
        
        <label className='ts-checkbox'>
          <input onChange={handleChange} name={name} type='checkbox' />
          <span className='checkmark'></span>
        </label>
       
      { postText !==  '' &&
        <span className='label' style={{marginLeft: '.5rem'}} >{postText}</span> 
      }
    </div>
  )
}

export default CheckBox

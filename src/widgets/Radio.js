import React from 'react'

function Radio({handleChange, name, postText}) {
  return (
    <div className='ts-radio-container'>
       <label className='ts-radio'>
          <input onChange={handleChange} name={name} type='radio' />
          <span className='radiocheck'></span>
        </label>
        { postText !==  '' &&
            <span className='label' style={{marginLeft: '.5rem'}}>{postText}</span> 
        }
    </div>
  )
}

export default Radio


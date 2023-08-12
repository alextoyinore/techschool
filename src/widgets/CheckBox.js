import React from 'react'

function CheckBox({preText, postText, active, id, name, handleChange}) {
  const prePostStyles = {
    marginLeft: postText ? '.5rem' : '0',
    marginRight: preText ? '.5rem' : '0',
  }

  return (
    <div className='ts-checkbox-container'>
      { preText &&
        <span className='label' style={prePostStyles} >{preText}</span> 
      }
        
        <label className='ts-checkbox'>
          <input onChange={handleChange} name={name} type='checkbox' />
          <span className='checkmark'></span>
        </label>
       
      { postText &&
        <span className='label' style={prePostStyles} >{postText}</span> 
      }
    </div>
  )
}

export default CheckBox

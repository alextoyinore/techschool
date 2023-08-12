import React from 'react'

function TextArea(
    {hintText, type, labelText, id, name, required}
    ) {
  return (
    <div>
        <label htmlFor={id}>{labelText}</label><br/>
        <textarea 
            className='ts-input'
            placeholder={hintText}
            type={type}
            id={id}
            name={name}
        />
    </div>
  )
}

export default TextArea


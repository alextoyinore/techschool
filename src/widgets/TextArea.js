import React from 'react'

function TextArea(
    {hintText, type, labelText, id, name, required}
    ) {
  return (
    <div>
        {labelText && <label htmlFor={id}>{labelText}</label>}
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


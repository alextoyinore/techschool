import React from 'react'

function InputField(
    {hintText, type, labelText, id, name, required, value}
    ) {
  return (
    <div>
        <label className='labelText' htmlFor={id}>{labelText}</label><br/>
        <input 
            className='ts-input'
            placeholder={hintText}
            type={type}
            id={id}
            name={name}
            value={value}
        />
    </div>
  )
}

export default InputField


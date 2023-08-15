import React from 'react'

function InputField(
    {
      hintText, type, icon,
      labelText, id, name, 
      height='3rem', width, 
      required, value, 
      borderRadius, iconAction,
    }) {
      const styles = {
        borderRadius: borderRadius,
        width: width,
      }

      const inputStyle = {
        width: '100%',
        height: height,
      }
  return (
    <div style={inputStyle}>
        { labelText && <label className='labelText' htmlFor={id}>{labelText}</label>}
        <div>
          <input 
              style={inputStyle}
              className='ts-input'
              placeholder={hintText}
              type={type}
              id={id}
              name={name}
              required={required}
              value={value}/>
        </div>
        <span onClick={iconAction} className="material-symbols-outlined">{icon}</span>
    </div>
  )
}

export default InputField


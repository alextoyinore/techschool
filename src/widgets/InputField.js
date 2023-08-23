import React from 'react'

function InputField(
    {
      hintText, type, icon,
      labelText, id, name, 
      height='3rem', 
      width, 
      required, value, 
      borderRadius, iconAction,
    }) {

      if(type==='password'){
        icon = 'visibility'
      }

      const inputStyleContainer = {
        width: '100%',
        height: height,
        position: 'relative'
      }

      const inputStyle = {
        borderRadius: borderRadius,
        height: height,
      }

      const iconStyle = {
        position: 'absolute',
        right: '1.5%',
        transform: 'translateY(50%)',
        color: '#999',
        cursor: 'pointer',
      }

  return (
        <div style={inputStyleContainer}>
        { labelText && <label className='labelText' htmlFor={id}>{labelText}</label>}
          <input 
              style={inputStyle}
              className='ts-input'
              placeholder={hintText}
              type={type}
              id={id}
              name={name}
              required={required}
              value={value}/>
          {icon && <span onClick={iconAction} style={iconStyle} className="material-symbols-outlined">{icon}</span>}
        </div>
  )
}

export default InputField


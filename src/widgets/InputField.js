import React from 'react'

function InputField(
    {hintText, type, labelText, id, name, isRequired, value, isSearch}
    ) {
      const styles = {
        borderRadius: isSearch ? '.5rem 0 0 .5rem' : '.5rem',
        height: (isSearch || (type==='submit')) ? '3.2rem' : '2.75rem'
      }
  return (
    <div>
        { labelText && <label className='labelText' htmlFor={id}>{labelText}</label>}
        <input 
            style={styles}
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


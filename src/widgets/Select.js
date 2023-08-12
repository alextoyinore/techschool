import React from 'react'

function Select({data, labelText, id, hintText, handleChange}) {
  const dataItems = data.map((d)=> <option value={d}>{d}</option>)
  return (
    <div>
          <label htmlFor={id}>{labelText}</label><br/>
          <select  
          className='ts-select'
          onChange={handleChange}>
            <option className='hint'>{hintText}</option>
            {dataItems}
          </select>
    </div>
  )
}

export default Select


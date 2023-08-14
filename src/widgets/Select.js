import React from 'react'

function Select({data, labelText, id, hintText, handleChange}) {
  const dataItems = data.map((d)=> <option value={d}>{d}</option>)
  const styles = {
    height: '2.75rem'
  }
  return (
    <div>
          {labelText && <label htmlFor={id}>{labelText}</label>}
          <select
          placeholder='Select brand'
          style={styles}
          className='ts-select'
          onChange={handleChange}>
            <option className='hint' selected><span style={{color:'#ccc'}}>{hintText}</span></option>
            {dataItems}
          </select>
    </div>
  )
}

export default Select


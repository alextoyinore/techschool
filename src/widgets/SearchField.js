import React from 'react'
import InputField from './InputField'
import Button from './Button'

function SearchField({hintText, text='Search'}) {
    const searchFieldStyles = {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '2.75rem',
    }

    const fieldStyle = {
      width: '80%'
    }

    const btnStyle = {
      width: '20%'
    }
    
  return (
    <div style={searchFieldStyles}>
        <InputField style={fieldStyle} hintText={hintText} isSearch='true' />
        <Button style={btnStyle} text={text} isSearch='true' />
    </div>
  )
}

export default SearchField


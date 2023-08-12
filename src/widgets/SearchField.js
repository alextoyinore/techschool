import React from 'react'
import InputField from './InputField'
import Button from './Button'

function SearchField({hintText}) {
    const searchFieldStyles = {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '3.25rem'
    }
  return (
    <div style={searchFieldStyles}>
        <InputField hintText={hintText} isSearch='true' />
        <Button isSearch='true' />
    </div>
  )
}

export default SearchField


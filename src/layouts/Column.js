import React, { useState } from 'react'

function Column(props) {
    const [columnProperties, setColumnProperties] = useState({
        containerStyle : {
            display: 'flex',
            flexDirection: 'column',
            gap: '.75rem',
            fontSize: '.8rem',
            color: '#777',
        }
    })
  return (
    <div style={columnProperties.containerStyle}>
        {props.children}
    </div>
  )
}

export default Column


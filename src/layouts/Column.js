import React, { useState } from 'react'

function Column(props) {
    const [columnProperties, setColumnProperties] = useState({
        containerStyle : {
            display: 'flex',
            flexDirection: 'column',
            gap: '.75rem',
            fontSize: '.8rem',
            color: '#777',
            justifyContent: props.justify || 'flex-start',
            alignContent: props.alignContent || 'left',
            alignItems: props.alignItems || 'left',
            textAlign: props.textAlign || 'left'
        }
    })
  return (
    <div style={columnProperties.containerStyle}>
        {props.title && <h3>{props.title}</h3>}
        {props.children}
    </div>
  )
}

export default Column


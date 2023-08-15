import React from 'react'

function Row(props) {
    const rowContainerStyle = {
        width: '100%'
    }
    
    const rowStyle = {
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
    }
  return (
    <div style={rowContainerStyle}>
        <div style={rowStyle}>
            {props.children}
        </div>
    </div>
  )
}

export default Row

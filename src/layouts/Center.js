import React from 'react'

function Center(props) {  
  const centerContainerStyle = {
    width: '100%',
  }
  
  const centerStyle = {
    width: props.width,
    margin: 'auto',
  }
  return (
    <div style={centerContainerStyle}>
        <div style={centerStyle}>{props.children}</div>
    </div>
  )
}

export default Center


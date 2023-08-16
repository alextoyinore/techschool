import React from 'react'

function Row(props) {

    const rowStyle = {
        display: 'flex',
        gap: props.gap,
        flexWrap: 'wrap',
        justifyContent: !props.justify ? 'flex-start' : props.justify,
        alignContent: 'center',
        alignItems: 'center',
    }

  return (
    <div style={rowStyle}>
        {props.children}
    </div>
  )
}

export default Row

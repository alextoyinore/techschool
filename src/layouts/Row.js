import React from 'react'

function Row(props) {

    const rowStyle = {
        display: 'flex',
        flexDirection: 'row',
        gap: props.gap,
        flexWrap: props.wrap ? props.wrap : 'wrap',
        justifyContent: !props.justify ? 'flex-start' : props.justify,
        alignContent: 'center',
        alignItems: props.align ? 'top' : 'center',
        width: props.width,
    }

  return (
    <div style={rowStyle}>
        {props.children}
    </div>
  )
}

export default Row


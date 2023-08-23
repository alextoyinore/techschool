import React from 'react'

function Row(props) {

    const rowStyle = {
        display: 'flex',
        flexDirection: 'row',
        gap: props.gap,
        position: 'relative',
        flexWrap: props.wrap == 'nowrap' ? props.wrap : 'wrap',
        overflow: props.wrap == 'nowrap' ? 'hidden' : props.overflow,
        justifyContent: !props.justify ? 'flex-start' : props.justify,
        alignContent: 'center',
        alignItems: props.align ? 'top' : 'center',
        scrollBehavior: 'auto',
        width: props.width,
    }

  return (
    <div onDrag={props.onDrag} style={rowStyle}>
        {props.children}
    </div>
  )
}

export default Row


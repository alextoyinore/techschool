import React from 'react'

function Container(props) {
    const styles = {
        width: props.wdith,
        height: props.height,
        padding: props.padding,
    }
  return (
    <div style={styles}>
        {props.children}
    </div>
  )
}

export default Container

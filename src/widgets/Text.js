import React from 'react'

function Text({text, ...props}) {
    const textStyle = {
        color: props.style,
        textAlign: props.textAlign,
        width: '100%' || props.width,
    }
  return (
    <div style={textStyle}>
        {text}
    </div>
  )
}

export default Text

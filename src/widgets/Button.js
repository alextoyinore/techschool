import React from 'react'
import Center from '../layouts/Center'
import Row from '../layouts/Row'

function Button(
  {
    text, 
    clickAction, 
    fontWeight, 
    fontSize='1rem', 
    icon='chevron_right', 
    disabled, 
    height='3.3rem',
    borderRadius='.5rem',
    padding,
    width,
    color,
  }) {
  
  const btnStyle = {
    padding: padding,
    fontSize: fontSize,
    fontWeight: fontWeight,
    borderRadius: borderRadius,
    height: height,
    width: width,
    color: color,
  }

  return (
    <button
        style={btnStyle}
        onClick={clickAction}
        disabled={disabled} 
        className='ts-btn'>
          <Center>
            <Row justify='space-between'>
              {text && <span>{text}</span>}
              {icon && <span className="material-symbols-outlined">{icon}</span>}
            </Row>
          </Center>
    </button>
  )
}

export default Button


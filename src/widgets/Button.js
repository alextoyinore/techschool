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
    color = '#fff',
    backgroundImage = 'linear-gradient(to right, rgb(8, 71, 184), rgb(11, 87, 221))'
  }) {
  
  const btnStyle = {
    padding: padding,
    fontSize: fontSize,
    fontWeight: fontWeight,
    borderRadius: borderRadius,
    backgroundImage: backgroundImage,
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


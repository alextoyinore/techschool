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
  }) {
  
  const btnStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    padding: padding,
    fontSize: fontSize,
    fontWeight: fontWeight,
    borderRadius: borderRadius,
    height: height,
    width: width,
  }

  return (
    <div>
      <button
          style={btnStyles}
          onClick={clickAction}
          disabled={disabled} 
          className='ts-btn'>
            <Center width='80%'>
              <Row>
                {text && <span>{text}</span>}
                {icon && <span className="material-symbols-outlined">{icon}</span>}
              </Row>
            </Center>
      </button>
    </div>
    
  )
}

export default Button


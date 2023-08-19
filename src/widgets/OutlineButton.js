import React from 'react'
import Row from '../layouts/Row'

function OutlineButton(
  {
    text, 
    clickAction, 
    fontWeight, 
    fontSize='1rem', 
    icon='chevron_right', 
    disabled, 
    height='3.3rem',
    borderRadius='.5rem',
    padding='0 1rem',
    width,
    color,
    outline,
    active,
  }) {    
  
  const btnStyle = {
    padding: padding,
    fontSize: fontSize,
    fontWeight: fontWeight,
    borderRadius: borderRadius,
    height: height,
    width: width,
    outline: outline,
    color: color,
    active: active,
    backgroundColor:'transparent'
  }

  return (
    <button
        style={btnStyle}
        onClick={clickAction}
        disabled={disabled} 
        className='ts-btn-outline'>
            <Row justify='space-between'>
              {text && <span>{text}</span>}
              {icon && <span className="material-symbols-outlined">{icon}</span>}
            </Row>
    </button>
  )
}

export default OutlineButton


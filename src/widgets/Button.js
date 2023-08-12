import React from 'react'

function Button({text, clicked, fontWeight, fontSize='1rem', icon}) {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 1rem',
    fontSize: fontSize,
  }

  return (
    <div>
      <button
          style={icon && styles}
          onClick={clicked} 
          className='ts-btn'>
            <span>{text}</span>
            <span className={icon}></span>
      </button>
    </div>
    
  )
}

export default Button


import React from 'react'

function OutlineButton({text, clicked, fontWeight, fontSize='1rem', icon}) {
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
          className='ts-btn-outline'>
          <span>{text}</span>
          <span className={icon}></span>
      </button>
    </div>
    
  )
}

export default OutlineButton


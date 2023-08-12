import React from 'react'

function Button({text, clicked, fontWeight}) {
  return (
    <div>
      <button 
          onClick={clicked} 
          className='ts-btn'>
          {text}
      </button>
    </div>
    
  )
}

export default Button


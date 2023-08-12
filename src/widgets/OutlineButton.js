import React from 'react'

function OutlineButton({text, clicked, fontWeight}) {
  return (
    <div>
      <button 
          onClick={clicked} 
          className='ts-btn-outline'>
          {text}
      </button>
    </div>
    
  )
}

export default OutlineButton


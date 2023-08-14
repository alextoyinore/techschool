import React from 'react'

function Button({text, isSearch, clicked, fontWeight, fontSize='1rem', icon='chevron_right'}) {
  if(isSearch){
    icon = 'search'
  }
  
  const styles = {
    display: isSearch ? 'block' : 'flex',
    justifyContent: 'space-between',
    padding: isSearch ? '.5rem 1rem' : '1rem 1rem',
    fontSize: fontSize,
    fontWeight: fontWeight,
    borderRadius: isSearch ? '0 .5rem .5rem 0' : '.5rem',
    height: isSearch && '3.3rem'
  }

  return (
    <div>
      <button
          style={icon && styles}
          onClick={clicked} 
          className='ts-btn'>
            {!isSearch && <span>{text}</span>}
            <span className="material-symbols-outlined">{icon}</span>
      </button>
    </div>
    
  )
}

export default Button


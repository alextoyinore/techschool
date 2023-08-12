import React from 'react'

function Button({text, isSearch, clicked, fontWeight, fontSize='1rem', icon}) {
  if(isSearch){
    icon = 'fa fa-search'
  }
  
  const styles = {
    display: isSearch ? 'block' : 'flex',
    justifyContent: 'space-between',
    padding: '1rem 1rem',
    fontSize: fontSize,
    fontWeight: fontWeight,
    borderRadius: isSearch ? '0 .5rem .5rem 0' : '.5rem',
  }

  return (
    <div>
      <button
          style={icon && styles}
          onClick={clicked} 
          className='ts-btn'>
            {!isSearch && <span>{text}</span>}
            <span className={icon}></span>
      </button>
    </div>
    
  )
}

export default Button


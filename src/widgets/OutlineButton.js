import React from 'react'

function OutlineButton({text, isSearch, clicked, fontWeight, fontSize='1rem', icon='chevron_right'}) {
  if(isSearch){
    icon = 'search'
  }

  const styles = {
    display: isSearch ? 'block' : 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '.75rem 1rem',
    fontSize: fontSize,
    fontWeight: fontWeight,
    borderRadius: isSearch ? '0 .5rem .5rem 0' : '.5rem',
  }

  return (
    <div>
      <button
          style={icon && styles}
          onClick={clicked} 
          className='ts-btn-outline'>
         {!isSearch && <span>{text}</span>}
         <span className="material-symbols-outlined">{icon}</span>
      </button>
    </div>
    
  )
}

export default OutlineButton


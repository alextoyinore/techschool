import React from 'react'

function NavItem({text, icon='expand_more', color, fontSize, textTransform, action}) {
    const topnavStyle = {
        color: color ,
        fontSize: fontSize,
        textTransform: textTransform,
    }
  return (
    <div style={topnavStyle} className='nav-item'>
        <span onClick={action}>{text}</span>
        <span className="material-symbols-outlined">{icon}</span>
    </div>
  )
}

export default NavItem


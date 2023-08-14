import React from 'react'

function TopNavItem({text, icon='expand_more', color, action}) {
    const topnavStyle = {
        color: color ,
    }
  return (
    <div style={topnavStyle} className='topnav-item'>
        <span onClick={action}>{text}</span>
        <span className="material-symbols-outlined">{icon}</span>
    </div>
  )
}

export default TopNavItem

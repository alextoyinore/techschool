import React from 'react'

function TopNavItem({text, icon='expand_more', action}) {
    const topnavStyle = {
        
    }
  return (
    <div style={topnavStyle} className='topnav-item'>
        <span onClick={action}>{text}</span>
        <span className="material-symbols-outlined">{icon}</span>
    </div>
  )
}

export default TopNavItem

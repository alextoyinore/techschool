import React from 'react'

function Row(props) {
    const rowContainerStyle = {
        width: '100%'
    }
    
    const rowStyle = {
        
    }
  return (
    <div>
        <div>
            {props.children}
        </div>
    </div>
  )
}

export default Row
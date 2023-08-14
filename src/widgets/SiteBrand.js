import React from 'react'
import Logo  from '../assets/images/logo.png'

function SiteBrand() {
    const siteBrandStyle = {
        width: '10%',

        img : {
            height: '1.5rem',
        }
    }
  return (
    <div style={siteBrandStyle}>
        <img style={siteBrandStyle.img} src={Logo} alt=''/>
    </div>
  )
}

export default SiteBrand


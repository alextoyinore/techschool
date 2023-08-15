import React from 'react'
import NavItem from '../widgets/NavItem'
import SiteBrand from '../widgets/SiteBrand'
import OutlineButton from '../widgets/OutlineButton'
import Local from '../data/Local'

function TopNav() {
    const topnavStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '2rem',
        width: '80%',
        margin: 'auto',
        height: '10vh',
        alignItems: 'center',
        alignContent: 'center',
    }

    const topnavCtaStyle = {
        width: '15%'
    }

    const topnavContainerStyle = {
        width: '100%', 
        position: 'fixed', 
        left: '0', 
        top:'0', 
        background: 'white', 
        boxShadow: '0 0 2rem #0003',
        zIndex: '999',
    }

    const topLineNavStyle = {
        width: '100%',
        height: '1.75rem',
        background: 'rgb(8, 71, 184)',
        alignContent: 'center',
        alignItems: 'center',
    }

    const topLineNavContentStyle = {
        width: '45%',
        margin: 'auto',
        display: 'flex',
        gap: '2rem',
        alignContent: 'center',
        alignItems: 'center',
    }


  return (
    <div style={topnavContainerStyle}>
        <div style={topLineNavStyle}>
            <div style={topLineNavContentStyle}>
                {Local.listItems.map((item) => <NavItem color='white' text={item} />)}
            </div>
        </div>
        <div style={topnavStyle}>
            <SiteBrand />
            <div style={topnavCtaStyle}>
                <OutlineButton text='Get Started' />
            </div> 
        </div>
    </div>
  )
}

export default TopNav

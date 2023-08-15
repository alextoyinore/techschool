import React from 'react'
import TopNavItem from '../widgets/TopNavItem'
import SearchField from '../widgets/SearchField'
import SiteBrand from '../widgets/SiteBrand'
import OutlineButton from '../widgets/OutlineButton'
import Local from '../data/Local'

function TopNav() {
    const topNavItemListStyle = {
        display: 'flex',
        gap: '2rem',
        width: '45%',
    }

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

    const topnavSearchStyle = {
        width: '25%',
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
        zIndex: '1',
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
                {Local.listItems.map((item) => <TopNavItem color='white' text={item} />)}
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

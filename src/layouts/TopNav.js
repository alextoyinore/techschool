import React from 'react'
import TopNavItem from '../widgets/TopNavItem'
import SearchField from '../widgets/SearchField'
import SiteBrand from '../widgets/SiteBrand'
import OutlineButton from '../widgets/OutlineButton'

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
        width: '13%'
    }

    const listItems = [
        'Kids Zone', 'Students', 'Undergrads', 'For Women'
    ]

  return (
    <div style={{width: '100%', position: 'fixed', left: '0', top:'0', background: 'white', boxShadow: '0 0 2rem #0003',}}>
        <div style={topnavStyle}>
            <SiteBrand />
            {/* <div style={topnavSearchStyle}>
                <SearchField hintText='Search for courses' />
            </div> */}
            <div style={topNavItemListStyle}>
                {listItems.map((item) => <TopNavItem text={item} />)}
            </div>
            <div style={topnavCtaStyle}>
                <OutlineButton text='Get Started' />
            </div> 
        </div>
    </div>
  )
}

export default TopNav

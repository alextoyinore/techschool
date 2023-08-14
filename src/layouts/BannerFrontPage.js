import React from 'react'
import SearchField from '../widgets/SearchField'
import BannerBG from '../assets/images/bannerBG.png'

function BannerFrontPage({image=BannerBG}) {
    const frontBannerStyle = {
        width: '100%',
        height: '50vh',
        backgroundImage: 'linear-gradient(to right, rgb(8, 71, 184), rgb(11, 87, 221))',
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
    }

    const frontBannerDecorationStyle = {
        width: '100%',
        height: '100%',
        display: 'flex',
        background: "url({bannerBG})"
    }

    const h1Style = {
        fontSize: '4rem', 
        color:'white', 
        lineHeight: '4.6rem', 
        fontWeight: 'light',
        marginTop: '4rem',
        textAlign: 'center'
    }

    const fontBannerContentStyle = {
        width: '50%',
        margin: 'auto'
    }

  return (
    <div style={frontBannerStyle}>
        <div style={frontBannerDecorationStyle}>
            <div style={fontBannerContentStyle}>
                <h1 style={h1Style}>
                    Powering the Future <br/>of African Wealth
                </h1>
                <br/><br/>
                <SearchField hintText='Search Courses' />
            </div>
            {/* <div style={frontBannerContentRightStyle}>
                <img style={frontBannerContentRightStyle.img} alt='' src={image} />
            </div> */}
        </div>
    </div>
  )
}

export default BannerFrontPage


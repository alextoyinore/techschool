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
    }

    const h1Style = {
        fontSize: '4rem', 
        color:'white', 
        lineHeight: '4.6rem', 
        fontWeight: 'light',
        marginTop: '9rem',
        textAlign: 'center'
    }

    const fontBannerContentStyle = {
        width: '50%',
        margin: 'auto',
        zIndex: '1',
    }

    const frontBannerContentImage = {

        width: '100%',
        height: '50vh',
        overflow: 'hidden',

        img : {
            display: 'block',
            position: 'absolute',
            opacity: '.05',
            top: 0,
            left: '2.5%',
            margin: 'auto',
            alignContent: 'center',
            alignItems: 'center',
            objectFit: 'cover',
            height: '60%',
            transform: 'rotate3d(1, 1, 1, 30deg)',
            transformStyle: 'preserve-3d',
            scale: '.65',
        }
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
            <div style={frontBannerContentImage}>
                <img style={frontBannerContentImage.img} alt='' src={image} />
            </div>
        </div>
    </div>
  )
}

export default BannerFrontPage


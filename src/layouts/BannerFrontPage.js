import React from 'react'
import SearchField from '../widgets/SearchField'
import BannerBG from '../../assets/images/bannerBG.png'

function BannerFrontPage({image=BannerBG}) {
    const frontBannerStyle = {
        width: '100%',
        height: '60vh',
        backgroundImage: 'linear-gradient(to right, rgb(18, 39, 197), rgb(35, 58, 234))',
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
    }

    const frontBannerContentStyle = {
        width: '80%',
        margin: 'auto',
        height: '100%',
        display: 'flex',
    }

    const h1Style = {
        fontSize: '4rem', 
        color:'white', 
        lineHeight: '4.5rem', 
        fontWeight: 'light',
        marginTop: '8rem',
    }

    const frontBannerContentRightStyle = {
        width: '60%',

        img : {
            height: '35rem',
        }
    }

  return (
    <div style={frontBannerStyle}>
        <div style={frontBannerContentStyle}>
            <div style={{width: '40%'}}>
                <h1 style={h1Style}>
                    Powering<br/> the Future of African Wealth
                </h1>
                <br/><br/>
                <SearchField hintText='Search Courses' />
            </div>
            <div style={frontBannerContentRightStyle}>
                <img style={frontBannerContentRightStyle.img} alt='' src={image} />
            </div>
        </div>
    </div>
  )
}

export default BannerFrontPage


import React from 'react'
import Center from './Center'
import Button from '../widgets/Button'
import CardSlider from './CardSlider'
import Local from '../data/Local'
import OutlineButton from '../widgets/OutlineButton'

function ShowCase({cardSliderList, titleMessage, excerpt, ctaText}) {
    const showCaseContainer = {
        height: '35rem',
        border: '1px solid #eee',
        borderRadius: '.5rem',
        padding: '2rem',
    }

    const ctaBtnStyle = {
        width: '17.5%',
    }

    const excerptStyle = {
        width: '75%',
        color: '#777',
        lineHeight: '1.5rem',
        fontSize: '1rem',
    }

    const showCaseTitleStyle = {
        fontSize: '2.5rem'
    }
  return (
    <Center>
        <div style={showCaseContainer}>
            <h2 style={showCaseTitleStyle}>{titleMessage}</h2>
            <br/>
            <div style={excerptStyle}>{excerpt}</div>
            <br/>
            <div style={ctaBtnStyle}><Button text={ctaText} /></div>
            <CardSlider data={cardSliderList} />
        </div>
    </Center>  
  )
}

export default ShowCase


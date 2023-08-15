import React from 'react'
import Center from '../layouts/Center'
import Button from '../widgets/Button'
import CardSlider from './CardSlider'

function ShowCase({cardSliderList, titleMessage, excerpt, ctaText}) {
    const showCaseContainer = {
        height: '35rem',
        border: '1px solid #eee',
        borderRadius: '.5rem',
        padding: '2rem',
    }

    const excerptStyle = {
        width: '75%',
        color: '#777',
        lineHeight: '1.3rem',
        fontSize: '.9rem',
    }

    const showCaseTitleStyle = {
        fontSize: '2.5rem'
    }
  return (
    <div style={showCaseContainer}>
        <h2 style={showCaseTitleStyle}>{titleMessage}</h2>
        <br/>
        <div style={excerptStyle}>{excerpt}</div>
        <br/>
        <div style={{}}><Button width='20%' text={ctaText} /></div>
        <CardSlider data={cardSliderList} />
    </div> 
  )
}

export default ShowCase


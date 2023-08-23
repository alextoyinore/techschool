import React from 'react'
import Button from '../widgets/Button'
import CardSlider from './CourseCardCarousel'
import Row from '../layouts/Row'
import Local from '../data/Local'
import OutlineButton from '../widgets/OutlineButton'

function ShowCase({cardSliderList, titleMessage, excerpt, btnText}) {
    const showCaseContainer = {
        border: '1px solid #eee',
        borderRadius: '.5rem',
        padding: '2rem',
        background: '#eee3',
    }

    const excerptStyle = {
        width: '85%',
        color: '#777',
        lineHeight: '1.3rem',
        fontSize: '.9rem',
    }

    const showCaseTitleStyle = {
        fontSize: '2.5rem'
    }

  return (
    <div style={showCaseContainer}>
        <Row gap='.6rem'>
            {Local.topics.map((item)=>
                <OutlineButton 
                text={item} 
                icon='' 
                borderRadius='.5rem'
                height='1.75rem' 
                fontSize='.75rem' />
            )}
        </Row>
        <br/><hr/><br/>
        <h2 style={showCaseTitleStyle}>{titleMessage}</h2>
        <br/>
        <div style={excerptStyle}>{excerpt}</div>
        <br/>
        <Button border='0' width='17.5%' padding='0 2rem' text={btnText} /><br/>
        <CardSlider data={cardSliderList} />
    </div> 
  )
}

export default ShowCase


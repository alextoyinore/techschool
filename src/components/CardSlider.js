import React from 'react'
import VerticalCourseCard from './VerticalCourseCard'
import NavItem from '../widgets/NavItem'
import Row from '../layouts/Row'

function CardSlider({title, data}) {
    
    const cardSliderContaierStyle = {
        width: '100%',
        overflowX: 'hidden'
    }

    const seeAllStyle = {
        width: '5rem'
    }

    const sliderNavsStyle = {
        position: 'relative',
        top: '-172px',
        fontSize: '4rem',
        color: '#fff',
        background: '#0002',
        cursor: 'pointer',
        // zIndex: '1'
    }

    const cardsWrapper = document.getElementById('cardsWrapper')

    const scrollLeft = () => {
        cardsWrapper.style.left = (cardsWrapper.style.left - 100) + 'px'
    }


  return (
    <div style={cardSliderContaierStyle}>
        <Row gap='1rem'>
            {title && <h3 style={{fontWeight: 'lighter'}}>{title}</h3>}
            {title && <div style={seeAllStyle}>
                <NavItem text='See All' icon='chevron_right' />
            </div>}
        </Row>
        <br/>
        <div id='cardsWrapper' style={{width: (data.length * 300)+'px'}}>
            <Row style={{whiteSpace: 'nowrap'}} wrap='nowrap' width='100%' gap='2rem'>
                {data.map((d)=><VerticalCourseCard cardData={d} />)}
            </Row>
        </div>
        <Row justify='space-between'>
            <span onClick={scrollLeft} style={sliderNavsStyle} className="material-symbols-outlined">chevron_left</span>
            <span style={sliderNavsStyle} className="material-symbols-outlined">chevron_right</span>
        </Row>
    </div>
  )
}

export default CardSlider


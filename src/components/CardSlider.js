import React from 'react'
import VerticalCourseCard from './VerticalCourseCard'
import NavItem from '../widgets/NavItem'
import Row from '../layouts/Row'

function CardSlider({title, data}) {
    
    const cardSliderContaierStyle = {
        width: '100%', 
    }

    const seeAllStyle = {
        width: '5rem'
    }

  return (
    <div style={cardSliderContaierStyle}>
        <Row>
        <h3 style={{fontWeight: 'lighter'}}>{title}</h3>
            {title && <div style={seeAllStyle}>
                <NavItem text='See All' icon='chevron_right' />
            </div>}
        </Row>
        <br/>
        <Row>
            {data.map((d)=><VerticalCourseCard cardData={d} />)}
        </Row>
        <br/>
    </div>
  )
}

export default CardSlider

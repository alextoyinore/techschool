import React from 'react'
import CourseCardVertical from './CourseCardVertical'
import TopNavItem from '../widgets/TopNavItem'
import Center from '../layouts/Center'
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
                <TopNavItem text='See All' icon='chevron_right' />
            </div>}
        </Row>
        <br/>
        <Row>
            {data.map((d)=><CourseCardVertical cardData={d} />)}
        </Row>
        <br/>
    </div>
  )
}

export default CardSlider

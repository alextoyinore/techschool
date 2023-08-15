import React from 'react'
import CourseCardVertical from './CourseCardVertical'
import TopNavItem from '../widgets/TopNavItem'
import Center from '../layouts/Center'

function CardSlider({title, data}) {
    
    const cardSlider = {
        display: 'flex', 
        gap:'2.2rem', 
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        // overflow: 'hidden',
    }

    const cardSliderHeader = {
        display: 'flex', 
        justifyContent: 'space-between',
        padding: '1rem 0',
        color: '#333',
    }

    const cardSliderContaierStyle = {
        width: '100%', 
        margin: 'auto', 
    }

    const seeAllStyle = {
        width: '5rem'
    }

  return (
    <div style={cardSliderContaierStyle}>
        <div style={cardSliderHeader}>
            <h3 style={{fontWeight: 'lighter'}}>{title}</h3>
            {title && <div style={seeAllStyle}>
                <TopNavItem text='See All' icon='chevron_right' />
            </div>}
        </div>
         <div style={cardSlider}>
            {data.map((d)=><CourseCardVertical cardData={d} />)}
        </div>
        <br/>
    </div>
  )
}

export default CardSlider

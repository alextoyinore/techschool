import React from 'react'
import CourseCardVertical from '../widgets/CourseCardVertical'
import TopNavItem from '../widgets/TopNavItem'

function CardSlider({title, data}) {
    
    const cardSlider = {
        display: 'flex', 
        gap:'1.2rem', 
        flexWrap: 'wrap', 
        justifyContent: 'flex-start'
    }

    const cardSliderHeader = {
        display: 'flex', 
        // gap:'1rem', 
        justifyContent: 'space-between',
        padding: '1rem 0',
        color: '#333',
    }

    const cardSliderContaierStyle = {
        width: '80%', 
        margin: 'auto', 
    }

    const seeAllStyle = {
        width: '5rem'
    }

  return (
    <div style={cardSliderContaierStyle}>
        <div style={cardSliderHeader}>
            <h3 style={{fontWeight: 'lighter'}}>{title}</h3>
            <div style={seeAllStyle}>
                <TopNavItem text='See All' icon='chevron_right' />
            </div>
        </div>
         <div style={cardSlider}>
            {data.map((d)=><CourseCardVertical cardData={d} />)}
        </div>
        <br/>
    </div>
  )
}

export default CardSlider

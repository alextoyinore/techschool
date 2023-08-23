import React from 'react'
import VerticalCourseCard from './VerticalCourseCard'
import NavItem from '../widgets/NavItem'
import Row from '../layouts/Row'

function CourseCardCarousel({title, data}) {
    
    const cardSliderContaierStyle = {
        cursor: 'grab',
        position: 'relative',
    }

    const seeAllStyle = {
        width: '5rem'
    }

    const sliderNavsStyle = {
        top: '54%',
        position: 'absolute',
        fontSize: '4rem',
        color: '#fff',
        background: '#0002',
        cursor: 'pointer',
        transform: 'translateY(-50%)'
    }

    let isDragStart = false

    const dragStart = () => {
        isDragStart = true
    }

    const dragStop = () => {
        isDragStart = false
    }

    const carousel = document.querySelector('.carousel')
    const carouselContainer = document.querySelector('#carousel-container')

    const dragging = (e) => {
        // if(!isDragStart) return
        // e.preventDefault()
        carouselContainer.scrollLeft = e.pageX
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

        <i id='left-scroller' style={sliderNavsStyle} className="material-symbols-outlined">chevron_left</i>

        <Row id='carousel-container' wrap='nowrap'>
            <div className='carousel'>
                {data.map((d)=><div onDrag={dragging}><VerticalCourseCard cardData={d} /></div>)}
            </div>
        </Row>
        <i id='right-scroller' style={sliderNavsStyle} className="material-symbols-outlined">chevron_right</i>
    </div>
  )
}

export default CourseCardCarousel


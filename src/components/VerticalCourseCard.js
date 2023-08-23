import React from 'react'

function VerticalCourseCard({cardData, ...props}) {
    const cardStyle = {
        // width: '14.426%',
        // height: '16rem',
        // border: '1px solid #eee',
        // borderRadius: '.3rem',
        // cursor: 'pointer',
    }

    const cardImgStyle = {
        // height: '50%',
        // width: '100%',
        // objectFit: 'cover',
        // borderRadius: '.3rem .3rem 0 0',
    }

    const cardInfoStyle = {
      // padding: '.5rem',
      // display: 'flex',
      // justifyContent: 'space-between',
      // flexDirection: 'column',
      // height: '7.5rem',
    }

  return (
    <article onDrag={props.onDrag} className='vertical-course-card' style={cardStyle}>
        <img style={cardImgStyle} className='card-img'
        src={cardData.img} 
        alt={cardData.courseTitle} />
        <div style={cardInfoStyle} className='card-info'>
          <h3>{cardData.courseTitle}</h3>
          <span>{cardData.courseDuration}, {cardData.courseGrade}</span>
        </div>
    </article>
  )
}

export default VerticalCourseCard


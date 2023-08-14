import React from 'react'

function CourseCardVertical({cardData}) {
    const cardStyle = {
        width: '12rem',
        height: '16rem',
        border: '1px solid #eee',
        borderRadius: '.3rem',
        cursor: 'pointer',
    }

    const cardImgStyle = {
        height: '50%',
        width: '100%',
        objectFit: 'cover',
        borderRadius: '.3rem .3rem 0 0',
    }

    const cardInfoStyle = {
      padding: '.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      height: '7.5rem',
    }

  return (
    <article style={cardStyle}>
        <img style={cardImgStyle} 
        src={cardData.img} 
        alt={cardData.courseTitle} />
        <div style={cardInfoStyle}>
          <h3 style={{color: '#333', fontWeight: 'lighter', fontSize: '1rem', lineHeight: '1.3rem'}}>{cardData.courseTitle}</h3>
          <span style={{fontSize: '.75rem', color: '#999'}}>{cardData.courseDuration}, {cardData.courseGrade}</span>
        </div>
    </article>
  )
}

export default CourseCardVertical


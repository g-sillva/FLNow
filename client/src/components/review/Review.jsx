import React from 'react'
import './Review.scss'

const Review = ({ review }) => {
  return (
    <div className='item'>
        <div className='user'>
            <img className='profile_picture' src="/img/avatar.jpg" alt="" />
            <div className='info'>
                <span>John Doe</span>
                <div className='country'>
                    <span>United States</span>
                </div>
            </div>
        </div>
        <div className='start'>
            <img src='/img/star.png' alt='' />
            <span>5</span>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, doloremque.</p>
        <div className='helpful'>
            <span>Helpful?</span>
            <img src='/img/like.png' alt='' />
            <span>Yes</span>
            <img src='/img/dislike.png' alt='' />
            <span>No</span>
        </div>
    </div>
  )
}

export default Review
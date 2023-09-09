import React from 'react'
import './Review.scss'

const Review = ({ review }) => {
  return (
    <div className='review'>
        <div className='user'>
            <img className='profile_picture' src="/img/avatar.jpg" alt="" />
            <div className='info'>
                <span>John Doe</span>
                <div className='country'>
                    <img src='/img/flag.png' alt='' />
                    <span>United States</span>
                </div>
            </div>
        </div>
        <div className='stars'>
            <img src='/img/star.png' alt='' />
            <img src='/img/star.png' alt='' />
            <img src='/img/star.png' alt='' />
            <img src='/img/star.png' alt='' />
            <img src='/img/star.png' alt='' />
            <span>5</span>
        </div>
        <p>This is a random paragraph with length 100. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed tincidunt aliquam, nunc nisl ultrices odio, qui</p>
        <div className='helpful'>
            <span>Helpful?</span>
            <div className='icon-wrapper'>
                <img src='/img/like.png' alt='' />
            </div>
            <span>Yes</span>
            <div className='icon-wrapper'>
                <img src='/img/dislike.png' alt='' />
            </div>
            <span>No</span>
        </div>
    </div>
  )
}

export default Review
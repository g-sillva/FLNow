import React from 'react'
import { Link } from 'react-router-dom'
import './Message.scss'

const Message = () => {
  return (
    <div className="message">
    <div className="container">
      <span className="breadcrumbs">
        <Link to="/messages">Messages</Link> {'>'} John Doe {'>'}
      </span>
        <div className="messages">
            <div className="owner item">
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>Description here</p>
            </div>
        </div>
      <hr />
      <form className="write" >
        <textarea type="text" placeholder="write a message" />
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
  )
}

export default Message
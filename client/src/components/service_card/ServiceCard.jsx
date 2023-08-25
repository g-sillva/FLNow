import React from 'react';
import { Link } from "react-router-dom";

function ServiceCard({ item }) {
  return (
    <Link to={`/service/${item._id}`} className="link">
      <div className="service_card">
        <img src={item.images[0]} alt="" />
        <div className="info">
            <div className="user">
              <img src={"/img/avatar.jpg"} alt="" />
              <span>Username</span>
            </div>
          <p>{item.title}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>$ {item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ServiceCard
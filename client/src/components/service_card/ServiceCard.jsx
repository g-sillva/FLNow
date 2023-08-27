import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.scss";

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
          <div className="text">
            <p className="title">{item.title}</p>
            <p>
              {item.shortDescription.length > 100
                ? item.shortDescription.substring(0, 100) + "..."
                : item.shortDescription}
            </p>
          </div>
        </div>
        <hr />
        <div className="detail">
          <div className="icons">
            <img src="./img/heart.png" alt="" />
            <div className="star">
              <img src="./img/star.png" alt="" />
              <span>10</span>
            </div>
          </div>
          <div className="price">
            <span>STARTING AT</span>
            <h2>$ {item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;

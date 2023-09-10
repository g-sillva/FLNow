import React from "react";
import "./Review.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Review = ({ review }) => {
  const { isLoading, error, data: userData } = useQuery({
    queryKey: ["reviewUser"],
    queryFn: () =>
      newRequest.get(`users/${review.userId}`).then((res) => res.data),
  });

  return (
    <div className="review">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="user">
          <img className="profile_picture" src={userData.image || "/img/avatar.jpg"} alt="" />
          <div className="info">
            <span>{userData.username}</span>
            <div className="country">
              <img src="/img/flag.png" alt="" />
              <span>{userData.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src="/img/star.png" alt="" key={i} />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.description}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <div className="icon-wrapper">
          <img src="/img/like.png" alt="" />
        </div>
        <span>Yes</span>
        <div className="icon-wrapper">
          <img src="/img/dislike.png" alt="" />
        </div>
        <span>No</span>
      </div>
    </div>
  );
};

export default Review;

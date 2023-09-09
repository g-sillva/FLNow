import React from "react";
import "./Reviews.scss";
import Review from "../review/Review";

const Reviews = ({ serviceId }) => {
  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <Review review={{}} />
      <div className="add">
        <h3>Add a review</h3>
        <form action="" className="addForm">
          <input type="text" placeholder="write your opinion" />
          <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;

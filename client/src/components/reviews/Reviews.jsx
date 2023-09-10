import React from "react";
import "./Reviews.scss";
import { useQuery } from "@tanstack/react-query";
import Review from "../review/Review";
import newRequest from "../../utils/newRequest";

const Reviews = ({ serviceId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => newRequest(`reviews/${serviceId}`).then((res) => res.data),
  });

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading
        ? "loading"
        : error
        ? "Something went wrong!"
        : data.map((review) => (
            <>
              <Review key={review._id} review={review} />
              <hr />
            </>
          ))}
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

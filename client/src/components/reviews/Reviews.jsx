import React, { useState } from "react";
import "./Reviews.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Review from "../review/Review";
import newRequest from "../../utils/newRequest";

const Reviews = ({ serviceId }) => {
  const [submitError, setSubmitError] = useState(null);

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => newRequest(`reviews/${serviceId}`).then((res) => res.data),
  });

  const mutation = useMutation({
    mutationFn: (review) => newRequest.post("/reviews", review),
    onSuccess: () => {
      queryClient.invalidateQueries("reviews");
    },
    onError: (error) => {
      setSubmitError(error.response.data.message);
    },
  });

  const handleSumit = (e) => {
    e.preventDefault();
    setSubmitError(null);
    const description = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ serviceId, description, star });
  };

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
        <form action="" className="addForm" onSubmit={handleSumit}>
          <input
            type="text"
            className={submitError ? "error-input" : ""}
            placeholder="write your opinion"
          />
          {submitError && <p className="error-message">{submitError}</p>}
          <select className={submitError ? "error-input" : ""} name="" id="">
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

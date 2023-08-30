import "./Service.scss";

import React from 'react'
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { Link, useParams } from "react-router-dom";

function Service() {
    const { id } = useParams();

    const { isLoading, error, data } = useQuery({
        queryKey: ["service"],
        queryFn: () =>
          newRequest.get(`/services/${id}`).then((res) => {
            return res.data;
          }),
      });

      const userId = data?.userId;

      const {
        isLoading: isLoadingUser,
        error: errorUser,
        data: dataUser,
      } = useQuery({
        queryKey: ["user"],
        queryFn: () =>
          newRequest.get(`/users/${userId}`).then((res) => {
            return res.data;
          }),
        enabled: !!userId,
      });

  return (
    <div className="service">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">{JSON.stringify(data)}</div>
      )}
    </div>
  )
}

export default Service
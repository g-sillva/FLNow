import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () => newRequest.get(`/conversations`).then((res) => res.data),
  });

  const mutation = useMutation({
    mutationFn: (id) => newRequest.put(`/conversations/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries("conversations");
    }
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  }

  return (
    <div className="messages">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <h1 className="title">Messages</h1>
          <table>
            <thead>
              <tr>
                <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((c, i) => (
                <tr
                  className={
                    ((currentUser.isSeller && !c.readBySeller) ||
                    (!currentUser.isSeller && !c.readByBuyer)) && "active"
                  }
                  key={i}
                >
                  <td>{currentUser.isSeller ? c.buyerId : c.sellerId}</td>
                  <td>
                    <Link to={`/message/customer_id`} className="link">
                      {c?.lastMessage?.substring(0, 100)}...
                    </Link>
                  </td>
                  <td>{moment(c.updatedAt).fromNow()}</td>
                  <td>
                    {((currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readByBuyer)) && (
                        <button onClick={() => handleRead(c.conversationId)}>Mark as Read</button>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Messages;

import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";
import moment from "moment";

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  console.log(currentUser);

  return (
    <div className="messages">
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
            <tr className="active">
              <td>
                {currentUser.username}
              </td>
              <td>
                <Link to={`/message/customer_id`} className="link">
                  message
                </Link>
              </td>
              <td>{moment("2023-07-13T23:05:43.867Z").fromNow()}</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;

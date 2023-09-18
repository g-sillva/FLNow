import React from "react";
import "./Orders.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get('/orders').then((res) => res.data),
  });

  const handleContact = async (order) => {
    const { sellerId, buyerId } = order;
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/${id}`);
      navigate(`/messages/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations`, {
          to: user.isSeller ? buyerId : sellerId,
        });
        navigate(`/messages/${res.data.id}`);
      }
    }
  };

  return (
    <div className="orders">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <h1 className="title">Orders</h1>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>{user.isSeller ? "Buyer" : "Seller"}</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr key={order._id}>
                  <td>
                    <img
                      className="image"
                      src={order.image}
                      alt="placeholder"
                    />
                  </td>
                  <td>{order.title}</td>
                  <td>{order.price}</td>
                  <td>{user.username}</td>
                  <td>
                    <img
                      src="./img/message.png"
                      alt="placeholder"
                      className="message"
                      onClick={() => handleContact(order)}
                    />
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

export default Orders;

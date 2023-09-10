import React from "react";
import "./Orders.scss";

const Orders = () => {
  const handleContact = () => {};

  return (
    <div className="orders">
      <div className="container">
        <h1 className="title">Orders</h1>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img className="image" src="https://via.placeholder.com/150" alt="placeholder" />
              </td>
              <td>order title</td>
              <td>order price</td>
              <td>
                <img
                  src="./img/message.png"
                  alt="placeholder"
                  className="message"
                  onClick={() => handleContact()}
                />
              </td>
            </tr>
            <tr>
              <td>
                <img className="image" src="https://via.placeholder.com/150" alt="placeholder" />
              </td>
              <td>order title</td>
              <td>order price</td>
              <td>
                <img
                  src="./img/message.png"
                  alt="placeholder"
                  className="message"
                  onClick={() => handleContact()}
                />
              </td>
            </tr>
            <tr>
              <td>
                <img className="image" src="https://via.placeholder.com/150" alt="placeholder" />
              </td>
              <td>order title</td>
              <td>order price</td>
              <td>
                <img
                  src="./img/message.png"
                  alt="placeholder"
                  className="message"
                  onClick={() => handleContact()}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

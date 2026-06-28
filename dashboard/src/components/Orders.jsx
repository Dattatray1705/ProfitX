import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./OrdersResponsive.css";

import SellActionWindow from "./SellActionWindow";

const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);

  const [selectedStock, setSelectedStock] = useState(null);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/allOrders",
        {
          withCredentials: true,
        }
      );
console.log("Orders API Response:", res.data);
      setAllOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
     console.log("Received orderPlaced event");
    fetchOrders();

     const handleOrderPlaced = () => {
    fetchOrders();
  };
   window.addEventListener(
    "orderPlaced",
    handleOrderPlaced
  );

  return () => {
    window.removeEventListener(
      "orderPlaced",
      handleOrderPlaced
    );
  };
  }, []);

  return (

    <div className="orders">

      {allOrders.length === 0 ? (

        <div className="no-orders">

          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>

        </div>

      ) : (

        <div className="order-table">

          <table>

            <thead>
              <tr>
                <th>Stock</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>

            <tbody>

              {allOrders.map((order, index) => {

                return (

                  <tr
                    key={index}
                    onClick={() => setSelectedStock(order)}
                  >

                    <td>{order.name}</td>

                    <td>{order.qty}</td>

                    <td>₹{order.price}</td>

                    <td
                      className={
                        order.mode === "BUY"
                          ? "profit"
                          : "loss"
                      }
                    >
                      {order.mode}
                    </td>

                  </tr>

                );

              })}

            </tbody>

          </table>

        </div>

      )}

      {

        selectedStock && (

        <SellActionWindow
  stock={selectedStock}
  mode={
    selectedStock.mode === "BUY"
      ? "SELL"
      : "BUY"
  }
  refreshOrders={fetchOrders}
  closeWindow={() => setSelectedStock(null)}
/>

        )

      }

    </div>

  );
};

export default Orders;
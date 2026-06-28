import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Summary.css";
const Summary = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
  axios
    .get("http://localhost:5000/allHoldings", {
      withCredentials: true,
    })
    .then((res) => setAllHoldings(res.data))
    .catch((err) => console.log(err));
}, []);
 
useEffect(() => {
  axios
    .get("http://localhost:5000/funds", {
      withCredentials: true,
    })
    .then((res) => setBalance(res.data.balance))
    .catch((err) => console.log(err));
}, []);
//calculation for summary

const totalInvestment = allHoldings.reduce(
  (total, stock) => total + stock.avg * stock.qty,
  0
);

const currentValue = allHoldings.reduce(
  (total, stock) => total + stock.price * stock.qty,
  0
);

const totalPnL = currentValue - totalInvestment;

const pnlPercentage =
  totalInvestment > 0
    ? ((totalPnL / totalInvestment) * 100).toFixed(2)
    : 0;
  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹{balance.toFixed(2)}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>₹{balance.toFixed(2)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
           <h3 className={totalPnL >= 0 ? "profit" : "loss"}>
  ₹{totalPnL.toFixed(2)}
  <small>{pnlPercentage}%</small>
</h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>₹{currentValue.toFixed(2)}</span>{" "}
            </p>
            <p>
              Investment <span>₹{totalInvestment.toFixed(2)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;

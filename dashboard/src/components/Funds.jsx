import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Funds.css";

const Funds = () => {
  const [balance, setBalance] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(""); 
  const getBalance = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/funds",
        {
          withCredentials: true,
        }
      );

      setBalance(res.data.balance);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  const addFunds = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/funds/add",
        {
          amount: Number(amount),
        },
        {
          withCredentials: true,
        }
      );

      setBalance(res.data.balance);
      setAmount("");
      setShowAddModal(false);
      alert("Funds Added Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const withdrawFunds = async () => {
    try {
      setError("");
      const res = await axios.post(
        "http://localhost:5000/funds/withdraw",
        {
          amount: Number(amount),
        },
        {
          withCredentials: true,
        }
      );

      setBalance(res.data.balance);
      setAmount("");
      setShowWithdrawModal(false);
      alert("Amount Withdrawn Successfully");
    } catch (err) {
  setError(
    err.response?.data?.message ||
    "Something went wrong"
  );
}
  };

  return (
    <>
      <div className="fund-card">
        <h2>Available Balance</h2>
        <h1>₹{balance}</h1>

        <div className="btn-group">
          <button
            className="btn btn-green"
            onClick={() => setShowAddModal(true)}
          >
            Add Funds
          </button>

          <button
            className="btn btn-blue"
            onClick={() => setShowWithdrawModal(true)}
          >
            Withdraw
          </button>
        </div>
      </div>

      {/* Add Fund Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Add Funds</h2>

            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <div className="quick-amounts">
              {[500, 1000, 5000, 10000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt)}
                >
                  ₹{amt}
                </button>
              ))}
            </div>

           <div className="modal-actions">
  <button
    className="cancel-btn"
    onClick={() => {
      setShowAddModal(false);
      setAmount("");
    }}
  >
    Cancel
  </button>

  <button
    className="add-btn"
    onClick={addFunds}
  >
    Add Funds
  </button>
</div>
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="modal-overlay">
         <div className="modal-box">
  <h2>Withdraw Funds</h2>

  <div className="balance-card">
    <p>Available Balance</p>
    <h3>₹{balance}</h3>
  </div>

  <input
    type="number"
    placeholder="₹ Enter amount"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
  />

{error && (
  <p className="error-message">
    {error}
  </p>
)}
  <div className="quick-amounts">
    <button onClick={() => setAmount(100)}>₹100</button>
    <button onClick={() => setAmount(500)}>₹500</button>
    <button onClick={() => setAmount(1000)}>₹1000</button>
    <button onClick={() => setAmount(balance)}>All</button>
  </div>
  <div className="modal-actions">
  <button
    className="cancel-btn"
    onClick={() => {
      setShowWithdrawModal(false);
      setAmount("");
    }}
  >
    Cancel
  </button>

  <button
    className="withdraw-btn"
    onClick={withdrawFunds}
  >
    Withdraw Funds
  </button>
</div>
</div>
        </div>
      )}
    </>
  );
};

export default Funds;
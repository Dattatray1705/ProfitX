import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";
const BuyActionWindow = ({ uid, mode, stockPrice, }) => {
  const [error, setError] = useState("");
  const [stockQuantity, setStockQuantity] = useState(1);
  const [showConfirmBox, setShowConfirmBox] = useState(false);
  const [showJournalForm,setShowJournalForm] =useState(false);
  const [reason, setReason] =useState("");
  const [analysis, setAnalysis] =useState("");
  const [targetPrice,setTargetPrice] =useState("");
  const [holdingPeriod,setHoldingPeriod] =useState("");
 const { closeBuyWindow } = useContext(GeneralContext);

const handleActionClick = async () => {
  console.log("BUY CLICKED");
  try {
 const res =   await axios.post("http://localhost:5000/newOrder", {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: mode,
      
    },
    {
    withCredentials: true,
  });
    console.log("Order Saved:", res.data);
      window.dispatchEvent(   // Refresh Orders page
      new Event("orderPlaced")
    );
  if (res.data.unlockedAchievement) {
  localStorage.setItem(
    "newAchievement",
    res.data.unlockedAchievement
  );
  window.dispatchEvent(
  new Event("storage")
);
}

    alert("Order Successful 🚀");
    

    setShowJournalForm(true);


  } catch (err) {
    setError(
      err.response?.data?.message ||
      "Something went wrong"
    );
  }
};

const saveJournal = async () => {
  try {
    await axios.post(
      "http://localhost:5000/journal",
      {
        stockName: uid,
        reason,
        analysis,
        targetPrice,
        holdingPeriod,
      },
      {
        withCredentials: true,
      }
    );

    alert("Journal Saved ✅");
    setShowJournalForm(false);
    closeBuyWindow();

  } catch (err) {
    console.log(err);
    alert("Failed to save journal");
  }
};

const totalAmount =
  Number(stockQuantity) *
  Number(stockPrice);

  return (
        <div className="blur-overlay"  onClick={() => {
    if (!showJournalForm) {
      closeBuyWindow();
    }
  }}>
    <div className="container" id="buy-window"onClick={(e) => e.stopPropagation()}>
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
  <legend>Price</legend>
  <input
    type="number"
    value={stockPrice}
    readOnly
  />
</fieldset>
 <fieldset>
    <legend>Total</legend>
    <input
      type="number"
      value={totalAmount}
      readOnly
    />
  </fieldset>
        </div>
      </div>

      <div className="buttons">
      <span>Total Amount ₹{totalAmount}</span>
        <div>
          <button
            className={mode === "BUY" ? "btn btn-blue" : "btn btn-red"}
            onClick={() => setShowConfirmBox(true)}
          >
            {mode}
          </button>

          <button className="btn btn-grey" onClick={closeBuyWindow}>
            Cancel
          </button>
        </div>
      </div>
      
      {error && (
  <p className="order-error">
    {error}
  </p>
)}
{showConfirmBox && (
  <div className="confirm-overlay">
    <div className="confirm-container">
      <h3>Confirm Order</h3>

      <p>
        Are you sure you want to buy <b>{stockQuantity}</b> shares of{" "}
        <b>{uid}</b>?
      </p>

      <p>Total Amount: ₹{totalAmount}</p>

      <div className="confirm-buttons">
        <button
          className="btn btn-blue"
          onClick={() => {
            setShowConfirmBox(false);
            handleActionClick();
          }}
        >
          Proceed
        </button>

        <button
          className="btn btn-grey"
          onClick={() => setShowConfirmBox(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}
{showJournalForm && (
  <div className="confirm-overlay">
    <div
      className="journal-container"
      onClick={(e) => e.stopPropagation()}
    >
      <h2>📝 Trading Decision Journal</h2>

      <p className="journal-subtitle">
        Record why you entered this trade.
      </p>

     <input
  type="text"
  value={`📈 ${uid} (${mode})`}
  readOnly
/>

      <textarea
        placeholder="Why did you buy/sell this stock?"
        value={reason}
        onChange={(e) =>
          setReason(e.target.value)
        }
      />

      <textarea
        placeholder="Technical / Fundamental Analysis"
        value={analysis}
        onChange={(e) =>
          setAnalysis(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Target Price"
        value={targetPrice}
        onChange={(e) =>
          setTargetPrice(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Holding Period"
        value={holdingPeriod}
        onChange={(e) =>
          setHoldingPeriod(e.target.value)
        }
      />

      <div className="confirm-buttons">
        <button
          className="btn btn-blue"
          onClick={saveJournal}
        >
          Save Journal
        </button>

        <button
          className="btn btn-grey"
          onClick={() => {
            setShowJournalForm(false);
            closeBuyWindow();
          }}
        >
          Skip
        </button>
      </div>
    </div>
  </div>
)}

    </div>
    
    </div>
  );
};

export default BuyActionWindow;
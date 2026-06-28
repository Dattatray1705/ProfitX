import React, { useState } from "react";
import axios from "axios";
import "./SellActionWindow.css";
import Button from "@mui/material/Button";

const SellActionWindow = ({ stock, closeWindow, mode,  refreshOrders, }) => {

  const [sellQty, setSellQty] = useState(1);

 const handleSell = async () => {
  try {
    await axios.post(
      "http://localhost:5000/newOrder",
      {
        name: stock.name,
        qty: Number(sellQty),
        price: stock.price,
        mode: mode,
      },
      {
        withCredentials: true,
      }
    )

    await refreshOrders();
    window.location.reload();
    alert(`${mode} Successful`);


    closeWindow();

  } catch (err) {
    console.log(err);
  }
};

return (

  <div className="sell-window-overlay">

    <div className="sell-window">

      <span
        className="close-btn"
        onClick={closeWindow}
      >
        ×
      </span>

      <h3> {stock.name}</h3>
      
      <label htmlFor="input">Quantity:</label>
      <br />&nbsp;

      <input
      id="input"
        type="number"
        placeholder="Enter Quantity"
        value={sellQty}
        onChange={(e) => setSellQty(e.target.value)}
      />

<Button
  variant="contained"
  fullWidth
  onClick={handleSell}
  sx={{
    mt: 2,
    py: 1.5,
    borderRadius: "14px",
    fontSize: "17px",
    fontWeight: "700",
    textTransform: "none",

    background:
      mode === "BUY"
        ? "linear-gradient(135deg,#00c853,#009624)"
        : "linear-gradient(135deg,#ff5252,#d50000)",

    boxShadow:
      mode === "BUY"
        ? "0 8px 20px rgba(0,200,83,0.35)"
        : "0 8px 20px rgba(255,82,82,0.35)",

    transition: "0.3s",

    "&:hover": {

      transform: "translateY(-2px)",

      background:
        mode === "BUY"
          ? "linear-gradient(135deg,#00e676,#00c853)"
          : "linear-gradient(135deg,#ff1744,#c4001d)",
    },
  }}
>
  {mode} Order
</Button>

    </div>

  </div>

);
};

export default SellActionWindow;
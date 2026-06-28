import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, mode ,price) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [actionMode, setActionMode] = useState(""); // ✅ NEW
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);
  const handleOpenBuyWindow = (uid, mode, price) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setActionMode(mode); // ✅ IMPORTANT
    setSelectedStockPrice(price);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setActionMode("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} mode={actionMode} stockPrice={selectedStockPrice} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
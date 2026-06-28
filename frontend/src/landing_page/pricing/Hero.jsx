import React from "react";

function Hero() {
  return (
    <div className="container">

      {/* Heading */}
      <div className="row py-5 mt-4">
        <div className="col-12 text-center">
          <h1 className="mb-3">Technology</h1>

          <p className="text-muted">
            Free equity investment and flat ₹20 intraday and F&O trades
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="row border-bottom mb-5 pb-5 text-center g-4">

        {/* Card 1 */}
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src="/media/imgages/pricingEquity.svg"
            alt="Equity"
            className="img-fluid mb-3"
            style={{ maxHeight: "120px" }}
          />

          <h3>Free equity delivery</h3>

          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely
            free — ₹0 brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src="/media/imgages/intradayTrades.svg"
            alt="Intraday"
            className="img-fluid mb-3"
            style={{ maxHeight: "120px" }}
          />

          <h3>Intraday and F&O trades</h3>

          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order
            on intraday trades across equity, currency and commodity.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-6 col-lg-4 mx-md-auto">
          <img
            src="/media/imgages/pricingMF.svg"
            alt="Mutual Fund"
            className="img-fluid mb-3"
            style={{ maxHeight: "120px" }}
          />

          <h3>Free direct MF</h3>

          <p className="text-muted">
            All direct mutual fund investments are absolutely free —
            ₹0 commission and DP charges.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Hero;
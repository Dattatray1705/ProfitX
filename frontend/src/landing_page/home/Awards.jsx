import React from "react";

function Awards() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Side Image */}
        <div className="col-12 col-lg-6 text-center mb-5 mb-lg-0">
          <img
            src="/media/imgages/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* Right Side Content */}
        <div className="col-12 col-lg-6 px-3 px-md-5">
          <h1 className="mb-4">
            Largest stock broker in India
          </h1>

          <p className="mb-4 text-muted">
            2+ million ProfitX clients contribute to over 15% of all
            retail order volumes in India daily by trading and
            investing in:
          </p>

          {/* Lists */}
          <div className="row">
            <div className="col-12 col-md-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-12 col-md-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds & Govt. Securities</li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <div className="text-center text-lg-start mt-4">
            <img
              src="/media/imgages/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: "80%" }}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Awards;
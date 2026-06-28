import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-12 col-lg-4 mb-5 mb-lg-0">
          <h1 className="mb-3">Unbeatable pricing</h1>

          <p className="text-muted">
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>

        
        </div>

        {/* Spacer for Desktop */}
        <div className="d-none d-lg-block col-lg-1"></div>

        {/* Right Section */}
        <div className="col-12 col-lg-7">
          <div className="row text-center g-3">

            <div className="col-12 col-md-6">
              <div className="border rounded p-4 h-100">
                <h1 className="mb-3">₹ 0</h1>
                <p className="mb-0">
                  Free equity delivery and direct mutual funds
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="border rounded p-4 h-100">
                <h1 className="mb-3">₹ 20</h1>
                <p className="mb-0">
                  Intraday and F&O
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
      <hr />
    </div>
  );
}

export default Pricing;
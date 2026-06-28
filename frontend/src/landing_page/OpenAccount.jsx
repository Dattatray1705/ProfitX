import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container py-5 mb-5">
      <div className="row text-center justify-content-center">

        <div className="col-12 col-lg-8">

          <h1 className="mt-4 mb-3">
            Open a ProfitX Account
          </h1>

          <p className="text-muted mb-4">
            Modern platform and apps, ₹0 investments and flat ₹20
            intraday and F&O trades.
          </p>

          <Link
            to="/signup"
            className="btn btn-primary btn-lg px-4"
          >
            Sign Up Now
          </Link>

        </div>

      </div>
    </div>
  );
}

export default OpenAccount;
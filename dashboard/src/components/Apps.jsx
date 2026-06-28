import React from "react";
import "./App.css";
import { FaRocket } from "react-icons/fa";

const Apps = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow-lg border-0 text-center p-4 p-md-5 coming-card">
        
        <div className="rocket-icon text-primary">
          <FaRocket />
        </div>

        <h1 className="fw-bold mb-3 title-animation">
          Coming Soon 🚀
        </h1>

        <p className="text-muted fs-5 mb-4">
          We are building something amazing for traders.
          New features will be available soon.
        </p>

        <div className="badge bg-primary fs-6 px-4 py-3 stay-btn">
          Stay Tuned!
        </div>

      </div>
    </div>
  );
};

export default Apps;
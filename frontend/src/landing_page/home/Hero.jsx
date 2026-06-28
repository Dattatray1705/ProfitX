import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container py-4 py-md-5 mb-5">
      <div className="row text-center justify-content-center">
        
        {/* Hero Image */}
        <div className="col-12">
          <img
            src="/media/imgages/homeHero.png"
            alt="Hero"
            className="img-fluid mb-4 mb-md-5"
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* Hero Content */}
        <div className="col-12">
          <h1
            className="fw-normal mb-3"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            Invest in everything
          </h1>

          <p
            className="text-muted mb-4"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
            }}
          >
            Online platform to invest in stocks and secure your life.
            
          </p>

          <Link
            to="/signup"
            className="btn btn-primary btn-lg px-4"
            style={{
              minWidth: "180px",
              textDecoration: "none",
            }}
          >
            Sign Up
          </Link>
        </div>

      </div>
      <hr />
    </div>
  );
}

export default Hero;
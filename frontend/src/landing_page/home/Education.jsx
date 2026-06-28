import React from "react";

function Education() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        
        {/* Image Section */}
        <div className="col-12 col-lg-6 text-center mb-5 mb-lg-0">
          <img
            src="/media/imgages/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-lg-6 px-3 px-md-5">
          <h1 className="mb-4">
            Free and open market education
          </h1>

          <p className="text-muted">
            Varsity, the largest online stock market education book in
            the world covering everything from the basics to advanced
            trading.
          </p>

        

          <p className="text-muted mt-5">
            TradingQ&A, the most active trading and investment
            community in India for all your market related queries.
          </p>

      
        </div>

      </div>
      <hr />
    </div>
  );
}

export default Education;
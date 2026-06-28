import React from "react";

function Stats() {
  return (
    <div className="container my-5">

      {/* Image Section */}
      <div className="row">
        <div className="col-12 text-center">
          <img
            src="/media/imgages/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid"
            style={{ maxWidth: "60%" }}
          />

          <div className="mt-4">
           

            
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className="row mt-5">
        <div className="col-12">
          <h1 className="fs-2 mb-4">
            Trust with confidence
          </h1>
        </div>
      </div>

      {/* Description in 2 Columns */}
      <div className="row">

        {/* Left Column */}
        <div className="col-12 col-lg-6 mb-5">
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That’s why 1.3+ crore customers trust ProfitX with
            ₹3.5+ lakh crores worth of equity investments.
          </p>

          <h2 className="fs-4 mt-4">
            No spam or gimmicks
          </h2>
          <p className="text-muted">
            No gimmicks, spam, gamification, or annoying push
            notifications. High quality apps that you use at your
            pace, the way you like.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-12 col-lg-6">
          <h2 className="fs-4">
            The ProfitX universe
          </h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments
            in 30+ fintech startups offer you tailored services
            specific to your needs.
          </p>

          <h2 className="fs-4 mt-4">
            Do better with money
          </h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don’t
            just facilitate transactions, but actively help you do
            better with your money.
          </p>
          
        </div>

      </div>
      <hr />
    </div>
  );
}

export default Stats;
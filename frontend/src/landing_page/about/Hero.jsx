import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Heading Section */}
      <div className="row py-4 py-md-5 my-4 my-md-5">
        <div className="col-12">
          <h1
            className="text-center fw-normal"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              lineHeight: "1.4",
            }}
          >
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div
        className="row border-top text-muted py-4 py-md-5"
        style={{ lineHeight: "1.8" }}
      >
        {/* Left Column */}
        <div className="col-12 col-md-6 px-3 px-md-5 mb-4 mb-md-0">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 px-3 px-md-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            <a href="#" className="text-decoration-none">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
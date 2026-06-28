import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="border-top bg-light mt-5">
      <div className="container py-5">

        <div className="row mt-5 text-center text-lg-start">

          {/* Logo Section */}
         <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <h3 className="text-primary fw-bold">PROFITX  <img
  src="/media/imgages/theprofitx_logo.jpg"
  alt="ProfitX Logo"
  className="ms-2 rounded-circle"
  style={{
    width: "35px",
    height: "35px",
    objectFit: "cover"
  }}
/></h3>

            <p className="text-muted mt-3">
              © 2026 ProfitX Broking Ltd.
              <br />
              All rights reserved.
            </p>

              <div className="d-flex gap-3 fs-4 justify-content-center justify-content-lg-start">
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>

          {/* Account */}
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
  <h4 className="mb-4">Account</h4>

  <a href="/signup" className="d-block text-decoration-none text-dark mb-2">
    Open account
  </a>

  <a href="" className="d-block text-decoration-none text-dark mb-2">
    Fund transfer
  </a>

  <a href="/signup" className="d-block text-decoration-none text-dark mb-2">
    Demat account
  </a>

  <a href="/signup" className="d-block text-decoration-none text-dark mb-2">
    Trading account
  </a>

  <a href="" className="d-block text-decoration-none text-dark mb-2">
    MTF
  </a>
</div>

          {/* Support */}
          <div className="col-12 col-sm-6 col-lg-3 mb-4">
  <h4 className="mb-4">Support</h4>

  <a href="/support" className="d-block text-decoration-none text-dark mb-2">
    Contact us
  </a>

  <a href="/support" className="d-block text-decoration-none text-dark mb-2">
    Support portal
  </a>

  <a href="" className="d-block text-decoration-none text-dark mb-2">
    Downloads
  </a>

  <a href="" className="d-block text-decoration-none text-dark mb-2">
    FAQs
  </a>

  <a href="/support" className="d-block text-decoration-none text-dark mb-2">
    Help center
  </a>
</div>

          {/* Company */}
          <div className="col-12 col-sm-6 col-lg-3 mb-4">
  <h4 className="d-block text-decoration-none text-dark mb-2">Company</h4>

  <a href="/about" className="d-block text-decoration-none text-dark mb-2">
    About
  </a>

 

  

  <a href="/pricing" className="d-block text-decoration-none text-dark mb-2">
    Pricing
  </a>

  
</div>

        </div>

        {/* Bottom Text */}
        {/* Bottom Information */}
<div className="border-top mt-5 pt-4 text-muted small" style={{fontSize:"14px"}}>

  <p>
    ProfitX Broking Ltd.: Member of NSE, BSE & MCX | SEBI Registration no.:
    INZ000000000 | Depository services through ProfitX Broking Ltd.
    Registered Office: Mumbai, Maharashtra, India.
  </p>

  <p>
    For any complaints pertaining to securities broking please write to
    support@profitx.com. Please ensure you carefully read the Risk Disclosure
    Document as prescribed by SEBI.
  </p>

  <p>
    Procedure to file a complaint on SEBI SCORES:
    Register on SCORES portal. Mandatory details for filing complaints on
    SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
  </p>

  <p>
    Investments in securities market are subject to market risks; read all the
    related documents carefully before investing.
  </p>

  <p>
    Attention investors:
  </p>

  <p>
    1. Stock brokers can accept securities as margins from clients only by way
    of pledge in the depository system.
  </p>

  <p>
    2. Update your e-mail and phone number with your stock broker /
    depository participant and receive OTP directly from depository on your
    e-mail and/or mobile number.
  </p>

  <p>
    3. Check your securities / MF / bonds in the consolidated account
    statement issued by NSDL/CDSL every month.
  </p>

  <p>
    Prevent unauthorized transactions in your account. Update your mobile
    numbers/email IDs with your stock brokers. Receive information of your
    transactions directly from Exchange on your mobile/email at the end of
    the day.
  </p>

  <p>
    KYC is one-time exercise while dealing in securities markets. Once KYC is
    done through a SEBI registered intermediary, you need not undergo the
    same process again when you approach another intermediary.
  </p>

  <p>
    As a business we do not give stock tips, and have not authorized anyone
    to trade on behalf of others. If you find anyone claiming to be part of
    ProfitX and offering such services, please report immediately.
  </p>

  <div className="d-flex flex-wrap gap-3 gap-md-4 mt-4 fw-semibold justify-content-center justify-content-lg-start">
    <span>NSE</span>
    <span>BSE</span>
    <span>MCX</span>
    <span>Terms & Conditions</span>
    <span>Privacy Policy</span>
    <span>Disclosure</span>
    <span>Investor Charter</span>
  </div>

</div>

      </div>
    </footer>
  );
}

export default Footer;
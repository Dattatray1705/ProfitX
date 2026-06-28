import React from 'react'

function CreateTicket() {
  return (
    <div className="container my-5">

  <div className="row text-center mb-5">
    <div className="col-12">
      <h2>Contact Support</h2>
      <p className="text-muted">
        Need help? Reach out to our support team.
      </p>
    </div>
  </div>

  <div className="row g-4">

    <div className="col-12 col-md-6 col-lg-3">
      <div className="border rounded p-4 h-100 text-center">
        <i className="fa-solid fa-phone fs-2 text-primary mb-3"></i>
        <h5>Customer Care</h5>
        <p className="text-muted mb-0">
          +91 8530694748
        </p>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
      <div className="border rounded p-4 h-100 text-center">
        <i className="fa-solid fa-envelope fs-2 text-primary mb-3"></i>
        <h5>Support Email</h5>
        <p className="text-muted mb-0">
          support@profitx.com
        </p>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
      <div className="border rounded p-4 h-100 text-center">
        <i className="fa-solid fa-headset fs-2 text-primary mb-3"></i>
        <h5>Toll Free</h5>
        <p className="text-muted mb-0">
          1800-123-4567
        </p>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
      <div className="border rounded p-4 h-100 text-center">
        <i className="fa-solid fa-clock fs-2 text-primary mb-3"></i>
        <h5>Working Hours</h5>
        <p className="text-muted mb-0">
          Mon - Fri<br />
          9:00 AM - 6:00 PM
        </p>
      </div>
    </div>
    
   <div className="col-12">
      <div className="border rounded p-4">

        <h4 className="mb-3">
          <i className="fa-solid fa-location-dot me-2 text-danger"></i>
          Corporate Office
        </h4>

        <p className="text-muted mb-0">
          ProfitX Technologies Pvt. Ltd.
          5th Floor, Business Hub Tower,
          Near Mahaveer garden ,Bapat mala ,Sangli, <br />
          Maharashtra 416416,
          India.
        </p>

      </div>
    </div>
     <div className="col-12">
      <div className="border rounded p-4 text-center">

        <h4 className="mb-3">
          <i className="fa-solid fa-code me-2"></i>
          Developed & Maintained By
        </h4>

        <h5 className="text-primary">
          Sarita InfoTech Pvt. Ltd.
        </h5>

      

        <p className="mb-1">
          <i className="fa-solid fa-user me-2"></i>
          Founder & CEO: Dattatray Savalkar
        </p>

        <p className="mb-1">
          <i className="fa-solid fa-envelope me-2"></i>
          sarita2409@profitx.com
        </p>
        <p>
          <i className="fa-solid fa-phone me-2"></i>
          Contact on : 8530694748
        </p>
        <p className="mb-0">
          <i className="fa-brands fa-linkedin me-2"></i>
          LinkedIn / GitHub
        </p>

      </div>
    </div>
  </div>

</div>
  )
}

export default CreateTicket;
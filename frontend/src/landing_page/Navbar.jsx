import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (

    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ background: "white" }}
    >

      <div className="container">

        <Link className="navbar-brand" to="/">
          <img
            src="media/imgages/theprofitx_logo.jpg"
            alt=""
            style={{ width: "70px", borderRadius: "50%" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">

            <li className="nav-item">
              <Link className="nav-link active" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>

           

            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React, { useState, useEffect } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";



function SignUp() {
  const [isLogin, setIsLogin] = useState(false);

 const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  mobile: "",
  pan: "",
  bank: "",
  address: "",
});
useEffect(() => {
  setFormData({
  name: "",
  email: "",
  password: "",
  mobile: "",
  pan: "",
  bank: "",
  address: "",
});

  setIsLogin(false);
}, []);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (isLogin) {
        // SIGN IN
        response = await fetch(
          "http://localhost:5000/signin",
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email,
              password: formData.password,
            }),
          }
        );
      } else {
        // SIGN UP
        response = await fetch(
          "http://localhost:5000/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
      }

      const data = await response.json();

 if (response.ok) {
  alert(data.message);

  console.log("Login success");
  console.log("isLogin =", isLogin);

  if (isLogin) {
    console.log("Redirecting...");
    window.location.href = "http://localhost:5174";
  }
 else {
          setIsLogin(true);

          setFormData({
            name: "",
            email: "",
            password: "",
          });
        }
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

 return (
  <div className="auth-container">
    <div className="left-panel">
      <div className="brand-content">
        <h1 className="logo"><img src="media\imgages\theprofitx_logo.jpg" alt="" /></h1>

        <h2>
          Trade Smart.
          <br />
          Invest Better.
          <br />
          <span>Grow Faster.</span>
        </h2>

        <p>
          Join thousands of traders who trust
          ProfitX for a seamless and secure
          trading experience.
        </p>

        <div className="feature-card">
          🔒 Secure Authentication
        </div>

        <div className="feature-card">
          📈 Real-time Market Data
        </div>

        <div className="feature-card">
          ⚡ Fast Trading Experience
        </div>
      </div>
    </div>

    <div className="right-panel">
      <div className="auth-card">
        <div className="tabs">
          <button
            type="button"
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>

          <button
            type="button"
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
        </div>

        <h2>
          {isLogin
            ? "Welcome Back"
            : "Create Account"}
        </h2>

        <p className="subtitle">
          {isLogin
            ? "Sign in to continue trading"
            : "Start your investment journey"}
        </p>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="pan"
                placeholder="PAN Number"
                value={formData.pan}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="bank"
                placeholder="Bank Name"
                value={formData.bank}
                onChange={handleChange}
                required
              />

              <textarea
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
         {isLogin && (
  <Link
    to="/forgot-password"
    className="forgot-password"
  >
    Forgot Password?
  </Link>
)}
          <button
            type="submit"
            className="submit-btn"
          >
            {isLogin
              ? "Sign In"
              : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  </div>
);
}

export default SignUp;
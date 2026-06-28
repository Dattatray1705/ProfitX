import React, { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

    const data = await res.json();

if (res.ok) {
  alert(data.message);

  localStorage.setItem(
    "resetEmail",
    email
  );

  window.location.href =
    "/reset-password";
} else {
  alert(data.message);
}
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
  <div className="forgot-container">
  <div className="forgot-card">

    <div className="icon-circle">
      🔒
    </div>

    <h2>Forgot Password?</h2>

    <p className="subtitle">
      Enter your registered email address and
      we'll send you a password reset link.
    </p>

    <form onSubmit={handleSubmit}>
      <label>Email Address</label>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        required
      />

      <button type="submit">
        Send Reset Link
      </button>
    </form>

    <a href="/signup" className="back-link">
      ← Back to Login
    </a>

  </div>
</div>
  );
}

export default ForgotPassword;
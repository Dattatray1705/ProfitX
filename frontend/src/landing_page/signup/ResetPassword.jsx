import React, { useState ,useEffect} from "react";
import "./ForgotPassword.css";
function ResetPassword() {
  const [otp, setOtp] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");


  useEffect(() => {
    setOtp("");
    setPassword("");
    setConfirmPassword("");
  }, []);
  const email =
    localStorage.getItem("resetEmail");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(
        "http://localhost:5000/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
            password,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert(data.message);

        localStorage.removeItem(
          "resetEmail"
        );

        window.location.href =
          "/signup";
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
          🔑
        </div>

        <h2>Reset Password</h2>

        <p className="subtitle">
          Enter OTP and create a new password.
        </p>
<p className="email-info">
  OTP sent to <strong>{email}</strong>
</p>
        <form onSubmit={handleSubmit} autoComplete="off">

          <label>OTP</label>
          <input
  type="text"
  name="otp"
  autoComplete="one-time-code"
  placeholder="Enter OTP"
  value={otp}
  onChange={(e) => setOtp(e.target.value)}
  required
/>

          <label>New Password</label>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            required
          />

          <button type="submit">
            Reset Password
          </button>

        </form>

        <a
          href="/signup"
          className="back-link"
        >
          ← Back to Login
        </a>

      </div>
    </div>
  );
}

export default ResetPassword;
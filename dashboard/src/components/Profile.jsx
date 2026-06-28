import React, { useEffect, useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    bank: "",
    address: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);

        setFormData({
          email: data.user.email || "",
          mobile: data.user.mobile || "",
          bank: data.user.bank || "",
          address: data.user.address || "",
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/update-profile",
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
        setIsEditing(false);
        alert("Profile Updated Successfully");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

 const handleDeleteAccount = async () => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete your account?"
  );

  if (!confirmDelete) return;

  try {
    const res = await fetch(
      "http://localhost:5000/delete-account",
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    const data = await res.json();

    if (res.ok) {
      alert(data.message);

      window.location.href =
        "http://localhost:5173";
    }
  } catch (err) {
    console.log(err);
  }
};

  if (!user) {
    return <h2>Loading...</h2>;
  }

  const initials = user.name
    .split(" ")
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-header">
          <div className="avatar">
            {initials}
          </div>

          <div className="profile-info">
            <h2 className="profile-info">{user.name}</h2>
          {isEditing ? (
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
  />
) : (
  <p className="profile-email">{user.email}</p>
)}

            <span className="status-badge">
              🟢 Active Investor
            </span>
          </div>
        </div>

        <div className="profile-grid">

          <div className="info-card">
            <span>Mobile Number</span>

            {isEditing ? (
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            ) : (
              <h4>{user.mobile}</h4>
            )}
          </div>

          <div className="info-card">
            <span>PAN Number</span>
            <h4>{user.pan}</h4>
          </div>

          <div className="info-card">
            <span>Bank Account</span>

            {isEditing ? (
              <input
                type="text"
                name="bank"
                value={formData.bank}
                onChange={handleChange}
              />
            ) : (
              <h4>{user.bank}</h4>
            )}
          </div>

          <div className="info-card">
            <span>Address</span>

            {isEditing ? (
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            ) : (
              <h4>{user.address}</h4>
            )}
          </div>

          <div className="info-card">
            <span>Demat ID</span>
            <h4>{user.dematId}</h4>
          </div>

          <div className="info-card">
            <span>Trading Plan</span>
            <h4>{user.plan}</h4>
          </div>

        </div>

        <div className="profile-actions">

          {isEditing ? (
            <button
              className="edit-btn"
              onClick={handleSave}
            >
              Save Changes
            </button>
          ) : (
            <button
              className="edit-btn"
              onClick={() =>
                setIsEditing(true)
              }
            >
              Edit Profile
            </button>
          )}

        <button
  className="delete-btn"
  onClick={handleDeleteAccount}
>
  Delete Account
</button>

        </div>

      </div>
    </div>
  );
};

export default Profile;
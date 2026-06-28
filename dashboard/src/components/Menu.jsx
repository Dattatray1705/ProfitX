import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import "./MenuResponsive.css";
import "../index.css";
import { Link } from "react-router-dom";

const Menu = ({showMenu , setShowMenu}) => {
  const [selectedMenu, setSelectedMenu] =
    useState(0);

  const [user, setUser] = useState(null);

  const [
    isProfileDropdownOpen,
    setIsProfileDropdownOpen,
  ] = useState(false);

  const dropdownRef = useRef();

  // Fetch Logged In User
  useEffect(() => {
    fetch("http://localhost:5000/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(
      !isProfileDropdownOpen
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target
        )
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(
        "http://localhost:5000/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

      window.location.href =
        "http://localhost:5173";
    } catch (err) {
      console.log(err);
    }
  };

  // Avatar Initials (DS)
  const initials = user?.name
    ? user.name
        .split(" ")
        .slice(0, 3)
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    : "User";

  // First Name + Last Name
  const shortName = user?.name
    ? user.name
        .split(" ")
        .slice(0 , 3)
        .join(" ")
    : "Loading...";
console.log("showMenu =", showMenu);
  return (
    <div
  className={`menu-container ${
    showMenu ? "active" : ""
  }`}
>
  <button
  className="close-menu"
  onClick={() => setShowMenu(false)}
>
  ✖
</button>
      <img
        src="/media/images/theprofitx_logo.jpg"
        alt="logo"
        style={{
          width: "50px",
          borderRadius: "100%",
        }}
      />

      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <p
                className={
                  selectedMenu === 0
                    ? "menu selected"
                    : "menu"
                }
                onClick={() =>
                  handleMenuClick(0)
                }
              >
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/orders"
              style={{
                textDecoration: "none",
              }}
            >
              <p
                className={
                  selectedMenu === 1
                    ? "menu selected"
                    : "menu"
                }
                onClick={() =>
                  handleMenuClick(1)
                }
              >
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/holdings"
              style={{
                textDecoration: "none",
              }}
            >
              <p
                className={
                  selectedMenu === 2
                    ? "menu selected"
                    : "menu"
                }
                onClick={() =>
                  handleMenuClick(2)
                }
              >
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/positions"
              style={{
                textDecoration: "none",
              }}
            >
              <p
                className={
                  selectedMenu === 3
                    ? "menu selected"
                    : "menu"
                }
                onClick={() =>
                  handleMenuClick(3)
                }
              >
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/funds"
              style={{
                textDecoration: "none",
              }}
            >
              <p
                className={
                  selectedMenu === 4
                    ? "menu selected"
                    : "menu"
                }
                onClick={() =>
                  handleMenuClick(4)
                }
              >
                Funds
              </p>
            </Link>
          </li>
          <li>
  <Link
    to="/journal"
    style={{
      textDecoration: "none",
    }}
  >
    <p
      className={
        selectedMenu === 6
          ? "menu selected"
          : "menu"
      }
      onClick={() =>
        handleMenuClick(6)
      }
    >
      Journal
    </p>
  </Link>
</li>
          <li>
            <Link
              to="/apps"
              style={{
                textDecoration: "none",
              }}
            >
              <p
                className={
                  selectedMenu === 5
                    ? "menu selected"
                    : "menu"
                }
                onClick={() =>
                  handleMenuClick(5)
                }
              >
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        <div
          className="profile-wrapper"
          ref={dropdownRef}
        >
          <div
            className="profile"
            onClick={handleProfileClick}
          >
            <div className="avatar">
              {initials}
            </div>

            <p className="username">
              {shortName}
            </p>
          </div>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <div className="profile-top">
                <div className="profile-avatar">
                  {initials}
                </div>

                <div>
                  <h3>{shortName}</h3>
                  <span>
                    {user?.email}
                  </span>
                </div>
              </div>

              <div className="dropdown-divider"></div>

              <Link
                to="/profile"
                className="dropdown-item"
              >
                <i className="fa-regular fa-user"></i>
                Profile
              </Link>

              <Link
                to="/settings"
                className="dropdown-item"
              >
                <i className="fa-solid fa-gear"></i>
                Settings
              </Link>

              <div
                className="dropdown-item logout-item"
                onClick={handleLogout}
              >
                <i className="fa-solid fa-right-from-bracket"></i>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
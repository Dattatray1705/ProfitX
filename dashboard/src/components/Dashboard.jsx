import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./Settings.css";
import "./Dashboard.css";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import Profile from "./Profile";
import TradeJournal from "./TradeJournal";
import { Settings } from "./settings";
import Menu from "./Menu";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
const [showAchievementModal, setShowAchievementModal] =
  useState(false);

const [achievementTitle, setAchievementTitle] =
  useState("");
const [showWatchlist, setShowWatchlist] = useState(false);
const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/me", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          window.location.href = "http://localhost:5173";
          return;
        }

        setLoading(false);
      })
      .catch(() => {
        window.location.href = "http://localhost:5173";
      });
  }, []);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme");

    document.body.classList.toggle(
      "dark-theme",
      savedTheme === "dark"
    );
  }, []);
  useEffect(() => {
  const checkAchievement = () => {
    const achievement =
      localStorage.getItem("newAchievement");

    if (achievement) {
      setAchievementTitle(achievement);
      setShowAchievementModal(true);

      localStorage.removeItem(
        "newAchievement"
      );
    }
  };

  checkAchievement();

  window.addEventListener(
    "storage",
    checkAchievement
  );

  return () =>
    window.removeEventListener(
      "storage",
      checkAchievement
    );
}, []);
  
  if (loading) {
    return <h2>Loading...</h2>;
  }
console.log("Dashboard showMenu =", showMenu);
  return (
    <GeneralContextProvider>
      

<div className="mobile-header">
   <button
    className="menu-toggle"
    
    onClick={() => setShowMenu(!showMenu)}
  >
    ☰
  </button>

  <h3>ProfitX</h3>
  <Menu
  showMenu={showMenu}
  setShowMenu={setShowMenu}
/>

</div>
      <div className="dashboard-container">

  <button
    className="watchlist-toggle"
    onClick={() =>
      setShowWatchlist(!showWatchlist)
    }
  >
    ☰ Watchlist
  </button>
  {showWatchlist && (
    <div
      className="watchlist-overlay"
      onClick={() => setShowWatchlist(false)}
    />
  )}
  <div
    className={`watchlist-wrapper ${
      showWatchlist ? "active" : ""
    }`}
  >
   
    <WatchList />
  </div>

  <div className="content">
    <Routes>
      <Route index element={<Summary />} />
      <Route path="orders" element={<Orders />} />
      <Route path="holdings" element={<Holdings />} />
      <Route path="positions" element={<Positions />} />
      <Route path="funds" element={<Funds />} />
      <Route path="apps" element={<Apps />} />
      <Route path="profile" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
      <Route path="journal" element={<TradeJournal />} />
    </Routes>
  </div>

</div>
         {showAchievementModal && (
      <div className="achievement-overlay">
        <div className="achievement-modal">

          <h2>🎉 Achievement Unlocked!</h2>

          <h3>{achievementTitle}</h3>

        <span
  className="achievement-close"
  onClick={() => {
    setShowAchievementModal(false);
   
  }}
>
  ✖
</span>

          <p className="awesome-text">
            ✨ Awesome !
          </p>

        </div>
      </div>
    )}

    </GeneralContextProvider>
  );
};

export default Dashboard;
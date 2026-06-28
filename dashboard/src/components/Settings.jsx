import React, { useState, useEffect } from "react";
import "./Settings.css";
import axios from "axios";

export function Settings() {
  const [achievements, setAchievements] = useState([]);
  const [tradeCount, setTradeCount] = useState(0);

  const [showAchievementModal, setShowAchievementModal] =
    useState(false);

  const [achievementTitle, setAchievementTitle] =
    useState("");

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const achievementMessages = {
    "First Trade": {
      title: "🏆 First Trade",
      message:
        "Congratulations! You completed your first trade.",
    },

    "Beginner Trader": {
      title: "🥉 Beginner Trader",
      message:
        "Amazing! You completed 5 trades.",
    },

    "Active Trader": {
      title: "🥈 Active Trader",
      message:
        "Great work! You completed 10 trades.",
    },

    "Market Expert": {
      title: "🥇 Market Expert",
      message:
        "Excellent! You completed 25 trades.",
    },

    "Trading Master": {
      title: "👑 Trading Master",
      message:
        "Legend! You completed 50 trades.",
    },
  };

  // Dark Mode
  useEffect(() => {
    document.body.classList.toggle(
      "dark-theme",
      darkMode
    );

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  // Fetch Achievements
  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/achievements",
          {
            withCredentials: true,
          }
        );

        setAchievements(
          res.data.achievements
        );

        setTradeCount(
          res.data.totalTrades
        );
      } catch (err) {
        console.log(err);
      }
    };

    fetchAchievements();
  }, []);

  // Show newly unlocked achievement popup
  useEffect(() => {
    const achievement =
      localStorage.getItem(
        "newAchievement"
      );

    if (achievement) {
      setAchievementTitle(
        achievement
      );

      setShowAchievementModal(
        true
      );

      localStorage.removeItem(
        "newAchievement"
      );
    }
  }, []);

  const handleThemeChange = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    localStorage.setItem(
      "theme",
      newTheme ? "dark" : "light"
    );

    document.body.classList.toggle(
      "dark-theme",
      newTheme
    );
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>

      <div className="settings-group">
        <h4>Appearance</h4>

        <div className="settings-row">
          <div>
            <span>🌙 Dark Mode</span>

            <p>
              Switch between light and dark
              theme
            </p>
          </div>

          <label className="toggle">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={handleThemeChange}
            />

            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>

      <div className="settings-group">
        <h4>🏆 Achievements</h4>

        <p>
          Total Trades: {tradeCount}
        </p>

        {achievements.map(
          (item, index) => (
            <div
              key={index}
              className="achievement-row"
            >
              <span>
                {item.unlocked
                  ? "✅"
                  : "🔒"}
              </span>

              <span>
                {item.title}
              </span>
            </div>
          )
        )}
      </div>

      {showAchievementModal && (
        <div className="achievement-overlay">
          <div className="achievement-modal">
            <h2>
              🎉 Achievement Unlocked!
            </h2>

            <h3>
              {
                achievementMessages[
                  achievementTitle
                ]?.title
              }
            </h3>

            <p>
              {
                achievementMessages[
                  achievementTitle
                ]?.message
              }
            </p>

            <span
              className="achievement-close"
              onClick={() =>
                setShowAchievementModal(
                  false
                )
              
              }
            >
              ✖
            </span>

            <p className="awesome-text">
              ✨ Awesome !
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
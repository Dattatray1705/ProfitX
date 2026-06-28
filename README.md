# 📈 ProfitX - Online Trading Platform

ProfitX is a full-stack MERN-based online trading platform inspired by modern stock trading applications like Zerodha. It allows users to create an account, manage funds, buy and sell stocks, track holdings, monitor positions, maintain a watchlist, and view their portfolio through a clean and responsive dashboard.

---

## 🚀 Features

* 🔐 User Authentication (JWT)
* 👤 User Registration & Login
* 💰 Add & Withdraw Funds
* 📈 Buy Stocks
* 📉 Sell Stocks
* 📊 Portfolio Management
* 📂 Holdings Management
* 📋 Orders History
* 📌 Watchlist
* 📖 Trade Journal
* 🌙 Dark & Light Theme
* 📱 Responsive Dashboard
* 🔒 Protected API Routes

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Axios
* React Router
* CSS

### Dashboard

* React.js
* Vite
* Context API
* Chart.js

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt.js

---

## 📂 Project Structure

```
ProfitX/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   └── schemas/
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── dashboard/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/Dattatray1705/ProfitX.git
```

### 2. Navigate to Project

```bash
cd ProfitX
```

### 3. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

#### Dashboard

```bash
cd ../dashboard
npm install
```

---

## ▶️ Run the Project

### Backend

```bash
cd backend
npm start
```

Runs on:

```
http://localhost:5000
```

---

### Frontend

```bash
cd frontend
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

### Dashboard

```bash
cd dashboard
npm run dev
```

Runs on:

```
http://localhost:5174
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **backend** folder.

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 📸 Screenshots

Add screenshots here after uploading them to the repository.

* Home Page
* Login
* Dashboard
* Portfolio
* Holdings
* Watchlist
* Buy Stock
* Sell Stock
* Funds

---

## 📌 Future Improvements

* Live Stock Market API
* Real-time Price Updates
* Stock Charts
* Email Notifications
* Portfolio Analytics
* Admin Panel
* Payment Gateway
* Two-Factor Authentication (2FA)

---

## 👨‍💻 Author

**Dattatray Savalkar**

GitHub: https://github.com/Dattatray1705

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

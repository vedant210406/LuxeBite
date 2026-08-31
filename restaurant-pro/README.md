Viewed package.json:1-26
Listed directory restaurant-pro

Here are the commands to run both the **Backend** and **Frontend**:

### 1. Run Backend Server (Express + MongoDB)
Open a terminal in `restaurant-pro/backend` and run:

```bash
cd restaurant-pro/backend
npm run seed     # Optional: Seeds initial sample data into MongoDB
npm run dev      # Starts Express server on http://localhost:5000
```

---

### 2. Run Frontend Application (React + Vite)
Open a **second** terminal in `restaurant-pro/frontend` and run:

```bash
cd restaurant-pro/frontend
npm run dev      # Starts Vite dev server on http://localhost:5173
```

## Mongo Compass:

mongodb://127.0.0.1:27017



# 🍽️ LuxeBite – Restaurant Pro

A modern Full Stack Restaurant Website inspired by premium restaurant designs, built with **React.js**, **Node.js**, **Express.js**, and **MongoDB**.

## ✨ Features

- 🍔 Beautiful Restaurant Landing Page
- 📖 Interactive Food Menu
- 🛒 Online Food Ordering
- 🔐 User Authentication (JWT)
- 📧 Email Notifications (Nodemailer)
- 👤 User Profile
- 🛠️ Admin Dashboard
- 🍽️ Table Reservation
- ⭐ Responsive Design
- ⚡ Fast Performance using Vite

---

# 🛠 Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React.js + Vite |
| Styling | Tailwind CSS |
| Backend | Node.js + Express.js |
| Database | MongoDB |
| Authentication | JWT |
| Email | Nodemailer |
| API | REST API |

---

# 📂 Project Structure

```text
restaurant-pro/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   │   ├── jwt.js
│   │   ├── nodemailer.js
│   │   └── seedData.js
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── seed.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── README.md
# TravelSplit ✈️💳

TravelSplit is a full-stack MERN application that simplifies group travel planning and expense management. Users can create trips, invite participants, track expenses, manage budgets, and settle balances through an intuitive dashboard.

## 🔗 Live Demo

- Frontend: https://travel-split-xi.vercel.app

## 🚀 Features

### Trip Management

* Create and manage trips
* Add trip descriptions, destinations, budgets, and travel dates
* Track trip status (Active / Completed)

### Expense Tracking

* Add and manage expenses
* Support for:

  * Equal Split
  * Unequal Split
  * Percentage Split
* Expense history and activity tracking

### Participant Management

* Invite registered users to trips
* Manage trip members
* View participant details and roles

### Automated Settlements

* Calculate participant balances automatically
* Generate optimized settlement recommendations
* Mark settlements as completed
* Prevent trip completion until balances are cleared

### Budget Management

* Track total trip budget
* Monitor spending against budget
* View financial summaries

### Destination Explorer

* Browse destinations across India
* Search and filter by region
* View travel insights and popular attractions

### Authentication & Security

* JWT Authentication
* Protected Routes
* Secure API access

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Tailwind CSS
* Axios
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcrypt

### Deployment

* Vercel (Frontend)
* Vercel (Backend)
* MongoDB Atlas

---

## 📂 Project Structure

```bash
TravelSplit/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── modules/
│   ├── index.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/vkp0007/travel-split.git
cd travel-split
```

### Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Start backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Start frontend:

```bash
npm run dev
```

---

## 📸 Key Modules

* User Authentication
* Trip Management
* Expense Tracking
* Budget Dashboard
* Participant Management
* Settlement Engine
* Destination Explorer

---

## 🎯 Learning Outcomes

* Full-Stack MERN Development
* REST API Design
* JWT Authentication
* MongoDB Data Modeling
* Expense Settlement Algorithms
* Production Deployment with Vercel
* Responsive UI Development with Tailwind CSS

---

## 👨‍💻 Author

**Vinay Kumar Patel**

GitHub: https://github.com/vkp0007

---

## ⭐ Future Enhancements

* Multi-currency conversion
* Expense analytics dashboard
* AI-powered trip recommendations
* Export reports (PDF/Excel)
* Real-time notifications
* Group chat integration

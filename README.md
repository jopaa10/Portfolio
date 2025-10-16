# 🌐 Personal Portfolio

A modern, responsive **personal portfolio website** built with **React** on the frontend and **Node.js + Express** on the backend for handling contact form submissions securely.

This project highlights my work, skills, and experience as a developer, with smooth animations and an elegant user experience.

---

## 🚀 Features

- 🎨 **Modern UI/UX** – Clean, minimal, and fully responsive design.
- 🧭 **Smooth Navigation** – Animated transitions and scroll effects.
- 💼 **Project Showcase** – Detailed project cards with live demos and GitHub links.
- 💬 **Contact Form Integration** – Backend API with Node & Express to send messages via email.
- ♿ **Accessibility** — Designed with inclusive color contrast, keyboard navigation, and ARIA labels for better usability.
- ⚡ **Performance Optimized** – Fast loading with lazy image loading and optimized assets.

---

## 🛠️ Tech Stack

### **Frontend**

- React
- Tailwind CSS (or your CSS framework)
- Framer Motion / AOS (for animations)

### **Backend**

- Node.js
- Express.js
- Brevo

### **Deployment**

- Frontend: Vercel
- Backend: Render

---

## 📦 Installation & Setup

Clone the repository and install dependencies for both frontend and backend:

```bash
# Clone repository
git clone https://github.com/jopaa10/Portfolio.git
cd portfolio
```

## 🖥️ Frontend Setup

```bash
npm install
npm start
```

Your React app will run on http://localhost:3000.

## ⚙️ Backend Setup

```bash
cd server
npm install
npm run dev
```

Your Express server will run on http://localhost:5000.

Create a .env file in the server directory with your environment variables:

```bash
PORT=5000
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```

🧱 Folder Structure
portfolio/
├── client/ # React frontend
│ ├── public/
│ └── src/
│ ├── assets/ # Images, icons, etc.
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components
│ ├── data/ # Project and skill data
│ ├── App.js
│ └── index.js
│ └── package.json
│
├── server/ # Express backend
│ ├── controllers/ # Request handlers
│ ├── routes/ # API routes (e.g. /api/contact)
│ ├── utils/ # Helpers (email, validation)
│ ├── server.js
│ └── package.json
│
└── README.md

## 🧰 Scripts

Frontend

```bash
# in /client

npm start # Start development server
npm run build # Create production build
```

Backend

```bash
# in /server

npm run dev # Run server in development mode (e.g. nodemon)
npm start # Start server in production mode
```

## 🌍 Deployment

You can deploy the project using:

Frontend: Netlify, Vercel, or GitHub Pages

Backend: Render, Railway, or any Node-compatible hosting service

Deployment notes

If frontend and backend are deployed separately, update your frontend API base URL to the deployed backend URL (for example, set REACT_APP_API_URL=https://api.yourdomain.com in the frontend environment).

For monorepo deployments, you can use serverless functions (Vercel) or a separate server host and proxy API calls as needed.

## 🧑‍💻 Author

Josipa Znaor
Full Stack Developer — passionate about building interactive and performant web applications

- Website: https://portfolio-josipa-znaor.vercel.app/

- LinkedIn: https://www.linkedin.com/in/josipa-znaor-105692222/

- GitHub: https://github.com/jopaa10

## 📜 License

This project is licensed under the MIT License — feel free to use and modify it.

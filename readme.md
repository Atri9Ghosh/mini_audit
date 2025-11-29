Mini Audit Trail Generator

Track every change with word-level version history.

A full-stack project built with React (Vite) and Node.js + Express, featuring a diff engine that shows every added and removed word between versions of text.

📝 Overview

The Mini Audit Trail Generator is a web application that automatically creates a version history every time a user edits and saves text. Each version includes:

Words added

Words removed

Length difference

Timestamp

Unique version ID

This system is useful for:

Document comparisons

Editors & writers

Change tracking

Demo/testing of diff algorithms

Intern evaluation tasks

✨ Features
🔹 Frontend (React)

Beautiful dark UI

Real-time text editor

Save Version button

Dynamic version list

Highlights added & removed words

Character count

Smart state management with custom hooks

🔹 Backend (Node.js)

REST API with Express

JSON file storage (persistent)

Automatic diff detection

Timestamps + UUIDs

Proper folder architecture

CORS-enabled

🔹 Diff Engine

Word-level comparison

Identifies added words

Identifies removed words

Removes duplicates

Regex-based splitting

🏗️ Architecture
Frontend (React)
  ↓ REST API
Backend (Node.js + Express)
  ↓ File I/O
versions.json (persistent storage)

📁 Folder Structure
mini-audit-trail/
│
├── frontend/              # React (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   ├── editor/
│   │   │   └── history/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── index.html
│   └── package.json
│
└── backend/               # Node.js + Express API
    ├── src/
    │   ├── controllers/
    │   ├── routes/
    │   ├── services/
    │   ├── data/
    │   │   └── versions.json
    ├── server.js
    └── package.json

🛠️ Tech Stack
Frontend

React (Vite)

Custom Hooks

Fetch API

CSS

Backend

Node.js

Express.js

uuid

fs-extra

morgan

CORS

⚙️ Setup Instructions
1. Clone Repo
git clone https://github.com/your-username/mini-audit-trail.git
cd mini-audit-trail

🖥️ Frontend Setup (Vite + React)
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🟦 Backend Setup (Node.js + Express)
cd backend
npm install
npm start


Backend runs at:

http://localhost:5000

🌐 API Documentation
GET /api/versions

Returns list of all saved versions.

Response:

[
  {
    "id": "uuid",
    "timestamp": "2025-01-01T12:00:00Z",
    "addedWords": ["hello"],
    "removedWords": ["hi"],
    "oldLength": 10,
    "newLength": 12,
    "fullText": "Hello world"
  }
]

POST /api/save-version

Saves a new version.

Request Body:
{
  "text": "Your updated content here"
}

Response:
{
  "id": "uuid",
  "timestamp": "2025-01-01T12:00:00Z",
  "addedWords": [],
  "removedWords": [],
  "oldLength": 100,
  "newLength": 110,
  "fullText": "..."
}

🌍 Deployment Guide
🟩 Deploy Backend on Render

Go to Render.com → New Web Service

Select your GitHub repository

Root directory: backend

Build command: npm install

Start command: node server.js

After deploy, copy your API URL:

https://your-backend.onrender.com/api

🟦 Deploy Frontend on Vercel

Go to Vercel → Import GitHub Repo

Set root directory to frontend

Environment Variables → Add:

VITE_API_BASE_URL = https://your-backend.onrender.com/api


Deploy

Visit:

https://your-frontend.vercel.app

📸 Screenshots

(Add your images here)

Example:

![App Screenshot](./screenshots/ui.png)

🚀 Future Enhancements

Restore to previous version

Highlight diff inside editor

Rich text support

Database storage (MongoDB / PostgreSQL)

Authentication

Pagination

🤝 Contributing

Contributions are welcome!
Open a PR or raise an issue.

📄 License

MIT License.
Free to use for personal or commercial projects.
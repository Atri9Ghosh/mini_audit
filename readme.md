
Mini Audit Trail Generator

A lightweight full‑stack app that tracks text edits at the word level and stores version history. Built with React (Vite) for the frontend and Node.js + Express for the backend.

---

## Table of contents

- [Overview](#overview)
- [Demo](#demo)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Folder structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Getting started (local development)](#getting-started-local-development)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [API](#api)
- [Data storage](#data-storage)
- [Deployment (quick notes)](#deployment-quick-notes)
- [Future ideas](#future-ideas)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The Mini Audit Trail Generator is a small web app designed to demonstrate and test a word-level diff algorithm. Every time a user saves a document, the app creates a new version containing a timestamp, unique ID, counts and lists of words added/removed, and the full text.

This project is useful as a reference for editors, educational demos, and testing of text-differencing approaches.
---

## Features

- Word‑level diff algorithm that detects added and removed words
- Version history with timestamp and UUID per version
- Simple, clean UI using React + Vite
- Lightweight REST API with Node.js + Express
- Persistent JSON file storage (`versions.json`) for quick testing

---

## Tech stack

- Frontend: React, Vite
- Backend: Node.js, Express
- Utilities: CORS, morgan, fs-extra, uuid

---

## Folder structure

mini-audit-trail/

- backend/ — Node.js + Express API
  - server.js — entry point
  - src/
    - controllers/
    - routes/
    - services/
    - data/ — `versions.json` persists version history
- frontend/ — Vite + React
  - src/
  - index.html

---

## Prerequisites

- Node.js 18+ (or later)
- npm

---

## Getting started (local development)

1. Clone the repository

```bash
git clone https://github.com/your-username/mini-audit-trail.git
cd mini-audit-trail
```

### Backend

1. Install dependencies and run the backend

```powershell
cd backend
npm install
node server.js
```

- The backend listens on port 5000 by default (or the value of `PORT` env var).
- Base API: http://localhost:5000/api

> Note: this repository doesn't include an `npm start` script in the backend package by default, so run `node server.js` to start it.

### Frontend

1. Install dependencies and run the frontend

```bash
cd frontend
npm install
npm run dev
```

- The frontend runs by default on the Vite dev server (usually http://localhost:5173).
- To make the frontend talk to a locally running backend, set the API URL in your frontend app or set `VITE_API_BASE_URL` when deploying.

---

## API

Base path: `/api` (e.g., http://localhost:5000/api)

### GET /api/versions

Returns the list of all saved versions.

Response example:

```json
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
```

### POST /api/save-version

Saves a new version. The request body should contain the updated text.

Request example:

```json
{ "text": "Your updated content here" }
```

Response: the newly created version object (same structure as above).

---

## Data storage

- Versions are stored in `backend/src/data/versions.json` as an array of versions.
- This is a simple, file-based storage system intended for demos and local development only.

---

## Deployment (quick notes)

- If you want to deploy the backend as a web service (Render, Heroku, etc.), make sure you set a `PORT` environment variable or use the default 5000.
- For the frontend (Vercel, Netlify), set `VITE_API_BASE_URL` to your backend URL.

Example deploy values:

- Backend (Render): Set root directory to `backend`, run `node server.js` as the start command.
- Frontend (Vercel): Set root to `frontend` and add `VITE_API_BASE_URL` env var to connect to the API.

---

## Future ideas

- Add an endpoint to restore a version
- Add richer inline diff highlighting in the editor
- Support rich text (HTML/Markdown)
- Replace file storage with a database (SQLite/MongoDB/Postgres)
- Add authentication and user scopes

---

## Contributing

Contributions are welcome — open an issue or submit a pull request with a concise description of your changes.

Before opening a PR, please:
- Follow consistent formatting and lint rules
- Open an issue if you are making a major architectural change

---

## License

MIT — see LICENSE

---

## Author / Contact

Create an `ISSUES` or contact in the repo for questions or help.

---

Thanks for trying out the Mini Audit Trail Generator!

(Replace placeholders like `your-username` and `API URLs` with real values when publishing.)

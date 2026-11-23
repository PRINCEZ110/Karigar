# Karigar

**Digital Artisan, Craft and Cultural Heritage Discovery Platform**
BSc (Hons) Computing — Final Year Project

Karigar is a web platform that helps people discover local artisans, traditional
crafts, museums, historical crafts and collectors — while learning the stories and
processes behind each craft.

> **Current status: Phase 0 — setup complete.**
> Folder structure and all npm dependencies are in place. Feature code will be
> added in the next phase.

---

## Technology stack

| Layer | Technology |
| --- | --- |
| Frontend | React.js (Vite), React Router, Axios, Lucide icons |
| Styling | Custom CSS design system (heritage palette) |
| Maps | Leaflet + React-Leaflet + OpenStreetMap (no API key needed) |
| Real-time | Socket.IO (client + server) |
| Backend | Node.js + Express |
| Database | MongoDB + Mongoose |
| Authentication | JWT + bcryptjs |
| REST API | Express REST endpoints |
| Uploads | Multer (local `server/uploads`) |
| Security | Helmet, CORS, express-rate-limit, express-validator |
| Dev tools | Git & GitHub, VS Code, Postman |

---

## Project structure

```
Project/
├── client/                      # React frontend (Vite)
│   ├── public/                  # Static files + favicon
│   ├── src/
│   │   ├── assets/              # Images, fonts, brand assets
│   │   ├── components/
│   │   │   ├── layout/          # Navbar, Footer, Layout
│   │   │   ├── common/          # PagePlaceholder, Loader
│   │   │   ├── map/             # Leaflet map components
│   │   │   └── chat/            # Chat UI components
│   │   ├── context/             # Auth, Cart and Socket contexts
│   │   ├── hooks/               # Custom hooks
│   │   ├── pages/               # 31 routed screens
│   │   │   ├── auth/            # Login, Register
│   │   │   ├── artisans/        # List, profile
│   │   │   ├── crafts/          # List, details, journey
│   │   │   ├── museums/         # List, details
│   │   │   ├── collectors/      # List, profile
│   │   │   ├── products/        # Shop, details
│   │   │   ├── workshops/       # List, details
│   │   │   ├── cart/            # Cart, checkout
│   │   │   ├── orders/          # Orders, order details
│   │   │   ├── chat/            # Messages
│   │   │   ├── account/         # Profile, favorites
│   │   │   └── admin/           # Admin dashboard + management
│   │   ├── services/            # Axios API service modules
│   │   ├── utils/               # Constants, currency formatter
│   │   ├── App.jsx              # All routes
│   │   ├── main.jsx
│   │   └── index.css            # Global design system
│   ├── .env.example
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                      # Express backend
│   ├── src/
│   │   ├── config/              # env + MongoDB connection
│   │   ├── models/              # 14 planned Mongoose models
│   │   ├── controllers/         # 12 planned controllers
│   │   ├── routes/              # API routers (mounted)
│   │   ├── middleware/          # auth, validation, upload, errors
│   │   ├── services/            # payment + notification services
│   │   ├── sockets/             # Socket.IO bootstrap
│   │   ├── utils/               # ApiError, asyncHandler, JWT
│   │   ├── app.js               # Express app
│   │   └── server.js            # HTTP + Socket.IO server
│   ├── uploads/                 # Local image uploads
│   ├── .env.example
│   └── package.json
│
├── docs/                        # Scope, database and API plans
├── .gitignore
├── package.json                 # Root scripts (runs both apps)
└── README.md
```

---

## Prerequisites

- **Node.js 20+** and npm — this machine has Node v24 and npm 11.
- **MongoDB** — install MongoDB Community Server and keep it running, or use a
  MongoDB Atlas connection string. It is **not installed on this machine yet**;
  the backend will exit with a clear message until it is available.
- **Git** (listed in the project stack) — not detected on this machine yet.

---

## Setup and run

Dependencies are already installed. To reinstall from scratch:

```powershell
cd "C:\Users\acer\OneDrive\Documents\IIC 3RD YEAR\-Fyp\Project"
npm run install:all
```

Create the environment files (only needed once):

```powershell
Copy-Item server\.env.example server\.env
Copy-Item client\.env.example client\.env
```

Start frontend and backend together:

```powershell
npm run dev
```

| Service | URL |
| --- | --- |
| Frontend | http://localhost:5173 |
| API | http://localhost:5000/api |
| Health check | http://localhost:5000/api/health |

### Root scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Run client and server together |
| `npm run dev:client` | Run only the React app |
| `npm run dev:server` | Run only the Express API |
| `npm run build` | Production build of the React app |
| `npm run install:all` | Install root, server and client packages |

---

## What is already set up

- Complete folder/file skeleton for frontend and backend.
- 31 routed React screens with a consistent heritage-themed shell.
- Layout: sticky navbar, footer, responsive home page, 404 page.
- API skeleton: Express app, security middleware, rate limiting, static uploads,
  `/api/health`, all feature routers mounted.
- Socket.IO server bootstrap and client dependency.
- JWT, password hashing, file upload and validation dependencies.
- 14 model stubs and 12 controller stubs aligned with the pitch deck.
- Environment templates and documentation.

## What is NOT built yet

- Mongoose schemas and database logic.
- Authentication, authorization and admin verification.
- Artisan/craft/museum/collector CRUD and search.
- Leaflet map integration.
- Cart, checkout and order management.
- Real-time chat and notifications.
- AI chatbot.
- Seed data, testing and deployment.

See `docs/ROADMAP.md` for the suggested build order.

---

## Documentation

- [`docs/PROJECT-SCOPE.md`](docs/PROJECT-SCOPE.md) — problem, solution, users and features from the pitch deck
- [`docs/DATABASE-SCHEMA.md`](docs/DATABASE-SCHEMA.md) — planned MongoDB collections and relationships
- [`docs/API-PLAN.md`](docs/API-PLAN.md) — planned REST endpoints
- [`docs/ROADMAP.md`](docs/ROADMAP.md) — phased development checklist

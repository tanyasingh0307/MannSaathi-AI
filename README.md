<div align="center">

# 🌿 MannSaathi-AI

**Your mind's companion: an AI-powered mental wellness app.**

Track your mood, talk it out with an empathetic AI, and unwind with calming activities.

![Status](https://img.shields.io/badge/status-in%20development-F4A340)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Node](https://img.shields.io/badge/Node.js-Express-339933)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248)
![License](https://img.shields.io/badge/license-MIT-blue)

</div>

---

## ✨ Features

- 💬 **AI companion chat** powered by Google Gemini, with session history
- 😊 **Mood tracking** with a simple slider and a timeline of past entries
- 🧘 **Calming activities**: guided breathing, ocean waves, zen garden, forest sounds
- 📊 **Dashboard** with mood trends and activity insights
- 🔐 **Secure authentication** using JWT and hashed passwords
- 🌗 **Light and dark themes** with a warm "Sandhya" (dusk) palette

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Recharts |
| Backend | Node.js, Express, TypeScript |
| Database | MongoDB Atlas (Mongoose) |
| AI | Google Gemini API |
| Background jobs | Inngest |
| Auth | JSON Web Tokens, bcrypt |
| Deployment | Vercel (frontend), Render (backend) |

## 📁 Project Structure

```
MannSaathi-AI/
├── backend/             # Express + TypeScript API
│   └── src/
│       ├── controllers/ # Request handlers
│       ├── inngest/     # Background functions
│       ├── middleware/  # Auth and error handling
│       ├── models/      # Mongoose schemas
│       ├── routes/      # API routes
│       └── utils/       # DB connection, logger
└── frontend/            # Next.js app
    ├── app/             # Pages and API proxy routes
    ├── components/      # UI, chat, mood, games
    └── lib/             # API helpers, hooks, context
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (free tier works)
- A [Google Gemini API key](https://aistudio.google.com/apikey)

### 1. Clone the repository
```bash
git clone https://github.com/tanyasingh0307/MannSaathi-AI.git
cd MannSaathi-AI
```

### 2. Run the backend
```bash
cd backend
npm install
cp .env.example .env     # then fill in your values
npm run dev
```
The API runs at `http://localhost:3001`.

### 3. Run the frontend
Open a second terminal:
```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```
The app runs at `http://localhost:3000`.

## 🔑 Environment Variables

**`backend/.env`**
| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default `3001`) |
| `NODE_ENV` | `development` or `production` |
| `MONGODB_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Long random string used to sign tokens |
| `GEMINI_API_KEY` | Google Gemini API key |

**`frontend/.env.local`**
| Variable | Description |
|----------|-------------|
| `BACKEND_API_URL` | Backend URL, e.g. `http://localhost:3001` |

## 🔌 API Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| POST | `/auth/register` | Create an account |
| POST | `/auth/login` | Log in and receive a token |
| GET | `/auth/me` | Get the current user |
| POST | `/chat/sessions` | Start a chat session |
| POST | `/chat/sessions/:id/messages` | Send a message to the AI |
| GET | `/chat/sessions/:id/history` | Get a session's messages |
| POST / GET | `/api/mood` | Log or list moods |
| POST / GET | `/api/activity` | Log or list activities |

_Final routes will be confirmed as the backend is built._

## ☁️ Deployment

- **Backend → Render:** root directory `backend`, build `npm install && npm run build`, start `npm start`. Add the backend env vars in the dashboard.
- **Frontend → Vercel:** root directory `frontend`. Set `BACKEND_API_URL` to your Render URL.

## 🗺️ Roadmap

- [x] Project setup
- [ ] Backend: models, auth, mood, activities
- [ ] Backend: AI chat with Gemini
- [ ] Frontend: landing page and theme
- [ ] Frontend: dashboard and therapy chat
- [ ] Calming games
- [ ] Deployment

## ⚠️ Disclaimer

MannSaathi-AI is a supportive companion, **not** a replacement for professional
mental health care, diagnosis, or treatment. If you are in crisis or thinking
about harming yourself, please contact a local emergency number or a crisis
helpline right away.

## 📄 License

Released under the [MIT License](LICENSE).

## 🙏 Acknowledgements

Inspired by the open-source
[ai-therapist-agent](https://github.com/mendsalbert/ai-therapist-agent) project,
rebuilt with a new design, content, and structure.

---

<div align="center">Built with 🧡 by <a href="https://github.com/tanyasingh0307">Tanya Singh</a></div>
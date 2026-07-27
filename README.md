# PrepPilot AI

PrepPilot AI is a full-stack MERN application that helps candidates prepare for job interviews. Upload your resume (PDF), paste a job description, and add a short self-description — PrepPilot AI uses Google's Gemini model to generate a personalized interview report: likely technical and behavioral questions, a match score, skill gaps, and a day-wise preparation plan. It can also generate a tailored, ATS-friendly resume PDF for the target job.

## Features

- **JWT-based authentication** (register, login, logout) with an HTTP-only cookie and a token blacklist for logout
- **Resume upload & parsing** — PDF resumes are parsed server-side with `pdf-parse`
- **AI-generated interview report** via the Gemini API, including:
  - Match score against the job description
  - Technical questions with the interviewer's intention and how to answer them
  - Behavioral questions with the interviewer's intention and how to answer them
  - Identified skill gaps with severity
  - A day-wise preparation plan
- **AI-tailored resume PDF generation** for a specific job description, rendered with Puppeteer
- **Interview report history** — view all past reports or a single report by ID

## Tech Stack

**Frontend**
- React 19 + Vite
- React Router
- Axios
- SCSS

**Backend**
- Node.js + Express 5
- MongoDB + Mongoose
- JWT (`jsonwebtoken`) for auth, `bcryptjs` for password hashing
- Multer for file uploads, `pdf-parse` for resume text extraction
- `@google/genai` (Gemini) for AI-generated content, with Zod for schema validation
- Puppeteer for HTML-to-PDF resume generation

## Project Structure

```
PrepPilot AI/
├── Backend/
│   ├── src/
│   │   ├── config/          # Database connection
│   │   ├── controllers/     # Route handlers (auth, interview)
│   │   ├── middlewares/     # Auth guard, file upload
│   │   ├── models/          # Mongoose schemas
│   │   ├── routes/          # Express routers
│   │   ├── services/        # Gemini AI integration
│   │   └── app.js           # Express app setup
│   └── server.js            # Entry point
└── Frontend/
    └── src/
        ├── features/
        │   ├── auth/         # Login/register pages, auth context
        │   └── interview/    # Home, interview pages, interview context
        ├── app.routes.jsx
        └── main.jsx
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A MongoDB database (local or MongoDB Atlas)
- A Google AI Studio / Gemini API key

### 1. Clone the repository
```bash
git clone https://github.com/Imranali2109/PrepPilot-AI.git
cd PrepPilot-AI
```

### 2. Backend setup
```bash
cd Backend
npm install
```

Create a `.env` file inside `Backend/` (see `.env.example`):
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_GENAI_API_KEY=your_gemini_api_key
```

Start the backend (runs on `http://localhost:3000`):
```bash
npm run dev
```

### 3. Frontend setup
```bash
cd Frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` by default.

## API Overview

**Auth** — `/api/auth`
| Method | Endpoint      | Description                        | Access  |
|--------|---------------|-------------------------------------|---------|
| POST   | `/register`   | Register a new user                 | Public  |
| POST   | `/login`      | Log in with email and password      | Public  |
| GET    | `/logout`     | Log out and blacklist the token     | Public  |
| GET    | `/get-me`     | Get the current logged-in user      | Private |

**Interview** — `/api/interview`
| Method | Endpoint                     | Description                                                | Access  |
|--------|-------------------------------|--------------------------------------------------------------|---------|
| POST   | `/`                           | Generate a new interview report from resume + job description | Private |
| GET    | `/`                           | Get all interview reports for the logged-in user             | Private |
| GET    | `/report/:interviewId`        | Get a single interview report by ID                           | Private |
| POST   | `/resume/pdf/:interviewReportId` | Generate a tailored resume PDF for a report                | Private |

## Notes

- Auth uses an HTTP-only cookie, so the frontend axios instances are configured with `withCredentials: true`.
- If you deploy the frontend and backend to different domains, update the backend CORS `origin` and cookie settings (`sameSite`, `secure`) accordingly, and point the frontend's API `baseURL` at the deployed backend URL.



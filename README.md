PrepPilot AI 🚀

PrepPilot AI is an AI-powered interview preparation platform that helps job seekers evaluate their resumes, analyze job descriptions, and generate personalized interview preparation reports. The application leverages Google's Gemini AI to provide technical and behavioral interview questions, identify skill gaps, and create a structured preparation plan tailored to a specific job role.

✨ Features
📄 Upload resume in PDF format
🤖 AI-powered resume and job description analysis
📊 Resume-to-job match score
💻 Technical interview questions with model answers
🗣️ Behavioral interview questions with guidance
📈 Skill gap analysis with severity levels
📅 Personalized day-wise interview preparation roadmap
🔐 Secure user authentication using JWT
👤 User-specific interview report history
📄 AI-generated ATS-friendly resume in PDF format
📱 Responsive and modern user interface
🛠️ Tech Stack
Frontend
React.js
React Router
Axios
SCSS
Redux Toolkit / TanStack Query
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
Multer
pdf-parse
Puppeteer
AI
Google Gemini API
Zod
zod-to-json-schema
⚙️ Workflow
User signs in to the application.
Uploads their resume (PDF).
Provides a self-description and target job description.
Resume text is extracted using pdf-parse.
Gemini AI analyzes the candidate profile against the job description.
The application generates:
Match Score
Technical Questions
Behavioral Questions
Skill Gap Analysis
Personalized Preparation Plan
Reports are securely stored in MongoDB for future access.
Users can also generate an AI-tailored ATS-friendly resume in PDF format.
📂 Project Structure
PrepPilot-AI/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── config/
│   └── package.json
│
└── README.md
🚀 Getting Started
Clone the repository
git clone https://github.com/your-username/PrepPilot-AI.git
cd PrepPilot-AI
Backend Setup
cd Backend
npm install
npm run dev
Frontend Setup
cd Frontend
npm install
npm run dev
🔑 Environment Variables

Create a .env file inside the Backend directory.

PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_GENAI_API_KEY=your_google_gemini_api_key
🎯 Future Improvements
Mock interview simulation with AI voice support
Resume keyword optimization
Company-specific interview preparation
AI chat assistant for interview doubts
Interview performance analytics
Support for multiple resume formats (DOCX, TXT)
Email report sharing
Dark mode

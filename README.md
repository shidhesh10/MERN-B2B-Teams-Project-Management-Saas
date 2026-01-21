# TeamSync | Advanced B2B Project Management SaaS

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-v18%2B-green.svg)
![React](https://img.shields.io/badge/react-v18-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-4.4%2B-green.svg)

**TeamSync** is a powerful, scalable, and multi-tenant project management system designed for B2B collaboration. Built on the MERN stack (MongoDB, Express, React, Node.js) with TypeScript, it streamlines workspace management, task tracking, and team collaboration through a secure, role-based environment.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [How to Use](#-how-to-use)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Features

### 🔐 Authentication & Security
- **Multi-Method Login:** Secure sign-in via Google OAuth or standard Email/Password.
- **Session Management:** Secure HTTP-only cookie session management with automated termination.
- **Robust Integrity:** Mongoose transactions ensuring data consistency across operations.

### 🏢 Workspace & Multi-Tenancy
- **Multi-Workspace Support:** Users can create, own, and switch between multiple distinct workspaces.
- **Role-Based Access Control (RBAC):** Granular permissions for Owners, Admins, and Members.
- **Member Management:** Invite team members via email and manage access levels.

### 📊 Project & Task Management
- **Hierarchy:** Organize work into **Workspaces** > **Projects** > **Epics** > **Tasks**.
- **Advanced Task Operations:** Full CRUD capabilities with statuses, priority levels, and assignees.
- **Filtering & Search:** Deep search capabilities and filters by Status, Priority, and Assignee.

### 📈 Analytics & UI
- **Dashboard Analytics:** Visual insights into project progress and team velocity.
- **Responsive Design:** Built with TailwindCSS and Shadcn UI for a seamless experience across devices.
- **Optimized Performance:** Server-side pagination and efficient load-more functionality.

---

## 🛠 Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Backend** | Node.js, Express.js, TypeScript |
| **Frontend** | React.js, Vite, TypeScript, TailwindCSS, Shadcn UI |
| **Database** | MongoDB, Mongoose |
| **Auth** | Passport.js, Google OAuth 2.0 |
| **Deployment** | Vercel (Frontend), Render/Railway (Backend) |

---

## 🏗 System Architecture

TeamSync utilizes a **Multi-Tenant Architecture** where data is logically separated by "Workspaces." 
- **Backend:** RESTful API with scalable architecture.
- **Frontend:** Single Page Application (SPA) consuming APIs.
- **Database:** Normalized schemas with referencing for Projects, Tasks, and Users.

---

## 🚀 Getting Started

Follow these instructions to set up the project locally for development and testing.

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (Local instance or Atlas URI)
- **NPM** or **Yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone (https://github.com/shidhesh10/MERN-B2B-Teams-Project-Management-Saas)
   cd teamsync

```

2. **Install Dependencies**
```bash
npm install

```



### Environment Variables

Create a `.env` file in the root directory. You must configure the following keys for the application to function:

```env
# Server Configuration
PORT=8000
NODE_ENV=development
MONGO_URI="mongodb+srv://<user>:<password>@cluster.mongodb.net/teamsync_db"

# Session Security
SESSION_SECRET="your_complex_session_secret_key"

# Google OAuth Configuration
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback

# Frontend Integration
FRONTEND_ORIGIN=http://localhost:3000
FRONTEND_GOOGLE_CALLBACK_URL=http://localhost:3000/google/callback

```

### Running the Application

**Development Mode:**
Start the backend server with hot-reloading.

```bash
npm run dev

```

*The API will be available at `http://localhost:8000*`

**Production Build:**

```bash
npm run build
npm start

```

---

## 📖 How to Use

Once the application is running, follow this workflow to manage your team:

### 1. Initialization & Workspace Creation

* **Sign Up/Login:** Use Google or Email to authenticate.
* **Create Workspace:** Upon first login, you will be prompted to create a Workspace (e.g., "Marketing Team"). You automatically become the **Owner**.

### 2. Onboarding Team Members

* Navigate to **Settings > Members**.
* Click **"Invite Member"** and enter the email address of your colleague.
* A unique invite link is generated (or email sent depending on configuration). Once they join, they are added as a **Member**.
* **Promote to Admin:** As an Owner, you can promote Members to Admins to give them project creation rights.

### 3. Project Structure Setup

* **Create Project:** Inside a workspace, create a Project (e.g., "Q1 Website Redesign").
* **Define Epics:** Break the project down into Epics (e.g., "Frontend", "Backend API", "Testing").
* **Create Tasks:** Inside Epics, create granular Tasks.

### 4. Task Management

* **Assign:** Open a task and assign it to a team member.
* **Prioritize:** Set priority to *Low*, *Medium*, or *High*.
* **Track:** Move tasks through statuses (*Backlog* -> *In Progress* -> *Done*).

### 5. Analytics

* Navigate to the **Dashboard** to view the task distribution chart and completion rates to track overall productivity.

---

## 🗺 Roadmap

* [ ] Real-time updates with Socket.io
* [ ] Drag-and-drop Kanban board
* [ ] File attachments for tasks
* [ ] Slack/Discord integrations
* [ ] Dark Mode toggle

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

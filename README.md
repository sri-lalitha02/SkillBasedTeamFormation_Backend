# Skill-Based Team Formation Platform - Backend

A RESTful backend service for the **Skill-Based Team Formation Platform**, designed to help students and developers create, discover, and manage project teams based on technical skills. The application provides secure authentication, user profile management, team collaboration, and project management through well-structured REST APIs.

---

## Overview

The Skill-Based Team Formation Platform is a backend application built to simplify collaboration among students and developers. Instead of manually searching for teammates, users can create profiles, list their technical skills, create teams, and invite others to collaborate on projects.

The backend exposes REST APIs that power the frontend application while ensuring secure authentication, proper authorization, and reliable database interactions.

The project follows a modular architecture using Express.js, MongoDB, and JWT authentication, making it scalable and easy to maintain.

---

## Project Objectives

The primary goals of this project are:

* Build a secure RESTful backend using Express.js.
* Authenticate users using JSON Web Tokens (JWT).
* Manage user profiles and technical skills.
* Allow users to create and manage project teams.
* Provide APIs for project management.
* Follow scalable backend architecture and best practices.
* Document all APIs using Swagger/OpenAPI.
* Deploy the backend for public access.

---

## Key Features

### Authentication

* User Registration
* User Login
* Secure Password Hashing using bcrypt
* JWT-Based Authentication
* Logout Functionality
* Protected Routes

---

### User Management

* Create User Profile
* View Profile
* Update Profile
* Change Password
* Manage Skills
* Portfolio Links
* GitHub & LinkedIn Integration

---

### Team Management

* Create Teams
* Update Team Information
* Browse Available Teams
* Join Existing Teams
* Leave Teams
* Delete Teams
* Manage Team Members

---

### Project Management

* Create Projects
* Update Projects
* Retrieve Project Details
* Delete Projects
* Associate Projects with Teams

---

### API Documentation

* Interactive Swagger UI
* OpenAPI Specification
* Request Validation
* Response Models
* API Testing from Browser

---

## Technology Stack

| Layer               | Technology    |
| ------------------- | ------------- |
| Runtime             | Node.js       |
| Framework           | Express.js    |
| Database            | MongoDB Atlas |
| ODM                 | Mongoose      |
| Authentication      | JWT           |
| Password Encryption | bcryptjs      |
| Documentation       | Swagger UI    |
| Deployment          | Render        |
| Version Control     | Git & GitHub  |

---

## System Architecture

```text
                        Client Applications
                 (React / Mobile / Postman)
                              │
                              ▼
                     Express REST API Server
                              │
                ┌──────────────┬──────────────┬
                │              │              │
                ▼              ▼              ▼
            Authentication   Team Module   Project Module
                │              │              │
                └──────────────┼──────────────┘
                               ▼
                          Business Logic
                           (Controllers)
                               ▼
                            Mongoose ODM
                               ▼
                            MongoDB Atlas
```

---

## Live Resources

| Resource              | URL                                                              |
| --------------------- | ---------------------------------------------------------------- |
| GitHub Repository     | https://github.com/sri-lalitha02/SkillBasedTeamFormation_Backend |
| Backend Deployment    | https://skillbasedteamformation-backend-1.onrender.com           |
| Swagger Documentation | https://skillbasedteamformation-backend-1.onrender.com/api-docs/ |

---

## Project Structure

```text
SkillBasedTeamFormation_Backend
│
├── config/
│   └── db.js                     # Database connection
│
├── controllers/                  # Business logic
│   ├── authController.js
│   ├── userController.js
│   ├── teamController.js
│   └── projectController.js
│
├── middleware/                   # Authentication middleware
│   └── authMiddleware.js
│
├── models/                       # MongoDB models
│   ├── User.js
│   ├── team.js
│   ├── project.js
│   └── joinrequest.js
│
├── routes/                       # API route definitions
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── teamRoutes.js
│   ├── projectRoutes.js
│   └── joinRequestRoutes.js
│
├── utils/
│   └── emailServices.js
│
├── app.js                        # Application entry point
├── swagger.js                    # Swagger configuration
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── README.md
```

## Prerequisites

Before running the project, ensure the following software is installed on your system:

| Software              | Recommended Version |
| --------------------- | ------------------- |
| Node.js               | 18.x or later       |
| npm                   | 9.x or later        |
| MongoDB Atlas Account | Latest              |
| Git                   | Latest              |

Verify your installation:

```bash
node -v
npm -v
git --version
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/sri-lalitha02/SkillBasedTeamFormation_Backend.git
```

### 2. Navigate to the project directory

```bash
cd SkillBasedTeamFormation_Backend
```

### 3. Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root and configure the following variables:

```env
PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_jwt_secret_key

NODE_ENV=development
```

> Replace the placeholder values with your own MongoDB connection string and JWT secret before starting the application.

---

## Running the Application

### Development Mode

Starts the server with automatic restart on file changes.

```bash
npm run dev
```

### Production Mode

Starts the application in production mode.

```bash
npm start
```

After the server starts successfully, the application will be available at:

```text
http://localhost:5000
```

---

## Available Scripts

| Command       | Description                                 |
| ------------- | ------------------------------------------- |
| `npm install` | Installs project dependencies               |
| `npm run dev` | Starts the development server using Nodemon |
| `npm start`   | Starts the production server                |

---

## API Base URL

### Local Development

```text
http://localhost:5000/api
```

### Production

```text
https://skillbasedteamformation-backend-1.onrender.com/api
```

---

## Configuration Notes

* MongoDB Atlas is used as the primary database.
* JWT is used for user authentication and authorization.
* Sensitive configuration values should always be stored in the `.env` file.
* Swagger documentation is automatically available when the server is running.
* Do not commit your `.env` file or any sensitive credentials to the repository.

---

## API Documentation

The backend APIs are documented using **Swagger (OpenAPI Specification)**, allowing developers to explore and test endpoints directly from the browser.

### Swagger UI

```text
https://skillbasedteamformation-backend-1.onrender.com/api-docs/
```

### API Base URLs

**Local Development**

```text
http://localhost:5000/api
```

**Production**

```text
https://skillbasedteamformation-backend-1.onrender.com/api
```

The Swagger interface provides:

* Complete API documentation
* Request and response schemas
* Authentication support
* Interactive API testing
* HTTP status codes for each endpoint

---

## Authentication

The application uses **JSON Web Token (JWT)** based authentication to secure protected routes.

### Authentication Workflow

```text
             Register
                 │
                 ▼
              Login
                 │
                 ▼
      JWT Token Generated
                 │
                 ▼
 Include Token in Authorization Header
                 │
                 ▼
      Access Protected Endpoints
```

### Authorization Header

For protected APIs, include the JWT token in the request header.

```http
Authorization: Bearer <your_jwt_token>
```

---

## API Reference

### Authentication Endpoints

| Method | Endpoint                   | Description               |
| ------ | -------------------------- | ------------------------- |
| POST   | `/api/auth/register`       | Register a new user       |
| POST   | `/api/auth/login`          | Login user                |
| POST   | `/api/auth/logout`         | Logout authenticated user |
| POST   | `/api/auth/send-otp`       | Send OTP to email         |
| POST   | `/api/auth/verify-otp`     | Verify OTP                |
| POST   | `/api/auth/reset-password` | Reset password            |


---

### User Endpoints

| Method | Endpoint                     | Description     |
| ------ | ---------------------------- | --------------- |
| GET    | `/api/users/me`              | Logged-in user  |
| GET    | `/api/users/profile/:id`     | Public profile  |
| PUT    | `/api/users/update-profile`  | Update profile  |
| PUT    | `/api/users/change-password` | Change password |

---

## Common HTTP Status Codes

| Status Code | Meaning                        |
| ----------- | ------------------------------ |
| 200         | Request completed successfully |
| 201         | Resource created successfully  |
| 400         | Bad request                    |
| 401         | Unauthorized                   |
| 403         | Forbidden                      |
| 404         | Resource not found             |
| 500         | Internal server error          |

---

## Example Request

### User Login

```http
POST /api/auth/login
Content-Type: application/json
```

```json
{
  "email": "user@example.com",
  "password": "your_password"
}
```

### Successful Response

```json
{
  "success": true,
  "token": "<jwt_token>",
  "user": {
    "id": "user_id",
    "firstName": "John",
    "lastName": "Doe",
    "email": "user@example.com"
  }
}
```

---

## Error Response Example

```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

## API Testing

You can test all available endpoints using:

* Swagger UI
* Postman
<!-- * Insomnia -->
* Any REST API client

Swagger is recommended because it includes request schemas, response models, and interactive testing support.

---

## Notes

* Protected endpoints require a valid JWT access token.
* All request and response formats follow JSON.
* Input validation is performed before processing requests.
* API responses use standard HTTP status codes.
* Refer to the Swagger documentation for the most up-to-date endpoint details.

---

---

# Database Schema

The application uses **MongoDB Atlas** as its database and **Mongoose** as the Object Data Modeling (ODM) library. The database is organized into four primary collections, each representing a core entity of the platform.

---

## User Model

The **User** model stores authentication details, personal information, technical skills, and social profile links.

| Field      | Type          | Description            |
| ---------- | ------------- | ---------------------- |
| firstName  | String        | User's first name      |
| lastName   | String        | User's last name       |
| email      | String        | Unique email address   |
| password   | String        | Hashed password        |
| mobile     | String        | Mobile number          |
| experience | String        | Experience level       |
| role       | String        | Preferred role         |
| skills     | Array<String> | Technical skills       |
| github     | String        | GitHub profile URL     |
| linkedin   | String        | LinkedIn profile URL   |
| portfolio  | String        | Portfolio website      |
| bio        | String        | Short user biography   |

---

## Team Model

The **Team** model stores project team information.

| Field          | Type            | Description        |
| -------------- | --------------- | ------------------ |
| name           | String          | Team name          |
| description    | String          | Team description   |
| projectName    | String          | Associated project |
| skillsRequired | Array<String>   | Required skills    |
| members        | Array<ObjectId> | Team members       |
| maxMembers     | Number          | Maximum team size  |
| createdBy      | ObjectId        | Team creator       |


---

## Project Model

The **Project** model stores project information created by users.

| Field             | Type          | Description                        |
| ----------------- | ------------- | ---------------------------------- |
| projectName       | String        | Project name                       |
| description       | String        | Project description                |
| category          | String        | Project category                   |
| requiredSkills    | Array<String> | Skills required                    |
| experienceLevel   | String        | Required experience level          |
| mode              | String        | Project mode (Online/Offline/Hybrid) |
| status            | String        | Project status                     |
| deadline          | Date          | Project deadline                   |
| createdBy         | ObjectId      | User who created the project       |


---

## Join Request Model

The **Join Request** model manages requests submitted by users to join project teams.

| Field   | Type     | Description                     |
| ------- | -------- | ------------------------------- |
| teamId  | ObjectId | Requested team                  |
| userId  | ObjectId | User requesting to join         |
| message | String   | Request message                 |
| status  | String   | Pending, Accepted, or Rejected  |
---

## Entity Relationship

```text
            User
           /   \
          /     \
     creates   sends
        |         |
        ▼         ▼
      Team <-- Join Request
        |
        |
    associated with
        |
        ▼
     Project
```

---

## Database Relationships

- A **User** can create multiple Teams.
- A **User** can create multiple Projects.
- A **Team** can have multiple members.
- A **Team** can be associated with a Project.
- A **User** can submit multiple Join Requests.
- Each **Join Request** belongs to one User and one Team.

---

---

# Backend Request Lifecycle

Every client request follows a structured flow through the backend before a response is returned.

```text
    Client (React / Postman)
        │
        ▼
    Express Router
        │
        ▼
    Authentication Middleware
        │
        ▼
    Controller
        │
        ▼
    Mongoose Model
        │
        ▼
    MongoDB Atlas
        │
        ▼
    Controller
        │
        ▼
    JSON Response
        │
        ▼
    Client
```

### Request Processing Steps

1. The client sends an HTTP request to the backend.
2. Express Router identifies the requested endpoint.
3. Authentication Middleware validates the JWT token for protected routes.
4. The appropriate Controller executes the business logic.
5. Mongoose Models interact with MongoDB Atlas.
6. The database returns the requested data.
7. The controller formats the response.
8. The client receives a JSON response.

---

# Authentication Workflow

The application uses JWT (JSON Web Token) for secure authentication.

```text
           User
            │
            ▼
        Register
            │
            ▼
    Password Hashed using bcrypt
            │
            ▼
      Stored in MongoDB
            │
            ▼
          Login
            │
            ▼
        Password Verified
            │
            ▼
        JWT Token Generated
            │
            ▼
        Access Protected APIs
```

### Authentication Process

- User registers with personal details.
- Password is securely hashed using bcrypt before storage.
- During login, the password is verified.
- A JWT token is generated upon successful authentication.
- The token is included in the Authorization header for protected APIs.
- Middleware validates the token before granting access.

---

# User Management Workflow

```text
         Register/Login
                │
                ▼
        Create Profile
                │
                ▼
         View Profile
                │
                ▼
        Update Profile
                │
                ▼
        Change Password
```

### User Operations

- Register a new account.
- Log in securely.
- View personal profile.
- Update profile information.
- Change account password.
- Manage technical skills and portfolio links.

---

# Team Management Workflow

```text
            Create Team
                │
                ▼
            Save Team Details
                │
                ▼
            Browse Available Teams
                │
                ▼
            Join Team
                │
                ▼
            Manage Members
                │
                ▼
            Leave/Delete Team
```

### Team Operations

- Create a new team.
- Update team information.
- Browse all available teams.
- Join an existing team.
- Remove members or leave a team.
- Delete a team when required.

---

# Project Management Workflow

```text
            Create Project
                │
                ▼
            Store Project
                │
                ▼
            Retrieve Project
                │
                ▼
            Update Project
                │
                ▼
            Delete Project
```

### Project Operations

- Create new projects.
- View project information.
- Update project details.
- Delete completed or inactive projects.

---

# Password Reset Workflow

```text
        Forgot Password
                │
                ▼
        Send OTP
                │
                ▼
        Verify OTP
                │
                ▼
        Enter New Password
                │
                ▼
        Password Updated
```

### Password Recovery Process

- User requests password reset.
- OTP is sent to the registered email.
- User verifies the OTP.
- User enters a new password.
- Password is securely updated in the database.

---

# JWT Authentication Process

```text
               Login
                │
                ▼
            Generate JWT Token
                │
                ▼
            Authorization Header
                │
                ▼
            Authentication Middleware
                │
                ▼
            Token Verification
                │
                ▼
            Access Granted
```

### Authorization Header Example

```http
Authorization: Bearer <your_jwt_token>
```

---

## Error Handling Strategy

| Error Type           | Description                     | HTTP Status Code |
| -------------------- | ------------------------------- | ---------------- |
| Validation Error     | Invalid input provided          | 400              |
| Unauthorized         | Missing or invalid JWT token    | 401              |
| Forbidden            | Access denied                   | 403              |
| Not Found            | Requested resource not found    | 404              |
| Internal Server Error| Unexpected server error         | 500              |



### Error Handling Features

- Input validation before processing.
- Standard HTTP status codes.
- Consistent JSON error responses.
- Secure error messages without exposing sensitive information.

---

# Security Features

The backend implements multiple security mechanisms to protect user data and APIs.

- JWT-based Authentication
- Password Hashing using bcrypt
- Protected API Routes
- Environment Variable Configuration
- Request Validation
- MongoDB Access through Mongoose ODM
- Secure Password Reset using OTP
- Secure JSON API Responses

---

# Deployment Architecture

The backend is deployed using Render, while MongoDB Atlas provides cloud database services.

```text
GitHub Repository
        │
        ▼
Render Deployment
        │
        ▼
Node.js + Express Server
        │
        ▼
MongoDB Atlas
        │
        ▼
Client Applications
```

### Deployment Process

1. Source code is pushed to GitHub.
2. Render automatically deploys the backend.
3. Environment variables are configured.
4. The backend connects to MongoDB Atlas.
5. APIs become publicly accessible.

---

# Advantages of the Architecture

- Modular folder structure
- Scalable REST API architecture
- Secure authentication using JWT
- Cloud-hosted MongoDB database
- Interactive API documentation with Swagger
- Easy deployment using Render
- Maintainable and reusable codebase

---

# Future Enhancements

Possible future improvements include:

- Real-time chat using Socket.IO
- AI-based team recommendation
- Email notifications
- Project progress tracking
- Admin dashboard
- Team invitation system
- File upload support
- Activity logs
- Analytics dashboard
- Mobile application support

---

# Conclusion

The Skill-Based Team Formation Platform backend is designed using modern backend development principles and RESTful architecture. It provides secure authentication, efficient user management, team collaboration, and project management through modular Express.js components and MongoDB Atlas.

By integrating JWT authentication, bcrypt password hashing, Swagger API documentation, and cloud deployment on Render, the backend ensures scalability, maintainability, and security. The architecture is flexible enough to support future enhancements such as AI-powered team recommendations, real-time collaboration, and advanced analytics, making it a strong foundation for collaborative software development platforms.

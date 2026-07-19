# Skill-Based Team Formation Platform - Backend

A RESTful backend service for the **Skill-Based Team Formation Platform**, designed to help students and developers create, discover, and manage project teams based on technical skills. The application provides secure authentication, user profile management, team collaboration, and project management APIs following REST architecture.

---

# Overview

The Skill-Based Team Formation Platform is a backend application built to simplify collaboration among students and developers. Instead of manually searching for teammates, users can create profiles, list their technical skills, create teams, and invite others to collaborate on projects.

The backend exposes REST APIs that power the frontend application while ensuring secure authentication, proper authorization, and reliable database interactions.

The project follows a modular architecture using Express.js, MongoDB, and JWT authentication, making it scalable and easy to maintain.

---

# Project Objectives

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

# Key Features

## Authentication

* User Registration
* User Login
* Secure Password Hashing using bcrypt
* JWT-Based Authentication
* Logout Functionality
* Protected Routes

---

## User Management

* Create User Profile
* View Profile
* Update Profile
* Change Password
* Manage Skills
* Portfolio Links
* GitHub & LinkedIn Integration

---

## Team Management

* Create Teams
* Update Team Information
* Browse Available Teams
* Join Existing Teams
* Leave Teams
* Delete Teams
* Manage Team Members

---

## Project Management

* Create Projects
* Update Projects
* Retrieve Project Details
* Delete Projects
* Associate Projects with Teams

---

## API Documentation

* Interactive Swagger UI
* OpenAPI Specification
* Request Validation
* Response Models
* API Testing from Browser

---

# Technology Stack

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

# System Architecture

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

# Live Resources

| Resource              | URL                                                              |
| --------------------- | ---------------------------------------------------------------- |
| GitHub Repository     | https://github.com/sri-lalitha02/SkillBasedTeamFormation_Backend |
| Backend Deployment    | https://skillbasedteamformation-backend-1.onrender.com           |
| Swagger Documentation | https://skillbasedteamformation-backend-1.onrender.com/api-docs/ |

---

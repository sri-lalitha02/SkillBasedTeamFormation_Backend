const express = require("express");
const router = express.Router();

const {
  createProject,
  getProjects,
} = require("../controllers/projectController");

const protect = require("../middleware/authMiddleware");

/**
 * @swagger
 * /api/projects:
 *   post:
 *     summary: Create a new project
 *     description: Creates a project that users can form teams for.
 *     tags:
 *       - Projects
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             projectName: "Skill Based Team Formation Platform"
 *             description: "A platform to connect students based on skills and create project teams"
 *             category: "Web Development"
 *             requiredSkills:
 *               - React
 *               - Node.js
 *               - MongoDB
 *             experienceLevel: "Beginner"
 *             mode: "Online"
 *             deadline: "2026-08-30"
 *           schema:
 *             type: object
 *             properties:
 *               projectName:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               requiredSkills:
 *                 type: array
 *                 items:
 *                   type: string
 *               experienceLevel:
 *                 type: string
 *               mode:
 *                 type: string
 *               deadline:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Project created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "Project created successfully"
 *               projectId: "64f8a1b2c3d4e5f678901234"
 *       400:
 *         description: Invalid project details
 *       401:
 *         description: Unauthorized
 */

// CREATE PROJECT (LOGIN REQUIRED)
router.post("/", protect, createProject);

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Get all projects
 *     description: Retrieves all available projects.
 *     tags:
 *       - Projects
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Projects fetched successfully
 *         content:
 *           application/json:
 *             example:
 *               - _id: "64f8a1b2c3d4e5f678901234"
 *                 projectName: "Skill Based Team Formation Platform"
 *                 description: "Build a platform for creating teams based on skills"
 *                 category: "Web Development"
 *                 requiredSkills:
 *                   - React
 *                   - Node.js
 *                   - MongoDB
 *                 experienceLevel: "Beginner"
 *                 mode: "Online"
 *                 deadline: "2026-08-30"
 *       401:
 *         description: Unauthorized
 */

// GET PROJECTS (OPTIONAL: keep protected or open)
router.get("/", protect, getProjects);

module.exports = router;
const express = require("express");
const router = express.Router();

const {
  createTeam,
  getAllTeams,
  getTeamById,
  joinTeam,
  updateTeam,
  deleteTeam,
  leaveTeam,
  addMember,
  removeMember
} = require("../controllers/teamController");

const protect = require("../middleware/authMiddleware");

/**
 * @swagger
 * /api/teams/create:
 *   post:
 *     summary: Create a new team
 *     description: Creates a new team for a project.
 *     tags:
 *       - Teams
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             teamName: "MERN Developers Team"
 *             description: "Team for building a web application"
 *             projectId: "64f8a1b2c3d4e5f678901234"
 *             requiredSkills:
 *               - React
 *               - Node.js
 *               - MongoDB
 *             maxMembers: 5
 *           schema:
 *             type: object
 *             properties:
 *               teamName:
 *                 type: string
 *               description:
 *                 type: string
 *               projectId:
 *                 type: string
 *               requiredSkills:
 *                 type: array
 *                 items:
 *                   type: string
 *               maxMembers:
 *                 type: number
 *     responses:
 *       201:
 *         description: Team created successfully
 *       400:
 *         description: Invalid team details
 *       401:
 *         description: Unauthorized
 */

// CREATE TEAM
router.post("/create", protect, createTeam);

/**
 * @swagger
 * /api/teams:
 *   get:
 *     summary: Get all teams
 *     description: Returns all available teams.
 *     tags:
 *       - Teams
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Teams fetched successfully
 *         content:
 *           application/json:
 *             example:
 *               - _id: "64f8a1b2c3d4e5f678901234"
 *                 teamName: "MERN Developers Team"
 *                 description: "Building a web application"
 *                 members:
 *                   - "64f8a1b2c3d4e5f678901234"
 *                 requiredSkills:
 *                   - React
 *                   - Node.js
 *       401:
 *         description: Unauthorized
 */

// GET ALL TEAMS
router.get("/", protect, getAllTeams);

/**
 * @swagger
 * /api/teams/{id}:
 *   get:
 *     summary: Get team by ID
 *     tags:
 *       - Teams
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Team ID
 *         schema:
 *           type: string
 *           example: 64f8a1b2c3d4e5f678901234
 *     responses:
 *       200:
 *         description: Team details fetched successfully
 *       404:
 *         description: Team not found
 */

// GET TEAM BY ID
router.get("/:id", protect, getTeamById);

/**
 * @swagger
 * /api/teams/join/{id}:
 *   put:
 *     summary: Join a team
 *     description: Allows a user to send a request to join a team.
 *     tags:
 *       - Teams
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Team ID
 *         schema:
 *           type: string
 *           example: 64f8a1b2c3d4e5f678901234
 *     responses:
 *       200:
 *         description: Join request sent successfully
 *       400:
 *         description: Already joined or request exists
 *       401:
 *         description: Unauthorized
 */

// JOIN TEAM
router.put("/join/:id", protect, joinTeam);

/**
 * @swagger
 * /api/teams/{id}:
 *   put:
 *     summary: Update team details
 *     description: Updates team information by team owner.
 *     tags:
 *       - Teams
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Team ID
 *         schema:
 *           type: string
 *           example: 64f8a1b2c3d4e5f678901234
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             teamName: "Updated MERN Team"
 *             description: "Updated team description"
 *             maxMembers: 6
 *           schema:
 *             type: object
 *             properties:
 *               teamName:
 *                 type: string
 *               description:
 *                 type: string
 *               maxMembers:
 *                 type: number
 *     responses:
 *       200:
 *         description: Team updated successfully
 *       401:
 *         description: Unauthorized
 */

// UPDATE TEAM
router.put("/:id", protect, updateTeam);

/**
 * @swagger
 * /api/teams/{id}:
 *   delete:
 *     summary: Delete team
 *     description: Deletes a team by team owner.
 *     tags:
 *       - Teams
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Team ID
 *         schema:
 *           type: string
 *           example: 64f8a1b2c3d4e5f678901234
 *     responses:
 *       200:
 *         description: Team deleted successfully
 *       404:
 *         description: Team not found
 *       401:
 *         description: Unauthorized
 */

// DELETE TEAM
router.delete("/:id", protect, deleteTeam);

// LEAVE TEAM
router.put("/leave/:id", protect, leaveTeam);

// ADD MEMBER
router.put("/add-member/:id", protect, addMember);

// REMOVE MEMBER
router.put("/remove-member/:id", protect, removeMember);

module.exports = router;

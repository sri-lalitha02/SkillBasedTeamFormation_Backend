const express = require("express");
const router = express.Router();

const {
  createJoinRequest,
  getJoinRequests,
  updateJoinRequestStatus,
} = require("../controllers/joinRequestController");

/**
 * @swagger
 * /api/joinrequests:
 *   post:
 *     summary: Create a join request
 *     description: User sends a request to join a team.
 *     tags:
 *       - Join Requests
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             teamId: "64f8a1b2c3d4e5f678901234"
 *             message: "I would like to join this team because I have React and Node.js skills."
 *           schema:
 *             type: object
 *             properties:
 *               teamId:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Join request created successfully
 *       400:
 *         description: Request already exists
 */

// Create Join Request
router.post("/", createJoinRequest);

/**
 * @swagger
 * /api/joinrequests:
 *   get:
 *     summary: Get all join requests
 *     description: Retrieves all team join requests.
 *     tags:
 *       - Join Requests
 *     responses:
 *       200:
 *         description: Join requests fetched successfully
 *         content:
 *           application/json:
 *             example:
 *               - _id: "64f8a1b2c3d4e5f678901234"
 *                 teamId: "64f8a1b2c3d4e5f678901234"
 *                 userId: "64f8a1b2c3d4e5f678901235"
 *                 status: "pending"
 *                 message: "I want to join this project team"
 */

// Get All Join Requests
router.get("/", getJoinRequests);

/**
 * @swagger
 * /api/joinrequests/{id}:
 *   patch:
 *     summary: Update join request status
 *     description: Accept or reject a team join request.
 *     tags:
 *       - Join Requests
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Join request ID
 *         schema:
 *           type: string
 *           example: 64f8a1b2c3d4e5f678901234
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             status: "accepted"
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum:
 *                   - pending
 *                   - accepted
 *                   - rejected
 *     responses:
 *       200:
 *         description: Join request status updated successfully
 *       404:
 *         description: Join request not found
 */

// Accept / Reject Join Request
router.patch("/:id", updateJoinRequestStatus);

module.exports = router;
const express = require("express");

const router = express.Router();

const protect =
  require("../middleware/authMiddleware");

const {
  getMe,
  getProfile,
  updateProfile,
  changePassword
} = require("../controllers/userController");

/**
 * @swagger
 * /api/users/me:
 *   get:
 *     summary: Get logged-in user profile
 *     description: Returns the profile details of the currently authenticated user.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile fetched successfully
 *         content:
 *           application/json:
 *             example:
 *               _id: "64f8a1b2c3d4e5f678901234"
 *               firstName: "Lalitha"
 *               lastName: "Yelisetti"
 *               email: "lalitha@gmail.com"
 *               mobile: "9876543210"
 *               role: "Student"
 *               experience: "Beginner"
 *               skills:
 *                 - React
 *                 - Node.js
 *                 - MongoDB
 *       401:
 *         description: Unauthorized - Token missing or invalid
 */

// My Profile
router.get(
  "/me",
  protect,
  getMe
);

/**
 * @swagger
 * /api/users/profile/{id}:
 *   get:
 *     summary: Get public user profile
 *     description: Fetch another user's public profile using user ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User MongoDB ID
 *         schema:
 *           type: string
 *           example: 64f8a1b2c3d4e5f678901234
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               firstName: "Lalitha"
 *               lastName: "Yelisetti"
 *               role: "Student"
 *               skills:
 *                 - React
 *                 - Node.js
 *       404:
 *         description: User not found
 */

// Public Profile
router.get(
  "/profile/:id",
  getProfile
);

/**
 * @swagger
 * /api/users/update-profile:
 *   put:
 *     summary: Update logged-in user profile
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: Lalitha
 *               lastName:
 *                 type: string
 *                 example: Yelisetti
 *               mobile:
 *                 type: string
 *                 example: "9876543210"
 *               experience:
 *                 type: string
 *                 example: Beginner
 *               role:
 *                 type: string
 *                 example: Student
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - React
 *                   - Node.js
 *                   - MongoDB
 *               bio:
 *                 type: string
 *                 example: Full Stack Developer interested in team projects
 *               github:
 *                 type: string
 *                 example: https://github.com/lalitha
 *               linkedin:
 *                 type: string
 *                 example: https://linkedin.com/in/lalitha
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *       401:
 *         description: Unauthorized
 */

// Update Profile
router.put(
  "/update-profile",
  protect,
  updateProfile
);

/**
 * @swagger
 * /api/users/change-password:
 *   put:
 *     summary: Change password
 *     description: Allows authenticated users to change their account password.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             currentPassword: "OldPassword123"
 *             newPassword: "NewPassword123"
 *           schema:
 *             type: object
 *             properties:
 *               currentPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       400:
 *         description: Current password incorrect
 *       401:
 *         description: Unauthorized
 */

// Change Password
router.put(
  "/change-password",
  protect,
  changePassword
);

module.exports = router;

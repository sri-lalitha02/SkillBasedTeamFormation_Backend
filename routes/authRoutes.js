const express = require("express");

const router = express.Router();

const { body } =
  require("express-validator");

const protect =
  require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  logoutUser,
  sendOtp,
  verifyOtp,
  resetPassword
} = require("../controllers/authController");

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *               - mobile
 *               - experience
 *               - role
 *               - skills
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: Lalitha
 *               lastName:
 *                 type: string
 *                 example: Yelisetti
 *               email:
 *                 type: string
 *                 example: lalitha@gmail.com
 *               password:
 *                 type: string
 *                 example: Password123
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
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation error
 */

// Register
router.post(
  "/register",
  [
    body("firstName")
      .notEmpty()
      .withMessage("First name is required"),

    body("lastName")
      .notEmpty()
      .withMessage("last name is required"),

    body("email")
      .isEmail().normalizeEmail()
      .withMessage("Invalid email"),

    body("password")
      .isLength({ min: 6 })
      .withMessage(
        "Password must be at least 6 characters"
      ),

    body("mobile")
      .notEmpty()
      .withMessage("Mobile is required")
      .isLength({ min: 10, max: 10 })
      .withMessage("Mobile number must be 10 digits")
      .isNumeric()
      .withMessage("Mobile must contain only numbers"),

    body("experience")
      .notEmpty()
      .withMessage("Experience is required"),

    body("role")
      .notEmpty()
      .withMessage("Role is required"),

    body("skills")
      .notEmpty()
      .withMessage("Skills are required")
  ],
  registerUser
);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login User
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: lalitha@gmail.com
 *               password:
 *                 type: string
 *                 example: Password123
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid email or password
 */

// Login
router.post(
  "/login",
  [
    body("email")
      .isEmail().normalizeEmail()
      .withMessage("Invalid email"),

    body("password")
      .notEmpty()
      .withMessage("Password required")
  ],
  loginUser
);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Logout User
 *     tags:
 *       - Authentication
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User logged out successfully
 *       401:
 *         description: Unauthorized
 */

// Logout
router.post(
  "/logout",
  protect,
  logoutUser
);

/**
 * @swagger
 * /api/auth/send-otp:
 *   post:
 *     summary: Send OTP to email
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: lalitha@gmail.com
 *     responses:
 *       200:
 *         description: OTP sent successfully
 *       400:
 *         description: Invalid email
 */

// OTP
router.post(
  "/send-otp",
  [
    body("email")
      .isEmail().normalizeEmail()
      .withMessage("Valid email required")
  ],
  sendOtp
);

/**
 * @swagger
 * /api/auth/verify-otp:
 *   post:
 *     summary: Verify OTP
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: lalitha@gmail.com
 *               otp:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *       400:
 *         description: Invalid OTP
 */

// verify otp
router.post(
  "/verify-otp",
  [
    body("email")
      .isEmail().normalizeEmail()
      .withMessage("Valid email required"),

    body("otp")
      .isLength({ min: 6, max: 6 })
      .withMessage("OTP must be 6 digits")
  ],
  verifyOtp
);

/**
 * @swagger
 * /api/auth/reset-password:
 *   post:
 *     summary: Reset user password
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: lalitha@gmail.com
 *               newPassword:
 *                 type: string
 *                 example: NewPassword123
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       400:
 *         description: Reset password failed
 */

// Reset Password
router.post(
  "/reset-password",
  [
    body("email")
      .isEmail().normalizeEmail()
      .withMessage("Valid email required"),
    body("newPassword")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters")
      .not()
      .contains("password")

  ],
  resetPassword
);

module.exports = router;

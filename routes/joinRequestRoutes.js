const express = require("express");
const router = express.Router();

const {
  createJoinRequest,
  getJoinRequests,
  updateJoinRequestStatus,
} = require("../controllers/joinRequestController");

// Create Join Request
router.post("/", createJoinRequest);

// Get All Join Requests
router.get("/", getJoinRequests);

// Accept / Reject Join Request
router.patch("/:id", updateJoinRequestStatus);

module.exports = router;
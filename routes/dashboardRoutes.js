const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");

const { checkRole } = require("../middleware/authMiddleware");

// Analyst + Admin can access dashboard
router.get("/summary", checkRole(["admin", "analyst"]), dashboardController.getSummary);
router.get("/categories", checkRole(["admin", "analyst"]), dashboardController.getCategorySummary);

module.exports = router;
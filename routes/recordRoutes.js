const express = require("express");
const router = express.Router();
const recordController = require("../controllers/recordController");

const { checkRole } = require("../middleware/authMiddleware");

// Admin can do everything
router.post("/", checkRole(["admin"]), recordController.createRecord);
router.put("/:id", checkRole(["admin"]), recordController.updateRecord);
router.delete("/:id", checkRole(["admin"]), recordController.deleteRecord);

// Analyst + Admin can view
router.get("/", checkRole(["admin", "analyst"]), recordController.getRecords);

module.exports = router;
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

const { checkRole } = require("../middleware/authMiddleware");

// Only admin can manage users
router.post("/", checkRole(["admin"]), userController.createUser);
router.delete("/:id", checkRole(["admin"]), userController.deleteUser);
router.put("/:id", checkRole(["admin"]), userController.updateUser);

// Everyone can view
router.get("/", checkRole(["admin", "analyst"]), userController.getUsers);
router.get("/:id", checkRole(["admin", "analyst"]), userController.getUser);

module.exports = router;
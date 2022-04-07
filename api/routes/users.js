const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/usersController");

router.put("/profile", UsersController.editUserProfile);
router.get("/list", UsersController.getAllUsers);
router.delete("/delete", UsersController.deleteUser);
router.put("/setadmin", UsersController.setAdmin);

module.exports = router;
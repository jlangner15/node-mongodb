const express = require("express");
const UserController = require("../controllers/userController");

const router = express.Router();

router.get("/", UserController.getAllUsers);

router.get("/:UserId", UserController.getOneUser);

router.post("/", UserController.createNewUser);

router.patch("/:UserId", UserController.updateOneUser);

router.delete("/:UserId", UserController.deleteOneUser);

module.exports = router;
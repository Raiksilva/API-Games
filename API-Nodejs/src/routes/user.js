const express = require("express");
const router = express.Router();
const UserController = require("../controller/postUser");




router.post('/auth', UserController.postUser);

module.exports = router;
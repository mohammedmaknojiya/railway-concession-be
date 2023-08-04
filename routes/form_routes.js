const express = require("express");
const router = express.Router();

const formCtrl = require("../controllers/form_ctrl");

//add user details
router.post("/", formCtrl.addUser);

//get user list
router.get("/list", formCtrl.getUserList);

module.exports = router;

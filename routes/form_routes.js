const express = require("express");
const router = express.Router();

const formCtrl = require("../controllers/form_ctrl");

//add user details
router.post("/", formCtrl.addUser);

//get user list
router.get("/applicationsList", formCtrl.getUserList);

//get user details
router.get("/:emailID", formCtrl.getUserDetails);

//approve user application
router.post("/approve", formCtrl.approveUserReq);

//add remarks
router.post("/remarks", formCtrl.addRemarks);

module.exports = router;

const express = require('express');
const router = express.Router();
const {signup,sendotp,login,changePassword} = require("../controllers/Auth")
const { resetPassword,resetPasswordToken} = require("../controllers/ResetPassword")
const {auth}= require("../middleware/auth")

router.post("/signup",signup);
router.post("/login",login);
router.post("/changepassword",auth,changePassword)
router.post("/reset-password-token", resetPasswordToken)
router.post("/reset-password", resetPassword)
module.exports=router;
const express = require("express");
const { signupController, verifyOtpController, loginController, alluserController, logoutController, verifyUserController } = require("../../../controller/authController");
const { TokenCheckMiddelware, adminCheck } = require("../../../utils/authMiddleware");
const router = express.Router()

// http://localhost:4000/api/v1/auth/signup
router.post("/signup",signupController)
// http://localhost:4000/api/v1/auth/verify-otp
router.post("/verify-otp", verifyOtpController)
// http://localhost:4000/api/v1/auth/login
router.post("/login", loginController) 
// http://localhost:4000/api/v1/auth/allusers
router.get("/allusers",TokenCheckMiddelware, adminCheck, alluserController) 
// router.get("/allusers", alluserController) 
// http://localhost:4000/api/v1/auth/logout
router.post("/logout", logoutController) 
// http://localhost:4000/api/v1/auth/verifyuser
router.get("/verifyuser", verifyUserController)

module.exports = router;
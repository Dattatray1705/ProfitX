const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
    signup,
    login,
    logout,
    getMe,
    updateProfile,
    deleteAccount,
    forgotPassword,
    verifyOtpAndResetPassword,
     updateTheme,
} = require("../controllers/controller");

router.post("/signup", signup);
router.post("/signin", login);
router.post("/logout", logout);
router.post(
  "/forgot-password",
  forgotPassword
);
router.post(
  "/verify-otp",
  verifyOtpAndResetPassword
);
router.get("/me",authMiddleware,getMe);
router.put("/update-profile",authMiddleware,updateProfile);
router.delete("/delete-account",authMiddleware,deleteAccount);
router.post(
  "/theme",
  authMiddleware,
  updateTheme
);
module.exports = router;
import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
} from "../controllers/authController.js";
import auth from "../middleware/authMiddleware.js";
import { registerValidator, loginValidator } from "../validators/authValidator.js";

const router = express.Router();

router.post("/register", registerValidator, registerUser);
router.post("/login", loginValidator, loginUser);
router.get("/profile", auth, getProfile);

export default router;
import express from "express";
import { register, login } from "../controllers/authController.js";
import { authValidators, validate } from "../utils/validator.js";

const router = express.Router();

router.post("/register", validate(authValidators.registerValidator), register);
router.post("/login", validate(authValidators.loginValidator), login);

export default router;

import express from "express";
import {
  signup,
  login,
  googleAuthentication,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/googleAuth", googleAuthentication);

export default router;

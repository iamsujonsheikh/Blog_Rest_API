import express from "express";
import { getAllUser } from "../controllers/userController.js";
import tokenVerify from "../middlewares/tokenVerify.js";

// inisiate router
const router = express.Router();

router.route("/").get(tokenVerify, getAllUser);

export default router;
import express from "express";
import tokenVerify from "../middlewares/tokenVerify.js";
import { createCategory, getCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.use(tokenVerify);

router.route("/").post(createCategory).get(getCategory);

export default router;
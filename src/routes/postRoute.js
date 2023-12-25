import express from "express";
import tokenVerify from "../middlewares/tokenVerify.js"
import { createPost, deletePost, getAllpost, getPost, updatePost } from "../controllers/postController.js";

const router = express.Router();

router.use(tokenVerify);

router.route("/").post(createPost).get(getAllpost);
router.route("/:id").put(updatePost).delete(deletePost).get(getPost);

export default router;
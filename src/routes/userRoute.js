import express from "express";
import { deleteUser, getAllUser, updateUser } from "../controllers/userController.js";
import tokenVerify from "../middlewares/tokenVerify.js";

// inisiate router
const router = express.Router();

router.use(tokenVerify);

router.route("/").get(getAllUser);
router.route("/:id").put(updateUser).delete(deleteUser);

export default router;
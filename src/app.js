import express from "express";
import cors from "cors";
import colors from "colors";
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
// import errorHandler from "./middlewares/errorHandler.js"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();


// initialize app
const app = express();


// default application middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// externel application middlewares
app.use(cors());
app.use(cookieParser());

// router
app.use("/api/v1/users", userRouter);
app.use("/api/v1/user/auth", authRouter);

// error handler middleware
// app.use(errorHandler);

// routing
app.get('/', (req, res) => {
    res.status(200).send('Wellcome to my server.')
});

export default app;
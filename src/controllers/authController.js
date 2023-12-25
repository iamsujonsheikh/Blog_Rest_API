import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";


// create a user account
export const signUp = async (req, res) => {
    try {
        // get values
        const { name, username, email, password, profile } = req.body;

        // check all fields
        if (!(name && username && email && password)) {
            return res.status(400).send("All fields are required.")
        };

        // exist username
        const existUsername = await User.findOne({ username });

        // exist email
        const existEmail = await User.findOne({ email });

        // exist username
        if (existUsername) {
            return res.status(400).send("user name already exist.")
        };

        // exist email
        if (existEmail) {
            return res.status(400).send("user email already exist.")
        };

        // password hash
        const hashPassword = await bcrypt.hash(password, 10);
        // create user
        const user = await User.create({
            name,
            username,
            email,
            password: hashPassword,
            profile
        });

        // send user data
        res.status(201).json({
            message: "User created successful",
            user
        });

    } catch (error) {
        res.status(400).json({
            message: "User not created !",
            error: error.message
        })
    }
};


// login existing user
export const login = async (req, res) => {
    try {
        // get values
        const { username, password } = req.body;

        // check all fields
        if (!(username && password)) {
            return res.status(400).send("All fields are required.")
        };

        // exist user
        const user = await User.findOne({ username });


        if (!user) {
            return res.status(400).send("This username does not exist!")
        };

        // match password
        const correctPass = await bcrypt.compare(password, user.password);


        if (!correctPass) {
            return res.status(400).send("Password doesn't match!")
        };

        // defined access token
        const accessToken = process.env.ACCESS_TOKEN_SECRET;
        const accessTokenExpire = process.env.ACCESS_TOKEN_EXPIRE_IN;


        // create access token
        const token = Jwt.sign({ _id: user._id }, accessToken, { expiresIn: accessTokenExpire });


        res.status(200).json({
            message: "Hey, you are successfully logged in.",
            token
        });

    } catch (error) {
        res.status(400).json({
            message: "User not found!",
            error: error.message
        })
    }
};


// updateUser
export const updateUser = async (res, req) => {
    try {

    } catch (error) {
        res.status(400).send("");
    }
};


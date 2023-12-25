import User from "../models/userModel.js";
import bcrypt from "bcrypt";


export const getAllUser = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).send(user);

    } catch (error) {
        res.status(401).json({
            message: "before check user permission",
            error: error.message
        })
    }
};

// update user
export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, username, email, password } = req.body;
        const user = await User.findById(id);

        if (!user) {
            return res.status(400).send("Wrong user")
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const updateUser = await User.findByIdAndUpdate(id, { name, username, email, password: hashPassword }, { new: true });

        res.status(200).json({
            message: "user update successfull",
            updateUser
        });

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

// delete user
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);

        if (!user) {
            return res.status(400).send("Wrong user")
        };

        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).json({
            message: "user delete successful",
            deletedUser
        });

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
};
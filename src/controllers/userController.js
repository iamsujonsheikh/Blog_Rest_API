import User from "../models/userModel.js";


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
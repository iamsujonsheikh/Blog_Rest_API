import Jwt from "jsonwebtoken";
import User from "../models/userModel.js";



const tokenVerify = async (req, res, next) => {
    try {
        // get token
        const token = req.headers.authorization;

        // check token
        if (!token) {
            return res.status(401).send("Unathorized user");
        };

        // split token
        const splitToken = token.split(" ")[1];

        // defined access token
        const accessToken = process.env.ACCESS_TOKEN_SECRET;
        // const accessTokenExpire = process.env.ACCESS_TOKEN_EXPIRE_IN;

        // token verify
        Jwt.verify(splitToken, accessToken, async (error, decode) => {
            if (error) {
                return res.status(401).send("Invalid token");
            };

            const user = await User.findOne({ username: decode.username });
            req.user = user
        });

        next();

    } catch (error) {
        res.status(401).json({
            message: "Authentication failed.",
            error: error.message
        });
    }
};

export default tokenVerify;
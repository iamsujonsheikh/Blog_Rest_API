import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    body: {
        type: String,
        trim: true,
        default: "admin"
    },
    username: {
        type: String,
        required: true,

    },
    category: {
        type: Array,
        required: false
    },
    photo: {
        type: String,
    }
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;
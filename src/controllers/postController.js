import Post from "../models/postModel.js";

export const createPost = async (req, res) => {
    try {
        const { title, username, body, category, photo } = req.body;
        const post = await Post.create({ title, username, body, category, photo });

        res.status(201).json({
            message: "post create successful",
            post
        });
    } catch (error) {
        res.status(401).send(error.message);
    }
};

export const getAllpost = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).send(posts)
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// update post
export const updatePost = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, username, body, category, photo } = req.body;
        const post = await Post.findById(id);

        if (!post) {
            return res.status(400).send("post not found")
        }

        const updatePost = await Post.findByIdAndUpdate(id, { title, username, body, category, photo }, { new: true })

        res.status(200).json({
            message: "post update succesfull",
            updatePost,
        });
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
};


// delete post
export const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findById(id);

        if (!post) {
            return res.status(400).send("post not found")
        }

        const deletePost = await Post.findByIdAndDelete(id)

        res.status(200).json({
            message: "post delete succesfull",
            deletePost,
        });
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
};


// get single post
export const getPost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findById(id);

        res.status(200).json({
            message: "Aweome you get a post",
            post
        });
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
};
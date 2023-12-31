import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
}, { timestamps: true });

const Category = mongoose.model("Category", categorySchema);

export default Category;
import Category from "../models/categoryModel.js";

export const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await Category.create({ name });

        res.status(201).json({
            message: "category create successful",
            category
        });
    } catch (error) {
        res.status(401).send(error.message);
    }
};

// get category
export const getCategory = async (req, res) => {
    try {
        const category = await Category.find();
        res.status(200).json({
            message: "awesome",
            category
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
};
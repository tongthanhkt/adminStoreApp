const Products = require("../models/Products");
const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const product = await Products.create(req.body);
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// const getProduct = async (req, res) => {
//   try {
//     const { id: taskId } = req.params;
//     const task = await Task.findOne({ _id: taskId });
//     if (!task) {
//       return res.status(404).json({ msg: "No task match id" });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
// const deleteProduct = async (req, res) => {
//   try {
//     const { id: taskId } = req.params;
//     const task = await Task.findByIdAndDelete({ _id: taskId });
//     if (!task) {
//       res.status(404).json({ msg: `No id match ${taskId}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
// const updateProduct = async (req, res) => {
//   try {
//     const { id: taskId } = req.params;
//     const task = await Task.findOneAndUpdate({ _id: taskId }, req.body);
//     if (!task) {
//       res.status(400).json({ msg: `No id match with TaskId${taskId}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
module.exports = { createProduct, getAllProducts };

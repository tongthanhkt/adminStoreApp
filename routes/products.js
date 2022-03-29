const express = require("express");
const router = express.Router();
const { getAllProducts, createProduct } = require("../controllers/products");
router.route("/").get(getAllProducts).post(createProduct);
//router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);
module.exports = router;

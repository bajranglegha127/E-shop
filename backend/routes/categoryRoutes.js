const express = require("express");
const { body } = require("express-validator");
const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

const categoryValidation = [
  body("name").trim().notEmpty().withMessage("Name is required"),
];

router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.post("/", protect, admin, categoryValidation, createCategory);
router.put("/:id", protect, admin, categoryValidation, updateCategory);
router.delete("/:id", protect, admin, deleteCategory);

module.exports = router;

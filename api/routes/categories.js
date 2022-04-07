const express = require("express");
const router = express.Router();

const CategoriesController  = require("../controllers/categoriesController");

router.get("/", CategoriesController.getAll);
router.post("/", CategoriesController.create);
router.delete("/:id", CategoriesController.delete);
router.put("/", CategoriesController.edit);

module.exports = router;

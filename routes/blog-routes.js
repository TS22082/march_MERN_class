const router = require("express").Router();
const {
  test,
  getAll,
  postBlog,
  findOne,
  deleteOne,
  updateOne,
} = require("../controllers/BlogController");

router.get("/", getAll);
router.post("/", postBlog);

router.get("/:id", findOne);
router.delete("/:id", deleteOne);
router.patch("/:id", updateOne);

module.exports = router;

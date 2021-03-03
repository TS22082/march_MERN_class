const router = require("express").Router();
const {
  test,
  getAll,
  postBlog,
  findOne,
} = require("../controllers/BlogController");

router.get("/", getAll);
router.post("/", postBlog);

router.get("/:id", findOne);

module.exports = router;

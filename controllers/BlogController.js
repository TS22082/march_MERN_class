const { Blog } = require("../models");

module.exports = {
  test: (req, res) => {
    res.send("for sure success");
  },

  getAll: async (req, res) => {
    try {
      const allBlogs = await Blog.find();
      res.json(allBlogs);
    } catch (err) {
      res.send(err);
    }
  },

  findOne: async (req, res) => {
    try {
      const foundBlogPost = await Blog.findById(req.params.id);
      res.send(foundBlogPost);
    } catch (err) {
      res.send(err);
    }
  },

  postBlog: async (req, res) => {
    try {
      const newBlogPost = new Blog({
        title: req.body.title,
        text: req.body.text,
      });
      res.json(await newBlogPost.save());
    } catch (err) {
      res.send(err);
    }
  },
};

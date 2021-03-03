const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: "String",
    trim: true,
    required: "Title is required",
  },

  text: {
    type: "String",
    trim: true,
    required: "Text is required",
  },
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;

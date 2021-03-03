import React from "react";

const HomePage = (props) => {
  return (
    <div className="container">
      {props.blogs.map((blog) => (
        <div class="card mt-2">
          <div class="card-body">
            <h5 class="card-title">{blog.title}</h5>
            <p class="card-text">{blog.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

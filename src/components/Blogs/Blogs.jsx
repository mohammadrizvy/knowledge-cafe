import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('blogdata.json')
    .then(res => res.json())
    .then ( data => setBlogs(data))
  },[])
  return (
    <div className="container mx-auto">
      <div className="blogs-container container w-[65%] mt-6">
        {
          blogs.map(blog => <Blog
          key={blog.id}
          blog ={blog}
          ></Blog>)
        }
      </div>
      <div className="blog-bookmarks">
        
      </div>
    </div>
  );
};

export default Blogs;

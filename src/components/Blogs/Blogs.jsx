import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('blogdata.json')
    .then(res => res.json())
    .then ( data => setBlogs(data))
  },[])
  return (
    <div className="container mx-auto">
      <div className="blogs-container container w-[60%] bg-red-800">
        <h2>Blogs{blogs.length}</h2>
      </div>
      <div className="blog-bookmarks">
        
      </div>
    </div>
  );
};

export default Blogs;

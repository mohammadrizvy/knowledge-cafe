import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Time from "../TimeSpent/Time";


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [minute, setMinute] = useState([])
  useEffect(() => {
    fetch('blogdata.json')
    .then(res => res.json())
    .then ( data => setBlogs(data))
  },[]);
    const handleAddTime = (blog) => {
      const newMinute = [...minute,blog];
      setMinute(newMinute);
    };
  return (
    <div className="container mx-auto flex justify-between">
      <div className="blogs-container container w-[65%] mt-6">
        {blogs.map((blog) => (
          <Blog 
          key={blog.id} 
          blog={blog} 
          handleAddTime={handleAddTime}
          ></Blog>
        ))}
      </div>
      <div className="spenttime-container ms-auto w-[25%] mt-6">
        <Time minute={minute}></Time>
      </div>
      <div className="bookmark-container">

      </div>
    </div>
  );
};

export default Blogs;

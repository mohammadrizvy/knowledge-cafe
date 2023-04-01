import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import SpentTime from "../SpnetTime/SpentTime";


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [time, setTime] = useState([])
  useEffect(() => {
    fetch('blogdata.json')
    .then(res => res.json())
    .then ( data => setBlogs(data))
  },[]);

 const totalTimeSpent = (blog) => {
  const totalTime = [...time,blog]
  setTime(totalTime);
 };

  return (
    <div className="container mx-auto flex justify-between">
      <div className="blogs-container container w-[65%] mt-6">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            totalTimeSpent={totalTimeSpent}
            ></Blog>
        ))}
      </div>
      <div className="time-spent w-[25%] mt-6">
       <SpentTime></SpentTime>
      </div>
    </div>
  );
};

export default Blogs;

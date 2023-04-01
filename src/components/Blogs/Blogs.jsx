import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Time from "../TimeSpent/Time";
import Bookmarks from "../Bookmarks/Bookmarks";
import Questions from "../Questions/Questions";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [minute, setMinute] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  useEffect(() => {
    fetch("blogdata.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  const handleAddTime = (blog) => {
    const newMinute = [...minute, blog];
    setMinute(newMinute);
  };
  const handleAddBookmark = (blog) => {
    const totalBookmark = [...bookmark, blog];
    setBookmark(totalBookmark);
  };
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between ">
      <div className="blogs-container container w-[65%] mt-6 ">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddTime={handleAddTime}
            handleAddBookmark={handleAddBookmark}></Blog>
        ))}
      </div>
      <div className="spenttime-container ms-auto w-[25%] mt-6 sticky">
        <Time minute={minute}></Time>
        <div className="mx-auto bg-base-200 mt-4 rounded-md p-5">
          <Bookmarks bookmark={bookmark}></Bookmarks>
        </div>
        <div className="mt-8 bg-base-300 p-5 rounded-md">
          <Questions></Questions>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

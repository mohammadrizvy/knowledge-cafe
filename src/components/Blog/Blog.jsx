import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBookmark } from "@fortawesome/free-solid-svg-icons";
const Blog = (props) => {
  const {
    image,
    blog_title,
    author_name,
    author_image,
    reading_time,
    published_date,
  } = props.blog;
 const handleAddTime = props.handleAddTime;
 const handleAddBookmark = props.handleAddBookmark;
  return (
    <div className="mb-8 border-b-2 pb-6">
      <img className="w-full rounded-md shadow-xl" src={image} alt="" />
      <div className="flex justify-between items-center ">
        <div className="flex items-center">
          <img className="rounded-full w-16 mt-6" src={author_image} alt="" />
          <div className="mt-7 ms-5">
            <h1 className="font-bold text-lg mb-1">{author_name}</h1>
            <h1 className="font-semibold text-sm text-zinc-500">
              {published_date}
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <p className="font-semibold text-sm text-zinc-500 me-2">
            {reading_time} min read
          </p>
          <a onClick={() => handleAddBookmark(props.blog)} className="text-xl">
            <FontAwesomeIcon icon={faBookmark} />
          </a>
        </div>
      </div>
      <h1 className="text-3xl font-bold mt-2">{blog_title}</h1>
      <div className="flex mt-2 ">
        <p className="font-semibold text-lg text-zinc-500">#beginners</p>
        <p className="font-semibold text-lg ms-4 mb-2 text-zinc-500">
          #programming
        </p>
      </div>
      <button
        onClick={() => handleAddTime(props.blog)}
        className="link link-primary font-semibold text-lg">
        Mark as read
      </button>
    </div>
  );
};
export default Blog;

import React from "react";

const Bookmarks = ({ bookmark }) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-center"> Bookmarked Blogs : {bookmark.length}
      </h1>
    </div>
  );
};
export default Bookmarks;

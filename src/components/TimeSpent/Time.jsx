import React from "react";

const Time = ({minute}) => {

    let total = 0 ;
    for (const blog of minute){
        total = total + blog.reading_time;
    }

  return (
    <div>
      <h2 className="font-bold text-xl p-6 bg-violet-300 border-2 rounded-md text-violet-600 border-violet-800 text-center">
        Spent time on read : {total} Min
      </h2>
    </div>
  );
};

export default Time;

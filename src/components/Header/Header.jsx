import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-10 border-b container mx-auto pt-3">
        <div className="flex-1">
          <h1 className="btn-ghost normal-case text-4xl font-bold ">
            Knowledge Cafe
          </h1>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <p className=" text-xl font-semibold">Login</p>
            </li>
            <li>
              <p className=" text-xl font-semibold">Help</p>
            </li>
            <li>
              <p className=" text-xl font-semibold">About</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
    
};

export default Header;

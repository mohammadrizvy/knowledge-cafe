import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 border-b container mx-auto pt-8 pb-6">
        <div className="flex-1">
          <h1 className="btn-ghost normal-case text-3xl font-bold ">
            Knowledge Cafe
          </h1>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#" className=" text-lg font-semibold">
                Login
              </a>
            </li>
            <li>
              <a href="#" className=" text-lg font-semibold">
                Help
              </a>
            </li>
            <li>
              <a href="#" className=" text-lg font-semibold">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
    
};

export default Header;

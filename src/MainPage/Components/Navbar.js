import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center h-20 bg-blue-900 text-white relative shadow-sm font-serif font-bold top-0">
        <Link to="/" className="pl-8">
          LOGO
        </Link>

        <div className="pr-8 md:block hidden">
          <Link to="/Covid" className="p-4">
            Covid Track
          </Link>

          <Link to="/Department" className="p-4">
            Department Login
          </Link>

          <Link to="/users/user" className="p-4">
            Vaccinator
          </Link>
        </div>
      </nav>
      <div className=" relative flex justify-between items-center h-10 bg-white text-blue-900 relative shadow-sm font-serif font-bold px-4 cursor-pointer md:hidden">
        <div className="pr-3 block ">
          <Link to="/table" className="p-4">
            Covid Track
          </Link>

          <Link to="/Department" className="p-4">
            Department Login
          </Link>
          <Link to="/users/user" className="p-4">
            Vaccinator
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

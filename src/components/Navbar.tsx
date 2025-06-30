
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center">
          <div className="text-lg font-bold text-ai-blue">
            AI במקצועות הבריאות
          </div>
        </div>
        <nav className="flex space-x-4 space-x-reverse">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-ai-lightBlue text-ai-blue"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            ברוכים הבאים
          </NavLink>
          <NavLink
            to="/videos"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-ai-lightBlue text-ai-blue"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            סרטונים
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "About", path: "/" },
    { name: "News", path: "/news" },
    { name: "Research", path: "/research" },
    { name: "People", path: "/people" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-nus-blue text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <div className="flex items-center mb-4 sm:mb-0 space-x-4">
          <img src="/spartan_logo.png" alt="" className="h-10 w-auto mt-2" />
          <h1 className="text-xl font-bold">
            <Link to="/" className="">
              Strategic Platform for Autonomous Resilient and Trusted Agents @ NUS
            </Link>
          </h1>
        </div>

        <ul className="flex flex-wrap justify-center gap-2 sm:gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-nus-orange text-white"
                    : "text-white hover:bg-blue-800 hover:text-nus-orange",
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
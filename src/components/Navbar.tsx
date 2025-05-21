
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = ["About", "News", "Research", "People", "Contact"];

  return (
    <nav className="w-full bg-nus-blue text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <h1 className="text-xl font-bold">
            Strategic Platform for Autonomous Resilient and Trusted Agents at
            NUS
          </h1>
        </div>

        <ul className="flex flex-wrap justify-center gap-2 sm:gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActiveTab(item.toLowerCase())}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  activeTab === item.toLowerCase()
                    ? "bg-nus-orange text-white"
                    : "text-white hover:bg-blue-800 hover:text-nus-orange",
                )}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

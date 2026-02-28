import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const navItems = [
    { name: "About", path: "/" },
  ];

  const fundedProjects = [
    { name: "AI for Science", url: "https://ai4pr.github.io/" },
    { name: "Automated Program Repair", url: "https://nus-apr.github.io/" },
    { name: "Trustworthy and Secure Software(TSS)", url: "https://nus-tss.github.io/" },
    { name: "Fuzz Testing", url: "https://nus-tss.github.io/fuzzing/" },
  ];

  return (
    <nav className="w-full bg-nus-blue text-white py-5 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 md:px-6">
        <div className="flex items-center mb-4 sm:mb-0 space-x-4">
          <img src="/spartan_logo.png" alt="" className="h-11 w-auto mt-2" />
          <h1 className="text-xl font-bold tracking-tight">
            <Link to="/" className="hover:text-nus-orange transition-colors">
              Strategic Platform for Autonomous Resilient and Trusted Agents @ NUS
            </Link>
          </h1>
        </div>

        <ul className="flex flex-wrap justify-center gap-1 sm:gap-2 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={cn(
                  "px-4 py-2.5 rounded-md text-sm font-semibold transition-all duration-200",
                  location.pathname === item.path
                    ? "bg-nus-orange text-white shadow-md"
                    : "text-white hover:bg-blue-800 hover:text-nus-orange",
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Projects Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-4 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 text-white hover:bg-blue-800 hover:text-nus-orange flex items-center gap-1.5"
            >
              Projects
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isDropdownOpen && "rotate-180")} />
            </button>

            {isDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-1 bg-white text-nus-blue rounded-lg shadow-xl py-2 min-w-[300px] z-50 border border-gray-200"
              >
                {fundedProjects.map((project) => (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-3 text-sm font-medium hover:bg-nus-orange hover:text-white transition-all duration-150 border-l-4 border-transparent hover:border-nus-orange"
                  >
                    {project.name}
                  </a>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link
              to="/research"
              className={cn(
                "px-4 py-2.5 rounded-md text-sm font-semibold transition-all duration-200",
                location.pathname === "/research"
                  ? "bg-nus-orange text-white shadow-md"
                  : "text-white hover:bg-blue-800 hover:text-nus-orange",
              )}
            >
              Upcoming Efforts
            </Link>
          </li>

          <li>
            <Link
              to="/news"
              className={cn(
                "px-4 py-2.5 rounded-md text-sm font-semibold transition-all duration-200",
                location.pathname === "/news"
                  ? "bg-nus-orange text-white shadow-md"
                  : "text-white hover:bg-blue-800 hover:text-nus-orange",
              )}
            >
              News & Events
            </Link>
          </li>

          <li>
            <Link
              to="/people"
              className={cn(
                "px-4 py-2.5 rounded-md text-sm font-semibold transition-all duration-200",
                location.pathname === "/people"
                  ? "bg-nus-orange text-white shadow-md"
                  : "text-white hover:bg-blue-800 hover:text-nus-orange",
              )}
            >
              People
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={cn(
                "px-4 py-2.5 rounded-md text-sm font-semibold transition-all duration-200",
                location.pathname === "/contact"
                  ? "bg-nus-orange text-white shadow-md"
                  : "text-white hover:bg-blue-800 hover:text-nus-orange",
              )}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

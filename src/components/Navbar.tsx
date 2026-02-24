import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const fundedProjects = [
    { name: "AI for Program Reasoning", url: "https://ai4pr.github.io/" },
    { name: "Automated Program Repair", url: "https://nus-apr.github.io/" },
    { name: "Trustworthy and Secure Software(TSS)", url: "https://nus-tss.github.io/" },
    { name: "Fuzz Testing", url: "https://nus-tss.github.io/fuzzing/" },
  ];

  return (
    <nav className="w-full bg-nus-blue sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/spartan_logo.png" alt="SPARTAN" className="h-10 w-auto brightness-0 invert" />
            <div className="text-white font-bold text-xl uppercase tracking-wider">SPARTAN</div>
          </Link>

          <ul className="flex items-center gap-1">
            <li>
              <Link
                to="/"
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  location.pathname === "/"
                    ? "text-nus-orange"
                    : "text-white/90 hover:text-white",
                )}
              >
                About
              </Link>
            </li>

            <li className="relative group">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors flex items-center gap-1"
              >
                Funded Projects
                <ChevronDown className="h-4 w-4" />
              </button>

              {isDropdownOpen && (
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute top-full right-0 mt-2 bg-white rounded shadow-xl py-2 min-w-[300px]"
                >
                  {fundedProjects.map((project) => (
                    <a
                      key={project.name}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-nus-orange transition-colors"
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
                  "px-4 py-2 text-sm font-medium transition-colors",
                  location.pathname === "/research"
                    ? "text-nus-orange"
                    : "text-white/90 hover:text-white",
                )}
              >
                Upcoming Efforts
              </Link>
            </li>

            <li>
              <Link
                to="/news"
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  location.pathname === "/news"
                    ? "text-nus-orange"
                    : "text-white/90 hover:text-white",
                )}
              >
                News & Events
              </Link>
            </li>

            <li>
              <Link
                to="/people"
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  location.pathname === "/people"
                    ? "text-nus-orange"
                    : "text-white/90 hover:text-white",
                )}
              >
                People
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  location.pathname === "/contact"
                    ? "text-nus-orange"
                    : "text-white/90 hover:text-white",
                )}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

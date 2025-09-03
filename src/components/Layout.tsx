import React from "react";
import Navbar from "@/components/Navbar";
import ImageCarousel from "@/components/ImageCarousel";

interface LayoutProps {
  children: React.ReactNode;
  showCarousel?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showCarousel = true }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {showCarousel && (
        <div className="w-full">
          <ImageCarousel />
        </div>
      )}

      <main className="flex-1 bg-gray-50">
        {children}
      </main>

      <footer className="bg-nus-blue text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} SPARTAN - National University of
            Singapore
          </p>
          <p className="text-sm mt-2">
            <a
              href="https://enterprise.nus.edu.sg"
              className="hover:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              National University of Singapore (NUS) Enterprise
            </a>{" "}
            i3 Building Level 2, 21 Heng Mui Keng Terrace, Singapore 119613, Republic of Singapore.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
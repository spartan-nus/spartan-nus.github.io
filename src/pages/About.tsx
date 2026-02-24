import React from "react";
import Navbar from "@/components/Navbar";
import ImageCarousel from "@/components/ImageCarousel";
import AboutSection from "@/components/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="w-full">
        <ImageCarousel />
      </div>

      <main className="flex-1">
        <AboutSection />
      </main>

      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-sm font-medium">
              © {new Date().getFullYear()} SPARTAN - National University of Singapore
            </p>
            <p className="text-sm text-gray-400">
              <a
                href="https://enterprise.nus.edu.sg"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                National University of Singapore (NUS) Enterprise
              </a>
              <span className="mx-2">·</span>
              i3 Building Level 2, 21 Heng Mui Keng Terrace, Singapore 119613
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;

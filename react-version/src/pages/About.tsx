import React from "react";
import Navbar from "@/components/Navbar";
import ImageCarousel from "@/components/ImageCarousel";
import AboutSection from "@/components/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="w-full">
        <ImageCarousel />
      </div>

      <main className="flex-1 bg-gradient-to-b from-gray-50 to-white">
        <AboutSection />
      </main>

      <footer className="bg-gradient-to-r from-nus-blue to-blue-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-lg font-semibold">
            © {new Date().getFullYear()} SPARTAN - National University of
            Singapore
          </p>
          <p className="text-sm mt-3 opacity-90">
            <a
              href="https://enterprise.nus.edu.sg"
              className="hover:text-nus-orange transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              National University of Singapore (NUS) Enterprise
            </a>{" "}
            <br className="sm:hidden" />
            i3 Building Level 2, 21 Heng Mui Keng Terrace, Singapore 119613, Republic of Singapore.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
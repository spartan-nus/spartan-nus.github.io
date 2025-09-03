
import React from "react";
import Navbar from "@/components/Navbar";

const YourNewPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* You can reuse the existing Navbar or create a simpler one */}
      <Navbar activeTab="" setActiveTab={() => {}} />

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">Your New Page Title</h1>
          {/* Your page content goes here */}
          <p>This is your new standalone page content.</p>
        </div>
      </main>

      {/* Reuse the same footer */}
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

export default YourNewPage;
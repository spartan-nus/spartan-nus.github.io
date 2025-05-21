
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ImageCarousel from "@/components/ImageCarousel";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import ResearchSection from "@/components/ResearchSection";
import PeopleSection from "@/components/PeopleSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "news":
        return <NewsSection />;
      case "research":
        return <ResearchSection />;
      case "people":
        return <PeopleSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="w-full">
        <ImageCarousel />
      </div>

      <main className="flex-1 bg-gray-50">{renderContent()}</main>

      <footer className="bg-nus-blue text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} SPARTAN - National University of
            Singapore
          </p>
          <p className="text-sm mt-2">
            School of Computing, 13 Computing Drive, Singapore 117417
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import React from "react";
import { Card } from "@/components/ui/card";

const AboutSection: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">About Our Lab</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            The NUS AI Lab is pioneering research at the intersection of
            artificial intelligence, software engineering, and automated
            analysis. Our mission is to build innovative AI-powered tools that
            enhance software quality, security, and developer productivity.
          </p>

          <p className="text-lg leading-relaxed">
            Led by renowned researchers from the National University of
            Singapore, our lab focuses on developing cutting-edge technologies
            like AutoCodeRover to tackle complex challenges in automated
            software testing, verification, and analysis.
          </p>

          <p className="text-lg leading-relaxed">
            We collaborate with industry partners and academic institutions
            worldwide to translate our research into practical applications that
            benefit both the software engineering community and society at
            large.
          </p>
        </div>

        <Card className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Lab research"
            className="w-full h-auto object-cover"
          />
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;

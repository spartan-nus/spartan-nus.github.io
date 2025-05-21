import React from "react";
import { Card } from "@/components/ui/card";

const AboutSection: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">About Our Lab</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            We are the{" "}
            <b>
              Strategic Platform for Autonomous Resilient and Trusted Agents
            </b>{" "}
            at the National University of Singapore (SPARTAN) led by Prof.{" "}
            <a href="https://abhikrc.com/">Abhik Roychoudhury</a>. In our
            research, we strive to enable <strong>secure</strong> and{" "}
            <strong>trustworthy software systems</strong>. In line with this, we
            focus on <strong>software testing and analysis</strong>, and in
            particular contribute to the areas of{" "}
            <a href="https://nus-apr.github.io">Automated Program Repair</a>,{" "}
            <a href="/fuzzing/">Fuzzing</a> and Symbolic Execution.
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

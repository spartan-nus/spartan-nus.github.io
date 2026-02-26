
import React from "react";
import { Card } from "@/components/ui/card";

const AboutSection: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 max-w-7xl">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-12 text-center bg-gradient-to-r from-nus-blue via-blue-600 to-nus-orange bg-clip-text text-transparent tracking-tight leading-tight">
        SPARTAN effort in Agentic AI
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-800">
            We are the{" "}
            <span className="font-semibold text-nus-orange">
              Strategic Platform for Autonomous Resilient and Trusted Agents
            </span>{" "}
            @ NUS (SPARTAN) led by Prof.{" "}
            <a href="https://abhikrc.com/" className="text-nus-blue hover:text-nus-orange underline font-medium transition-colors">
              Abhik Roychoudhury
            </a>
            . In our research, we strive to enable <span className="font-semibold text-nus-orange">secure</span> and{" "}
            <span className="font-semibold text-nus-orange">trustworthy systems</span> using powerful agentic AI approaches.
            In line with this, we focus on{" "}
            <span className="font-semibold text-nus-orange">program analysis</span> approaches, including our strengths in{" "}
            <a href="https://nus-apr.github.io" className="text-nus-blue hover:text-nus-orange underline font-medium transition-colors">
              Automated Program Repair
            </a>
            ,{" "}
            <a href="https://nus-tss.github.io/fuzzing/" className="text-nus-blue hover:text-nus-orange underline font-medium transition-colors">
              Fuzzing
            </a>{" "}
            and Symbolic Execution.
            These analysis capabilities are added with agents to create more effective agents such as{" "}
            <a href="https://autocoderover.dev" className="text-nus-blue hover:text-nus-orange underline font-semibold transition-colors">
              AutoCodeRover
            </a>
            . The research on trusted agents,
            with trust being engendered by analysis techniques, contributes to the themes of autocoding as well as AI Safety
            ({" "}
            <a href="https://www.youtube.com/watch?v=o8B6q8FNC70" className="text-nus-blue hover:text-nus-orange underline font-medium transition-colors">
              WATCH VIDEO
            </a>
            )
          </p>
          <div className="pt-6 flex justify-center md:justify-start">
            <img
              src="/spartan_logo_colored.jpg"
              alt="SPARTAN Logo"
              className="h-40 w-auto rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            />
          </div>
        </div>

        <Card className="overflow-hidden border-2 border-nus-orange shadow-2xl hover:shadow-nus-orange/30 hover:-translate-y-2 transition-all duration-300 rounded-xl">
          <img
            src="/center_photo_2025_may.jpeg"
            alt="Lab research"
            className="w-full h-auto object-cover"
          />
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;
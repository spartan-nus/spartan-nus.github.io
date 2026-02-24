
import React from "react";
import { Card } from "@/components/ui/card";

const AboutSection: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h2 className="text-4xl font-bold mb-10 text-center text-nus-blue tracking-tight">SPARTAN effort in Agentic AI</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <p className="text-base leading-relaxed text-gray-700">
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
          <div className="bg-nus-orange/10 border-l-4 border-nus-orange p-4 rounded-r">
            <p className="font-semibold text-nus-blue">
              <a href="https://spartan-nus.github.io/ai4code-roundtable" className="hover:text-nus-orange transition-colors">
                AI for Code Industry Roundtable
              </a>
              , 19 Jan 2026.
            </p>
          </div>
          <div className="pt-4">
            <img
              src="/spartan_logo_colored.jpg"
              alt="SPARTAN Logo"
              className="h-32 w-auto rounded-lg shadow-sm"
            />
          </div>
        </div>

        <Card className="overflow-hidden border-2 border-nus-orange shadow-lg hover:shadow-xl transition-shadow">
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
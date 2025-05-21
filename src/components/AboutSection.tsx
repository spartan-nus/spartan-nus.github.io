
import React from "react";
import { Card } from "@/components/ui/card";

const AboutSection: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">About Our SPARTAN effort on Agentic AI</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            We are the{" "}
            <b className="text-nus-orange">
              Strategic Platform for Autonomous Resilient and Trusted Agents
            </b>{" "}
            at the National University of Singapore (SPARTAN) led by Prof.{" "}
            <a href="https://abhikrc.com/" className="text-nus-blue hover:text-nus-orange underline">Abhik Roychoudhury</a>. In our
            research, we strive to enable <strong className="text-nus-orange">secure</strong> and{" "}
            <strong className="text-nus-orange">trustworthy systems</strong> using powerful agentic AI approaches. 
            In line with this, we focus on{" "}
            <strong className="text-nus-orange">program analysis</strong> approaches, and in
            particular contribute to the areas of{" "}
            <a href="https://nus-apr.github.io" className="text-nus-blue hover:text-nus-orange underline">Automated Program Repair</a>,{" "}
            <a href="https://nus-tss.github.io/fuzzing/" className="text-nus-blue hover:text-nus-orange underline">Fuzzing</a> and Symbolic Execution.
            These analysis capabilities are added with agents to create more effective agents such as{" "}  
            <a href="https://autocoderover.dev">AutoCodeRover</a>. The research on trusted agents, 
            with trust being engendered by analysis techniques, contributes to the theme of AI Safety 
            (<a href="https://www.youtube.com/watch?v=o8B6q8FNC70" className="text-nus-blue hover:text-nus-orange underline>WATCH VIDEO</a>)
          </p>

          
        </div>

        <Card className="overflow-hidden border-2 border-nus-orange">
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

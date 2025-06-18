

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const researchProjects = [
  {
    title: "AutoCodeRover, AI Agent for Software",
    description: "Being integrated in Production with SonarQube Static Analyzer",
    link: "https://autocoderover.dev",
  },
  {
    title: "AI for Open Source Security (OSS)",
    description: "Collaboration with Google OSS team",
    link: "/coderover-s.html",
  }, 
  { title: "Automatic Programming",
    description: "Position paper in TOSEM",
    link: "https://dl.acm.org/doi/pdf/10.1145/3708519",
  },
  { title: "Agentic Programming with Trust",
    description: "Opinion Piece",
    link: " https://arxiv.org/pdf/2502.13767",
  },
  {
    title: "Unified Software Engineering Agent (USEagent)",
    description: "An agent which can write, fix, patch code and conduct many SE tasks",
    link: "https://arxiv.org/pdf/2506.14683",
  },
   {
    title: "Proof Agent",
    description: "AI for Program Verification, in collaboration with Imperial College",
    link: "https://openreview.net/pdf?id=5t9HFssPla"
  },
  {
    title: "Agent Testing",
    description: "Coming soon",
    link: "#fuzzing",
  },
  
];

const ResearchSection: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Research Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {researchProjects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-nus-orange">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  className="inline-flex items-center text-nus-orange hover:text-nus-blue"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResearchSection;

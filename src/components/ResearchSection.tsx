
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const researchProjects = [
  {
    title: "AutoCodeRover",
    description: "An AI-powered tool for automated code analysis, vulnerability detection, and test generation. AutoCodeRover combines symbolic execution with machine learning to identify bugs that traditional static analyzers miss.",
    link: "#autocoderover",
  },
  {
    title: "Tier 3 Research Grant: AI for Software Security",
    description: "A comprehensive research initiative focused on developing next-generation AI techniques for identifying security vulnerabilities in complex software systems before they reach production environments.",
    link: "#tier3",
  },
  {
    title: "Advanced Fuzz Testing Framework",
    description: "Novel approaches to intelligent fuzzing that leverage program structure and semantic information to generate test inputs that achieve higher code coverage and detect more bugs than conventional fuzzers.",
    link: "#fuzzing",
  },
  {
    title: "Machine Learning for Program Analysis",
    description: "Research on how deep learning models can be trained to understand code semantics and predict potential issues in software, complementing traditional program analysis techniques.",
    link: "#ml-program-analysis",
  },
];

const ResearchSection: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Research Projects</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {researchProjects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{project.description}</p>
              <a 
                href={project.link} 
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResearchSection;

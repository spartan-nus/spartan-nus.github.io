import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const researchProjects = [
  {
    title: "AutoCodeRover",
    description: "PLACEHOLDER",
    link: "#autocoderover",
  },
  {
    title: "MoE Tier 3 Research Grant",
    description: "PLACEHOLDER",
    link: "#tier3",
  },
  {
    title: "Fuzz Testing Grant",
    description: "PLACEHOLDER",
    link: "#fuzzing",
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

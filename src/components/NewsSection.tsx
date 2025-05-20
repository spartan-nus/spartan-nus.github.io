
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const newsItems = [
  {
    date: "May 15, 2025",
    title: "AutoCodeRover Achieves Breakthrough in Automated Bug Detection",
    content: 
      "Our flagship project, AutoCodeRover, has demonstrated unprecedented accuracy in detecting complex software vulnerabilities, outperforming existing tools by a significant margin in recent benchmarks.",
  },
  {
    date: "April 3, 2025",
    title: "NUS AI Lab Receives Major Grant for AutoCodeRover Development",
    content:
      "The lab has secured substantial funding to further enhance AutoCodeRover's capabilities in analyzing large-scale codebases and detecting subtle security vulnerabilities across multiple programming languages.",
  },
  {
    date: "March 10, 2025",
    title: "AutoCodeRover Tool Released as Open Source",
    content:
      "We are excited to announce that a core component of AutoCodeRover is now available as an open-source project, enabling researchers and developers worldwide to contribute to its development and benefit from its capabilities.",
  },
  {
    date: "February 22, 2025",
    title: "New Research Paper on AutoCodeRover Accepted at Top Conference",
    content:
      "Our latest research paper detailing AutoCodeRover's novel approach to symbolic execution and state space exploration has been accepted at a prestigious international conference, further validating our innovative methods.",
  },
];

const NewsSection: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {newsItems.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-1">{item.date}</div>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;

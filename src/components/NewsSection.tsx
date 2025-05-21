import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    date: "Feb 19, 2025",
    title:
      "Sonar Acquires AutoCodeRover to Supercharge Developers with AI Agents",
    content:
      "Sonar, the leading provider of code quality and code security solutions, today announced the acquisition of AutoCodeRover, an autonomous AI agent platform for software development.",
    link: "https://www.sonarsource.com/company/press-releases/sonar-acquires-autocoderover-to-supercharge-developers-with-ai-agents/",
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
              <div className="text-sm text-muted-foreground mb-1">
                {item.date}
              </div>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.content}</p>
              {item.link && (
                <a
                  href={item.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
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

export default NewsSection;

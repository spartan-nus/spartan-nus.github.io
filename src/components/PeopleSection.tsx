import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Prof. Jane Doe",
    position: "Lab Director",
    description:
      "Leading researcher in program analysis and software verification with over 15 years of experience.",
    imageUrl: "",
    initials: "JD",
  },
  {
    name: "Dr. John Smith",
    position: "Principal Investigator",
    description:
      "Expert in machine learning applications for code analysis and automated bug detection.",
    imageUrl: "",
    initials: "JS",
  },
  {
    name: "Dr. Lisa Chen",
    position: "Senior Researcher",
    description:
      "Specializes in symbolic execution and formal methods for software verification.",
    imageUrl: "",
    initials: "LC",
  },
  {
    name: "Robert Wang",
    position: "PhD Candidate",
    description:
      "Researching advanced fuzzing techniques for detecting software vulnerabilities.",
    imageUrl: "",
    initials: "RW",
  },
  {
    name: "Sarah Johnson",
    position: "PhD Candidate",
    description:
      "Working on deep learning approaches to program understanding and analysis.",
    imageUrl: "",
    initials: "SJ",
  },
  {
    name: "Michael Lee",
    position: "Research Engineer",
    description:
      "Developing the AutoCodeRover platform and implementing research prototypes.",
    imageUrl: "",
    initials: "ML",
  },
];

const PeopleSection: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-14 w-14">
                {member.imageUrl && (
                  <img src={member.imageUrl} alt={member.name} />
                )}
                <AvatarFallback className="bg-blue-100 text-blue-800 text-lg">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {member.position}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p>{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PeopleSection;

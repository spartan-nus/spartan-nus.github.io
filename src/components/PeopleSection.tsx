import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Abhik Roychoudhury",
    position: "Principal Investigator, Provost's Chair Professor@NUS",
    description: "",
    imageUrl: "/people/abhik.jpg",
    link: "https://abhikrc.com",
    initials: "AR",
  },
  {
    name: "Baishakhi Ray",
    position: "Collaborator, Associate Professor@Columbia University",
    description: "",
    imageUrl: "/people/baishakhi.jpg",
    link: "https://www.rayb.info/",
    initials: "BR",
  },
  {
    name: "Cristian Cadar",
    position: "Collaborator, Professor@Imperial College London",
    description: "",
    imageUrl: "/people/cristian.png",
    link: "https://www.doc.ic.ac.uk/~cristic/",
    initials: "CC",
  },
  {
    name: "Haifeng Ruan",
    position: "PhD Student",
    description: "AutoCodeRover",
    imageUrl: "/people/haifeng.jpg",
    link: "https://haifengruan.com/",
    initials: "HR",
  },
  {
    name: "Yuntong Zhang",
    position: "PhD Student",
    description: "AutoCodeRover, Agent Testing, Unified Agent",
    imageUrl: "/people/yuntong.jpg",
    link: "https://yuntongzhang.github.io/",
    initials: "YZ",
  },
  {
    name: "Sungmin Kang",
    position: "Postdoctoral Researcher",
    description: "Agent Testing",
    imageUrl: "/people/sungmin.jpg",
    link: "https://smkang96.github.io/",
    initials: "SK",
  },
  {
    name: "Haoxin Tu",
    position: "Postdoctoral Researcher",
    description: "Proof Agents",
    imageUrl: "/people/haoxin.png",
    initials: "HT",
  },
  {
    name: "Martin Mirchev",
    position: "PhD student",
    description: "AutoCodeRover",
    imageUrl: "/people/martin.jpg",
    initials: "MM",
  },
  {
    name: "Ruijie Meng",
    position: "Graduating PhD student -> Asst Prof CISPA",
    description: "Agent Testing",
    imageUrl: "/people/ruijie.png",
    initials: "RM",
  },
  ];

const PeopleSection: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow border-b-4 border-b-nus-orange"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-14 w-14 ring-2 ring-nus-orange">
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <AvatarFallback className="bg-nus-orange text-white text-lg">
                    {member.initials}
                  </AvatarFallback>
                )}
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
              {member.link && (
                <a
                  href={member.link}
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

export default PeopleSection;

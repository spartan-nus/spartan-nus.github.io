import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Abhik Roychoudhury",
    position: "Principal Investigator, Provost's Chair Professor@NUS",
    description: "",
    imageUrl: "/people/abhik.jpg",
    initials: "AR",
  },
  {
    name: "Baishakhi Ray",
    position: "Collaborator, Associate Professor@Columbia University",
    description: "",
    imageUrl: "/people/baishakhi.jpg",
    initials: "BR",
  },
  {
    name: "Cristian Cadar",
    position: "Collaborator, Professor@Imperial College London",
    description: "",
    imageUrl: "/people/cristian.png",
    initials: "CC",
  },
  {
    name: "Haifeng Ruan",
    position: "PhD Student",
    description: "AutoCodeRover",
    imageUrl: "/people/haifeng.jpg",
    initials: "HR",
  },
  {
    name: "Yuntong Zhang",
    position: "PhD Student",
    description: "AutoCodeRover, Agent Testing, Unified Agent",
    imageUrl: "/people/yuntong.jpg",
    initials: "YZ",
  },
  {
    name: "Sungmin Kang",
    position: "Postdoctoral Researcher",
    description: "Agent Testing",
    imageUrl: "/people/sungmin.jpg",
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
  {
    name: "Zhengxiong Luo",
    position: "Postdoctoral researcher",
    description: "Proof agents (starting)",
    imageUrl: "/people/zhengxiong.jpg",
    initials: "ZL",
  },
  {
    name: "Dylan Wolff",
    position: "PhD student",
    description: "Proof Agents (starting)",
    imageUrl: "/people/dylan.jpeg",
    initials: "RM",
  },
  {
    name: "Huan Zhao",
    position: "PhD student",
    description: "Proof Agents (starting)",
    imageUrl: "/people/zhaohuan.jpeg",
    initials: "RM",
  },];

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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PeopleSection;

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
    homepage: "https://abhikrc.com/"
  },
   {
    name: "Xiaokui Xiao",
    position: "Professor@NUS",
    description: "",
    imageUrl: "/people/xiaokui.jpg",
    initials: "XX",
    homepage: "https://www.comp.nus.edu.sg/~xiaoxk/"
  },
  {
    name: "Baishakhi Ray",
    position: "Collaborator, Associate Professor@Columbia",
    description: "",
    imageUrl: "/people/baishakhi.jpg",
    initials: "BR",
    homepage: "https://www.rayb.info/"
  },
  {
    name: "Cristian Cadar",
    position: "Collaborator, Professor@Imperial",
    description: "",
    imageUrl: "/people/cristian.png",
    initials: "CC",
    homepage: "https://www.doc.ic.ac.uk/~cristic/"
  },
  {
    name: "Lin Tan",
    position: "Collaborator, Professor@Purdue",
    description: "",
    imageUrl: "/people/lintan.jpeg",
    initials: "LT",
    homepage: "https://www.cs.purdue.edu/homes/lintan/"
  },
  {
    name: "Blaise Genest",
    position: "Collaborator@CNRS France",
    description: "",
    imageUrl: "/people/blaise3.jpg",
    initials: "BG",
    homepage: "https://perso.crans.org/genest/"
  },
  {
    name: "Haifeng Ruan",
    position: "PhD Student",
    description: "AutoCodeRover",
    imageUrl: "/people/haifeng.jpg",
    initials: "HR",
    homepage: "https://haifengruan.com/"
  },
  {
    name: "Yuntong Zhang",
    position: "PhD Student",
    description: "AutoCodeRover, Agent Testing, Unified Agent, AI for Security",
    imageUrl: "/people/yuntong.jpg",
    initials: "YZ",
    homepage: "https://yuntongzhang.github.io/"
  },
  {
    name: "Sungmin Kang",
    position: "Postdoctoral Researcher",
    description: "Agent Testing",
    imageUrl: "/people/sungmin.jpg",
    initials: "SK",
    homepage: "https://smkang96.github.io/"
  },
  {
    name: "Haoxin Tu",
    position: "Postdoctoral Researcher",
    description: "Proof Agents",
    imageUrl: "/people/haoxin.png",
    initials: "HT",
    homepage: "https://haoxintu.github.io/"
  },
  {
    name: "Martin Mirchev",
    position: "PhD student, On leave to SonarSource",
    description: "AutoCodeRover",
    imageUrl: "/people/martin.jpg",
    initials: "MM",
    homepage: "https://marti2203.github.io"
  },
  {
    name: "Leonhard Applis",
    position: "Postdoctoral Researcher",
    description: "Unified Agent",
    imageUrl: "/people/applis.jpeg",
    initials: "LA",
    homepage: "https://github.com/lapplislazuli"
  },
  {
    name: "I.N.B. Yusuf",
    position: "Postdoctoral Researcher",
    description: "AI for Security",
    imageUrl: "/people/yusuf.jpg",
    initials: "IY",
    homepage: "https://imamnurby.github.io/"
  },
  {
    name: "Z. Liu (Tony)",
    position: "(Incoming) PhD student",
    description: "AI for Security",
    imageUrl: "/people/tony.jpg",
    initials: "ZL",
    homepage: "https://conf.researchr.org/profile/icsme-2025/zhengyaoliu"
  },
  {
    name: "Ruijie Meng",
    position: "Graduating PhD student -> Asst Prof CISPA",
    description: "Agent Testing",
    imageUrl: "/people/ruijie.png",
    initials: "RM",
    homepage: "https://mengrj.github.io"
  },
  {
    name: "Ridwan Shariffdeen",
    position: "Alumni -> Principal Research Scientist@SonarSource",
    description: "AutoCodeRover",
    imageUrl: "/people/ridwan.jpg",
    initials: "RS",
    homepage: "https://rshariffdeen.com/"
  },
];

const PeopleSection: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Researchers</h2>
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
                <CardTitle className="text-lg"><a href={member.homepage}>{member.name}</a></CardTitle>
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

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6">
            <p className="mb-2">
              <strong>Principal Investigator:</strong> Abhik Roychoudhury (
              <a
                href="https://abhikrc.com"
                className="text-blue-600 hover:underline"
              >
                abhik@nus.edu.sg
              </a>
              )
            </p>
            <p className="mb-2">
              <strong>Administration:</strong> Smitha E (
              <a
                href="https://abhikrc.com"
                className="text-blue-600 hover:underline"
              >
                smithae@nus.edu.sg
              </a>
              )
            </p>

            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <p className="mb-2">
              <a href= "https://enterprise.nus.edu.sg/contact-us/" className="text-blue-600 hover:underline">
                National University of Singapore (NUS) Enterprise </a>
              <br />
              i3 Building Level 2, 
              <br />
              21 Heng Mui Keng Terrace,
              <br />
              Singapore 119613, Republic of Singapore.
            </p>
          </CardContent>
        </Card>

        {/* <Card> */}
        {/*   <CardContent className="pt-6"> */}
        {/*     <h3 className="text-xl font-semibold mb-4">Join Us</h3> */}
        {/*     <p className="mb-4"> */}
        {/*       We are always looking for talented researchers and students who */}
        {/*       are interested in AI, Agents, software engineering, and program analysis. */}
        {/*       If you're interested in joining our lab, please email us with your */}
        {/*       CV and research interests. */}
        {/*     </p> */}
        {/*     <h4 className="text-lg font-medium mb-2">Open Positions</h4> */}
        {/*     <ul className="list-disc list-inside space-y-1"> */}
        {/*       <li>PhD Students (Fall 2025)</li> */}
        {/*       <li>Postdoctoral Researchers</li> */}
        {/*       <li>Research Assistants</li> */}
        {/*       <li>Undergraduate Research Opportunities</li> */}
        {/*     </ul> */}
        {/*   </CardContent> */}
        {/* </Card> */}
      </div>
    </div>
  );
};

export default ContactSection;

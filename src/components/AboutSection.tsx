import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-nus-blue via-blue-900 to-nus-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              SPARTAN effort in<br />Agentic AI
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Strategic Platform for Autonomous Resilient and Trusted Agents @ NUS
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed">
                Led by Prof.{" "}
                <a
                  href="https://abhikrc.com/"
                  className="text-nus-blue font-semibold hover:text-nus-orange no-underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abhik Roychoudhury
                </a>, we strive to enable{" "}
                <span className="font-semibold text-nus-blue">secure and trustworthy systems</span>{" "}
                using powerful agentic AI approaches.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                We focus on <span className="font-semibold text-nus-blue">program analysis</span> approaches, including{" "}
                <a href="https://nus-apr.github.io" className="text-nus-blue hover:text-nus-orange font-medium no-underline transition-colors" target="_blank" rel="noopener noreferrer">
                  Automated Program Repair
                </a>,{" "}
                <a href="https://nus-tss.github.io/fuzzing/" className="text-nus-blue hover:text-nus-orange font-medium no-underline transition-colors" target="_blank" rel="noopener noreferrer">
                  Fuzzing
                </a>, and Symbolic Execution.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                These capabilities combine with agents to create powerful tools like{" "}
                <a href="https://autocoderover.dev" className="text-nus-blue hover:text-nus-orange font-bold no-underline transition-colors" target="_blank" rel="noopener noreferrer">
                  AutoCodeRover
                </a>
                , contributing to autocoding and AI Safety.
              </p>
            </div>

            {/* Featured Event */}
            <div className="bg-nus-orange text-white p-8 rounded">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    <a href="https://spartan-nus.github.io/ai4code-roundtable" className="hover:underline">
                      AI for Code Industry Roundtable
                    </a>
                  </h3>
                  <p className="text-orange-100 mb-3">19 January 2026</p>
                  <a href="https://www.youtube.com/watch?v=o8B6q8FNC70" className="inline-flex items-center gap-2 text-white hover:text-orange-100 font-medium transition-colors" target="_blank" rel="noopener noreferrer">
                    Watch Video
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded">
              <img
                src="/center_photo_2025_may.jpeg"
                alt="SPARTAN Team"
                className="w-full rounded mb-6"
              />
              <img
                src="/spartan_logo_colored.jpg"
                alt="SPARTAN Logo"
                className="w-48 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

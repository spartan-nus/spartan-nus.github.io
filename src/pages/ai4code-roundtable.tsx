import React from "react";
import Navbar from "@/components/Navbar";

const YourNewPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeTab="" setActiveTab={() => {}} />

      <main className="flex-1 bg-white">
        {/* Hero Section - Title, Date & Time */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">AI Safety Workshop 2025</h1>
            <p className="text-xl mb-2">Building Responsible AI Systems</p>
            <div className="text-lg">
              <p className="mb-1"><strong>Date:</strong> March 15, 2025</p>
              <p><strong>Time:</strong> 9:00 AM - 5:00 PM (SGT)</p>
            </div>
          </div>
        </section>

        {/* General Introduction */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">About the Workshop</h2>
            <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Join us for an intensive workshop exploring the latest developments in AI safety research. 
                This event brings together leading researchers, industry experts, and policymakers to discuss 
                critical challenges in developing safe and beneficial artificial intelligence systems.
              </p>
              <p>
                Topics will include alignment research, robustness testing, interpretability methods, 
                and governance frameworks for responsible AI deployment. Participants will engage in 
                hands-on sessions and collaborative discussions on practical safety measures.
              </p>
            </div>
          </div>
        </section>

        {/* Organizers */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Organizers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-lg">Dr. Sarah Chen</h3>
                <p className="text-gray-600">AI Safety Research Lead</p>
                <p className="text-sm text-gray-500">National University of Singapore</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-lg">Prof. Michael Zhang</h3>
                <p className="text-gray-600">Director, SPARTAN Lab</p>
                <p className="text-sm text-gray-500">National University of Singapore</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-lg">Dr. Emily Rodriguez</h3>
                <p className="text-gray-600">AI Ethics Researcher</p>
                <p className="text-sm text-gray-500">Institute for AI Safety</p>
              </div>
            </div>
          </div>
        </section>

        {/* Confirmed Attendees */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Confirmed Attendees</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Industry Leaders</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Dr. James Wilson - DeepMind</li>
                    <li>• Sarah Kim - OpenAI Safety</li>
                    <li>• Prof. David Martinez - Stanford AI Lab</li>
                    <li>• Dr. Lisa Thompson - Anthropic</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Academic Researchers</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Prof. Alan Johnson - MIT CSAIL</li>
                    <li>• Dr. Maria Santos - UC Berkeley</li>
                    <li>• Prof. Robert Lee - Oxford AI Institute</li>
                    <li>• Dr. Anna Petrov - Carnegie Mellon</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Program Schedule</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex border-l-4 border-blue-500 pl-4 py-2">
                  <div className="w-20 text-sm font-semibold text-gray-500">9:00 AM</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Opening Keynote</h3>
                    <p className="text-gray-600">The Future of AI Safety Research</p>
                  </div>
                </div>
                <div className="flex border-l-4 border-blue-500 pl-4 py-2">
                  <div className="w-20 text-sm font-semibold text-gray-500">10:30 AM</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Panel Discussion</h3>
                    <p className="text-gray-600">Alignment Challenges in Large Language Models</p>
                  </div>
                </div>
                <div className="flex border-l-4 border-blue-500 pl-4 py-2">
                  <div className="w-20 text-sm font-semibold text-gray-500">1:00 PM</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Lunch Break</h3>
                    <p className="text-gray-600">Networking and Discussion</p>
                  </div>
                </div>
                <div className="flex border-l-4 border-blue-500 pl-4 py-2">
                  <div className="w-20 text-sm font-semibold text-gray-500">2:30 PM</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Workshop Session</h3>
                    <p className="text-gray-600">Hands-on Interpretability Tools</p>
                  </div>
                </div>
                <div className="flex border-l-4 border-blue-500 pl-4 py-2">
                  <div className="w-20 text-sm font-semibold text-gray-500">4:00 PM</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Closing Remarks</h3>
                    <p className="text-gray-600">Next Steps and Collaboration Opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venue */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Venue</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">National University of Singapore</h3>
                  <p className="text-gray-600 mb-4">
                    The workshop will be held at the state-of-the-art Computing Centre, 
                    featuring modern conference facilities and advanced technical infrastructure.
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Address:</strong> 21 Heng Mui Keng Terrace</p>
                    <p><strong>Building:</strong> i3 Building, Level 5</p>
                    <p><strong>Room:</strong> Auditorium A</p>
                    <p><strong>Parking:</strong> Available on-site</p>
                  </div>
                </div>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Map Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brochure */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Event Brochure</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 mb-6">
                Download our comprehensive workshop brochure for detailed information about sessions, 
                speakers, and registration details.
              </p>
              <div className="space-y-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-200">
                  Download Brochure (PDF)
                </button>
                <p className="text-sm text-gray-500">File size: 2.3 MB • Last updated: February 2025</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-nus-blue text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} SPARTAN - National University of
            Singapore
          </p>
          <p className="text-sm mt-2">
            <a
              href="https://enterprise.nus.edu.sg"
              className="hover:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              National University of Singapore (NUS) Enterprise
            </a>{" "}
            i3 Building Level 2, 21 Heng Mui Keng Terrace, Singapore 119613, Republic of Singapore.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default YourNewPage;
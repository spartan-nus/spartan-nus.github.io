"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


// --- START: New and Improved SectionNavbar Logic ---
const sections = [
  { id: 'about', title: 'About' },
  { id: 'organizers', title: 'Organizers' },
  { id: 'attendees', title: 'Attendees' },
  { id: 'program', title: 'Program' },
  { id: 'venue', title: 'Venue' },
  { id: 'brochure', title: 'Brochure' },
  { id: 'events', title: 'Events' },
];

const SectionNavbar = ({ activeSection, isVisible }) => (
  <nav className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center h-16">
        <div className="flex space-x-2 sm:space-x-6 overflow-x-auto py-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 whitespace-nowrap ${activeSection === section.id
                ? 'text-blue-700 bg-blue-100' // Active state style
                : 'text-gray-600 hover:text-blue-700 hover:bg-gray-200' // Default state style
                }`}
            >
              {section.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>
);
// --- END: New and Improved SectionNavbar Logic ---

const organizers = [
  {
    name: "Abhik Roychoudhury",
    title: "Provost's Chair Professor",
    institution: "National University of Singapore",
    link: "https://abhikrc.com/"
  },
  {
    name: "Baishakhi Ray",
    title: "Associate Professor",
    institution: "Columbia University",
    link: "https://www.rayb.info/"
  },
]


const attendees = [
  {
    name: "Sungmin Kang",
    title: "Postdoctoral Researcher",
    institution: "National University of Singapore",
    link: "https://smkang96.github.io/"
  },
  {
    name: "David Lo",
    title: "OUB Chair Professor",
    institution: "Singapore Management University",
    link: "http://www.mysmu.edu/faculty/davidlo/"
  },
  {
    name: "Cho Chia Yuan",
    title: "Dy Director",
    institution: "Ministry of Defence (Singapore)",
    link: "https://sg.linkedin.com/in/chiayuan-cho"
  },
  {
    name: "Satish Chandra",
    title: "Principal Engineer",
    institution: "ML for Developer Productivity, Google",
    link: "https://sites.google.com/site/schandraacmorg/"
  },
  {
    name: "Raveendra Kumar Medicherla",
    title: "Principal Scientist",
    institution: "Tata Consultancy Services",
    link: "https://in.linkedin.com/in/raveendrakumar"
  },
  {
    name: "Aditya Kanade",
    title: "Senior Principal Researcher",
    institution: "Microsoft Research India",
    link: "https://www.microsoft.com/en-us/research/people/kanadeaditya/"
  },
  {
    name: "Jeffrey Salleh",
    title: "Director, Cloud Engineering",
    institution: "Oracle",
    link: "https://www.jeffsalleh.sg/"
  },
  {
    name: "Harry Wang",
    title: "Chief Growth Officer",
    institution: "SonarSource",
    link: "https://www.linkedin.com/in/harry-wang-123456"
  },
  {
    name: "Corina Pasareanu",
    title: "Principal Scientist, Technical Professional Leader",
    institution: "Carnegie Mellon University & NASA Ames Research Center",
    link: "https://www.andrew.cmu.edu/user/pcorina/"
  },
  {
    name: "Sian Wee Tan",
    title: "Senior Vice President (Innovation and Enterprise)",
    institution: "National University of Singapore",
    link: "https://www.nus.edu.sg/about/management/tan-sian-wee"
  },
  {
    name: "Atif Memon",
    title: "Distinguished Engineer",
    institution: "Apple",
    link: "https://www.linkedin.com/in/memonatif/"
  },
  {
    name: "Murali Krishna Ramanathan",
    title: "Principal Applied Scientist",
    institution: "AWS",
    link: "https://www.linkedin.com/in/mkramanathan/"
  },
  {
    name: "Xin Xia",
    title: "Qiushi Distinguished Professor",
    institution: "Zhejiang University",
    link: "https://xin-xia.github.io/"
  },
  {
    name: "Yuntong Zhang",
    title: "PhD Student, Co-founder AutoCodeRover",
    institution: "National University of Singapore",
    link: "https://yuntongzhang.github.io/"
  },
  {
    name: "Haifeng Ruan",
    title: "PhD Student, Co-founder AutoCodeRover",
    institution: "National University of Singapore",
    link: "https://haifengruan.com/"
  },
  {
    name: "Hsiao Ming Chia",
    title: "Director (Core Engineering Products)",
    institution: "GovTech Singapore",
    link: "https://sg.linkedin.com/in/chiahsiaoming"
  },
  {
    name: "Shweta Garg",
    title: "Senior Applied Scientist",
    institution: "AWS AI Labs",
    link: "https://www.linkedin.com/in/shwetagargiitb"
  },
  {
    name: "Varun Srivastava",
    title: "Engineering Leader - Search and AI",
    institution: "Atlassian",
    link: "https://www.linkedin.com/in/varun-srivastava-7948054/"
  },
  {
    name: "Imam Nur Bani Yusuf",
    title: "Postdoctoral Researcher",
    institution: "National University of Singapore",
    link: "https://www.linkedin.com/in/inby/"
  },
  {
    name: "Cristian Cadar",
    title: "Professor",
    institution: "Imperial College London",
    link: "https://www.doc.ic.ac.uk/~cristic/"
  },
  {
    name: "Behrooz Omidvar-Tehrani",
    title: "Principal Scientist",
    institution: "Microsoft",
    link: "https://www.linkedin.com/in/behroozomidvar/"
  }
];

const avatars = import.meta.glob("/ai4code-avatars/*", { eager: true, as: "url" });
console.log(avatars)

const getAvatarPath = (name: string): string => {
  if (!name) return "/avatars/default.jpg";

  const filename = name.toLowerCase().replace(/\s+/g, "-");
  return `/ai4code-avatars/${filename}.jpg`;

  const extensions = ["jpg", "jpeg", "png", "webp"];
  for (const ext of extensions) {
    const path = `/ai4code-avatars/${filename}.${ext}`;
    const img = new Image();
    img.src = path;
    return path;
  }

  return "/avatars/default.jpg";
};


const YourNewPage = () => {
  <head>
    <meta name="robots" content="noindex, nofollow" />
  </head>

  // --- START: State and Logic for tracking active section ---
  const [activeSection, setActiveSection] = useState('');
  const [showSectionNavbar, setShowSectionNavbar] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    // Populate refs for each section
    sections.forEach(section => {
      sectionRefs.current[section.id] = document.getElementById(section.id);
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Offset to trigger highlight sooner
      let currentSectionId = '';

      // Check if we've scrolled past the hero section to show section navbar
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        setShowSectionNavbar(window.scrollY > heroSection.offsetHeight - 100);
      }

      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (element && element.offsetTop <= scrollPosition) {
          currentSectionId = section.id;
        }
      }
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section on page load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // --- END: Logic for tracking active section ---

  // --- Start of Slideshow Logic ---
  const slides = [
    {
      title: "AutoCoderRover: Automated Program Repair",
      subtitle: "From research on Automatic Programming to Spinoff Acquisition",
      description: "Program Structure captures intent. Extract coarse specs from structure for autonomous SE",
      bgClass: "from-blue-900 to-blue-700",
    },
    {
      title: "AI-Powered Code Analysis",
      subtitle: "Advanced program understanding through semantic analysis",
      description: "Leveraging AST and program dependencies for intelligent code search",
      bgClass: "from-green-800 to-green-600",
    },
    {
      title: "Software Engineering with LLMs",
      subtitle: "Integrating Large Language Models in development workflows",
      description: "Building intelligent tools for automated testing and code generation",
      bgClass: "from-purple-800 to-purple-600",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  // --- End of Slideshow Logic ---

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main navbar - hide when scrolling */}
      <div className={`transition-transform duration-300 ${showSectionNavbar ? '-translate-y-full' : 'translate-y-0'}`}>
        <Navbar activeTab="" setActiveTab={() => { }} />
      </div>

      {/* The section navigation bar */}
      <SectionNavbar activeSection={activeSection} isVisible={showSectionNavbar} />

      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="hero-section bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Singapore Manifesto on AI-Driven Innovations for Code</h1>
            <p className="text-xl mb-2">Programming with Trust</p>
            <div className="text-lg">
              <p className="mb-1"><strong>Date:</strong> Jan 19, 2026</p>
              {/* <p><strong>Time:</strong> 9:00 AM - 5:00 PM (SGT)</p> */}
            </div>
          </div>
        </section>

        {/* 
          IMPORTANT: Updated scroll-mt to account for sticky navbar height
          Changed from scroll-mt-24 to scroll-mt-20 for better positioning
        */}

        {/* General Introduction */}
        <section id="about" className="py-12 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">About the Event</h2>
            <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Large Language Models (LLMs) have shown surprising proficiency in generating code snippets, promising to automate large parts of software engineering via artificial intelligence (AI). We argue that successfully deploying AI software engineers requires a level of trust equal to or even greater than the trust established by human-driven software engineering practices. The recent trend toward LLM agents offers a path toward integrating the power of LLMs to create new code with the power of analysis tools to increase trust in the code.
              </p>
              <p>
                This event is a one-day, invite-only industry roundtable on AI-driven innovation for code, taking place in Singapore on the day before AAAI 2026. Bringing together leading participants from industry and academia worldwide, the discussion aims to distill key insights and guidelines on how to achieve trustworthy AI for code.
              </p>
            </div>
          </div>
        </section>

        {/* Organizers */}
        <section id="organizers" className="py-12 scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Organizers</h2>
            {/* ... content ... */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
              {organizers.map((o) => (
                <div key={o.name} className="text-center">
                  <a href={o.link} className="inline-block">
                    <img
                      src={getAvatarPath(o.name)}
                      alt={o.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover bg-gray-300"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/avatars/default.jpg";
                      }}
                    />
                  </a>
                  <h3 className="font-semibold text-lg">
                    <a href={o.link} className="hover:text-blue-600 transition-colors">
                      {o.name}
                    </a>
                  </h3>
                  <p className="text-gray-600">{o.title}</p>
                  <p className="text-sm text-gray-500">{o.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Confirmed Attendees */}
        <section id="attendees" className="py-12 scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Confirmed Attendees
            </h2>

            <section id="Confirmed Attendees" className="py-12 scroll-mt-20">
              <div className="container mx-auto max-w-4xl">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
                  {attendees.slice().sort((a, b) => a.name.localeCompare(b.name)).map((attendee) => (
                    <div key={attendee.name} className="text-center">
                      <a
                        href={attendee.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <img
                          src={getAvatarPath(attendee.name)}
                          alt={attendee.name}
                          onError={(e) => {
                            e.currentTarget.src = "/avatars/default.jpg";
                          }}
                          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                        />
                      </a>
                      <h3 className="font-semibold text-lg">{attendee.name}</h3>
                      <p className="text-gray-600">{attendee.title}</p>
                      <p className="text-sm text-gray-500">{attendee.institution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        </section>

        {/* Program */}
        <section id="program" className="py-12 scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Program Schedule</h2>
            {/* ... content ... */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex border-l-4 border-blue-500 pl-4 py-2">
                  <div className="w-20 text-sm font-semibold text-gray-500">9:00 AM</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Registration</h3>
                    {/* <p className="text-gray-600">The Future of AI Safety Research</p> */}
                  </div>
                </div>
                <div className="flex border-l-4 border-blue-500 pl-4 py-2">
                  <div className="w-20 text-sm font-semibold text-gray-500">9:30 AM</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Welcome and presentation by organizers</h3>
                    {/* <p className="text-gray-600">Alignment Challenges in Large Language Models</p> */}
                  </div>
                </div>
                <div className="flex border-l-4 border-blue-500 pl-4 py-2">
                  <div className="w-20 text-sm font-semibold text-gray-500">10:00 AM</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Industry Sharing 1: Tech company / govt agency from Singapore (to fix)</h3>
                    {/* <p className="text-gray-600">Networking and Discussion</p> */}
                  </div>
                </div>
                <div className="flex border-l-4 border-blue-500 pl-4 py-2">
                  <div className="w-20 text-sm font-semibold text-gray-500">11:00 AM</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Industry sharing 2: Tech company  from USA / academic industrial researcher from USA (to fix)</h3>
                    {/* <p className="text-gray-600">Hands-on Interpretability Tools</p> */}
                  </div>
                </div>
                <div className="flex border-l-4 border-blue-500 pl-4 py-2">
                  <div className="w-20 text-sm font-semibold text-gray-500">12:00 PM</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Lunch</h3>
                    {/* <p className="text-gray-600">Next Steps and Collaboration Opportunities</p> */}
                  </div>
                </div>
                <div className="flex border-l-4 border-blue-500 pl-4 py-2">
                  <div className="w-20 text-sm font-semibold text-gray-500">1:00 PM</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Industry roundtable in groups</h3>
                    {/* <p className="text-gray-600">Next Steps and Collaboration Opportunities</p> */}
                  </div>
                </div>
                <div className="flex border-l-4 border-blue-500 pl-4 py-2">
                  <div className="w-20 text-sm font-semibold text-gray-500">2:00 PM</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Summary of results of roundtable</h3>
                    {/* <p className="text-gray-600">Next Steps and Collaboration Opportunities</p> */}
                  </div>
                </div>
                <div className="flex border-l-4 border-blue-500 pl-4 py-2">
                  <div className="w-20 text-sm font-semibold text-gray-500">3:00 PM</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Tea break</h3>
                    {/* <p className="text-gray-600">Next Steps and Collaboration Opportunities</p> */}
                  </div>
                </div>
                <div className="flex border-l-4 border-blue-500 pl-4 py-2">
                  <div className="w-20 text-sm font-semibold text-gray-500">3:30 PM</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Manifesto discussions - Abhik Roychoudhury &amp; Baishakhi Ray with all</h3>
                    {/* <p className="text-gray-600">Next Steps and Collaboration Opportunities</p> */}
                  </div>
                </div>
                <div className="flex border-l-4 border-blue-500 pl-4 py-2">
                  <div className="w-20 text-sm font-semibold text-gray-500">4:30 PM</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Summary: Plan for followup meetings in New York, Bay Area, London - Abhik Roychoudhury</h3>
                    {/* <p className="text-gray-600">Next Steps and Collaboration Opportunities</p> */}
                  </div>
                </div>
                <div className="flex border-l-4 border-blue-500 pl-4 py-2">
                  <div className="w-20 text-sm font-semibold text-gray-500">5:30 PM</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Closing</h3>
                    {/* <p className="text-gray-600">Next Steps and Collaboration Opportunities</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venue */}
        <section id="venue" className="py-12 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Venue</h2>
            {/* ... content ... */}
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">National University of Singapore</h3>
                  {/* <p className="text-gray-600 mb-4"> */}
                  {/*   The workshop will be held at the state-of-the-art Computing Centre, */}
                  {/*   featuring modern conference facilities and advanced technical infrastructure. */}
                  {/* </p> */}
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Address:</strong> 3A Research Link, Singapore 119392</p>
                    <p><strong>Building:</strong> COM4, Level 2</p>
                    <p><strong>Room:</strong> COM4-02-01 </p>
                  </div>
                </div>

                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <MapContainer center={[1.2926829208111419, 103.77563993987859]} zoom={18} style={{ height: '16rem', width: '100%' }}>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker
                      position={[1.2926829208111419, 103.77563993987859]}
                      eventHandlers={{
                        click: () => {
                          window.open("https://maps.app.goo.gl/rQHKURhwnh9NNiix5", "_blank");
                        },
                      }}
                    >
                      <Popup>i3 Building</Popup>
                    </Marker>


                  </MapContainer>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brochure */}
        <section id="brochure" className="py-12 scroll-mt-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Event Brochure</h2>
            {/* ... content ... */}
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 mb-6">
                Download our comprehensive event brochure for detailed information about sessions,
                speakers, and registration details.
              </p>
              <div className="space-y-4">
                <a
                  href="/brochure.pdf"
                  download
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-200 inline-block text-center"
                >
                  Download Brochure (PDF)
                </a>
                {/* <p className="text-sm text-gray-500">File size: 2.3 MB • Last updated: February 2025</p> */}
              </div>
            </div>
          </div>
        </section>

        {/* Future Events */}
        <section id="events" className="py-12 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Upcoming Series Events</h2>
            {/* ... content ... */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">

              {/* San Francisco Event */}
              {/* <div className="bg-white p-6 rounded-lg shadow-sm"> */}
              {/*   <h3 className="font-semibold text-xl mb-3 text-blue-800">San Francisco, CA</h3> */}
              {/*   <p className="text-gray-600 mb-4"> */}
              {/*     A focused meetup on the latest trends in AI-driven software engineering. */}
              {/*   </p> */}
              {/*   <p className="text-sm font-semibold text-gray-500">Details Coming Soon</p> */}
              {/* </div> */}

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3 text-green-800">New York, NY</h3>
                {/* <p className="text-gray-600 mb-4"> */}
                {/*   Workshop on integrating Large Language Models into enterprise workflows. */}
                {/* </p> */}
                <p className="text-sm font-semibold text-gray-500">More Info Soon</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3 text-purple-800">Bay Area, SF</h3>
                {/* <p className="text-gray-600 mb-4"> */}
                {/*   East coast summit on AI ethics and responsible model deployment. */}
                {/* </p> */}
                <p className="text-sm font-semibold text-gray-500">More Info Soon</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3 text-red-800">London, UK</h3>
                {/* <p className="text-gray-600 mb-4"> */}
                {/*   European conference on AI in finance and regulatory technology. */}
                {/* </p> */}
                <p className="text-sm font-semibold text-gray-500">More Info Soon</p>
              </div>

            </div>
          </div>
        </section>

        {/* Our Research */}
        {/* <section id="research" className="py-12 scroll-mt-20"> */}
        {/*   <div className="container mx-auto px-4"> */}
        {/*     <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Research</h2> */}
        {/**/}
        {/*     <div className="max-w-6xl mx-auto"> */}
        {/*       <div className="relative bg-white rounded-lg shadow-lg overflow-hidden"> */}
        {/**/}
        {/*         <div className="relative h-96 md:h-[500px]"> */}
        {/*           {slides.map((slide, index) => ( */}
        {/*             <div */}
        {/*               key={index} */}
        {/*               className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0' */}
        {/*                 }`} */}
        {/*             > */}
        {/*               <div className={`h-full w-full flex items-center justify-center bg-gradient-to-r ${slide.bgClass}`}> */}
        {/*                 <div className="text-center text-white p-8"> */}
        {/*                   <h3 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h3> */}
        {/*                   <p className="text-lg mb-4">{slide.subtitle}</p> */}
        {/*                   <p className="text-sm opacity-90">{slide.description}</p> */}
        {/*                 </div> */}
        {/*               </div> */}
        {/*             </div> */}
        {/*           ))} */}
        {/*         </div> */}
        {/**/}
        {/**/}
        {/*         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20"> */}
        {/*           {slides.map((_, index) => ( */}
        {/*             <button */}
        {/*               key={index} */}
        {/*               onClick={() => goToSlide(index)} */}
        {/*               className={`w-3 h-3 rounded-full transition-opacity duration-200 ${index === currentSlide ? 'bg-white opacity-100' : 'bg-white opacity-50 hover:opacity-75' */}
        {/*                 }`} */}
        {/*             ></button> */}
        {/*           ))} */}
        {/*         </div> */}
        {/**/}
        {/**/}
        {/*         <button */}
        {/*           onClick={prevSlide} */}
        {/*           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 z-20" */}
        {/*         > */}
        {/*           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> */}
        {/*             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /> */}
        {/*           </svg> */}
        {/*         </button> */}
        {/*         <button */}
        {/*           onClick={nextSlide} */}
        {/*           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 z-20" */}
        {/*         > */}
        {/*           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> */}
        {/*             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /> */}
        {/*           </svg> */}
        {/*         </button> */}
        {/*       </div> */}
        {/**/}
        {/**/}
        {/*       <div className="mt-8 grid md:grid-cols-3 gap-6"> */}
        {/*         <div className="bg-white p-6 rounded-lg shadow-sm"> */}
        {/*           <h4 className="font-semibold text-lg mb-2 text-gray-800">Publications</h4> */}
        {/*           <p className="text-gray-600 text-sm">20+ peer-reviewed papers in top-tier conferences including ICSE, FSE, and ASE</p> */}
        {/*         </div> */}
        {/*         <div className="bg-white p-6 rounded-lg shadow-sm"> */}
        {/*           <h4 className="font-semibold text-lg mb-2 text-gray-800">Industry Impact</h4> */}
        {/*           <p className="text-gray-600 text-sm">Technology successfully transferred to industry partners and startup acquisitions</p> */}
        {/*         </div> */}
        {/*         <div className="bg-white p-6 rounded-lg shadow-sm"> */}
        {/*           <h4 className="font-semibold text-lg mb-2 text-gray-800">Open Source</h4> */}
        {/*           <p className="text-gray-600 text-sm">Tools and datasets publicly available for the research community</p> */}
        {/*         </div> */}
        {/*       </div> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </section> */}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
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
    </div >
  );
};

export default YourNewPage;

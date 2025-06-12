import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Services = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Data Collection & Processing",
      bullets: [
        "Geospatial data acquisition",
        "Data cleaning & processing",
        "Spatial database management",
        "Quality assurance & validation"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: "Web Mapping Solutions",
      bullets: [
        "Interactive map applications",
        "Custom GIS web portals",
        "Spatial data visualization",
        "Real-time mapping solutions"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "GIS Freelancing",
      bullets: [
        "Project-based GIS solutions",
        "Short-term spatial analysis",
        "Custom mapping services",
        "Flexible engagement models"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "GIS Consultancy",
      bullets: [
        "Strategic spatial planning",
        "System implementation guidance",
        "Workflow optimization",
        "Technology evaluation"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: "Environmental Impact Assessment",
      bullets: [
        "Spatial impact analysis",
        "Habitat mapping",
        "Land use change detection",
        "Visual impact assessment"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Remote Sensing Analysis",
      bullets: [
        "Satellite image processing",
        "Land cover classification",
        "Change detection analysis",
        "Feature extraction"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      title: "GIS Training & Workshops",
      bullets: [
        "Customized training programs",
        "Software-specific workshops",
        "Spatial analysis techniques",
        "Web mapping technologies"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Spatial Web Development",
      bullets: [
        "Custom GIS applications",
        "Web application development",
        "API integration",
        "Database-backed spatial apps"
      ]
    },
  ];

  return (
    <div id="services" className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">GEOSPATIAL SERVICES</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Services available
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-blue-200">
            Comprehensive GIS solutions tailored to your specific needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/70 to-blue-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-900/20"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              
              <ul className="space-y-2 pl-2 mb-4">
                {service.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </div>
                    <span className="ml-3 text-blue-100">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Changed Link to button */}
              <ScrollLink 
                to="contact"
                smooth={true}
                duration={500}
                className="inline-block w-full text-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-cyan-300 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Learn More →
              </ScrollLink>
            </div>
          ))}
        </div>

        {/* Updated Call to Action */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-blue-200 mb-8">
              Contact me today to discuss how I can help with your GIS needs
            </p>
            <div className="space-x-4">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              >
                Get in Touch
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="inline-block bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-slate-600 cursor-pointer"
              >
                Learn More
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating circles */}
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-3xl animate-pulse"></div>
        
        {/* Satellite icon */}
        <div className="absolute top-1/4 right-16 animate-float">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-cyan-300 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Services;
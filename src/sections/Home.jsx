import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Jackson K. Mocho
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl mx-auto animate-fade-in-delay text-gray-300">
            Bridging the gap between Geographic Information Systems and Web Development
          </p>
          
          {/* Role Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-sm">
              GIS Web Developer
            </span>
            <span className="px-4 py-2 bg-green-600/20 border border-green-400/30 rounded-full text-sm">
              Spatial Analyst
            </span>
            <span className="px-4 py-2 bg-purple-600/20 border border-purple-400/30 rounded-full text-sm">
              Web Mapper
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="space-x-4 animate-fade-in-delay-2">
            <ScrollLink
              to="projects"  
              spy={true}
              smooth={true}
              offset={-70}  // Adjust this value based on your navbar height
              duration={800}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
            >
              View Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}  // Adjust this value based on your navbar height
              duration={1000}
              className="inline-block bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-lg transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
            >
              Contact Me
            </ScrollLink>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-20 text-center text-sm text-gray-400">
          <p>Specializing in Geospatial Web Applications & Analysis</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
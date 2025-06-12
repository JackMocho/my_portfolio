import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Spatio-Temporal Assessment of Human Thermal Comfort",
      subtitle: "Case Study: Mogotio (Baringo County)",
      description: "Analyzing thermal comfort variations using remote sensing data and meteorological parameters to assess human comfort dynamics across different seasons and locations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 2,
      title: "Assessment of Forest Degradation",
      subtitle: "Case Study: Mau Forest Complex",
      description: "Quantifying forest cover changes using Google Earth Engine, JavaScript, and multi-temporal satellite imagery to monitor ecosystem health and degradation patterns.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
        </svg>
      ),
      color: "from-emerald-500 to-green-700"
    },
    {
      id: 3,
      title: "Modelling of Water Stress",
      subtitle: "Machine Learning Hybrid Models",
      description: "Predicting water stress using ensemble machine learning techniques (Random Forest, ANN, SVM) integrated with hydrological and climatic datasets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-700"
    }
  ];

  return (
    <div id="projects" className="relative min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white overflow-hidden">
      {/* Geospatial Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-cyan-400 rounded-full"></div>
        <div className="absolute bottom-32 right-24 w-80 h-80 border-2 border-emerald-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 border-2 border-amber-400 rounded-full"></div>
        
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-grid-pattern bg-cover opacity-30"></div>
        
        {/* Satellite Icon */}
        <div className="absolute top-10 right-16 animate-float">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
            Featured Research Projects
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-slate-300">
            Advanced spatial analysis projects integrating remote sensing, machine learning, 
            and environmental science for sustainable development
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`bg-gradient-to-br ${project.color} rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-slate-700/50`}
            >
              <div className="p-6">
                <div className="bg-slate-900/30 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {project.icon}
                </div>
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-amber-200 font-medium mb-4">{project.subtitle}</p>
                <p className="text-slate-200 mb-6">{project.description}</p>
                
                <div className="flex items-center mt-8 pt-4 border-t border-slate-500/30">
                  <div className="bg-slate-900/50 rounded-lg px-3 py-1 text-sm font-medium">
                    <span className="text-cyan-300">Geospatial Tech</span>
                  </div>
                  <div className="ml-2 bg-slate-900/50 rounded-lg px-3 py-1 text-sm font-medium">
                    <span className="text-emerald-300">Remote Sensing</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-16 text-center text-slate-400">
          <p> Maximizing Geospatial technology with Remote sensing </p>
        </footer>
      </div>
    </div>
  );
};

export default Projects;
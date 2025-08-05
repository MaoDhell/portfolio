import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import wallpaperDev from '../assets/images/gato.png';
import TechMarquee from '../components/TechMarquee';
import devFrame from '../assets/borders/dev.svg';
import Lottie from 'lottie-react';
import filterAnimation from '../assets/animations/filter.json';
import { mockProjectsDev, technologies, projectTypes } from '../data/mockProjectsDev.js';

const SoftwareDev = () => {
  const { t } = useTranslation();
  const [selectedTech, setSelectedTech] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const DevFrame = ({ children, className = "" }) => (
    <div className={`relative w-70 h-86 box-border ml-16 ${className}`}>
      <img 
        src={devFrame} 
        alt="Dev Frame" 
        className="absolute inset-0 w-full h-full object-fill"
        style={{ 
          filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5)) drop-shadow(0 0 20px rgba(255, 0, 255, 0.3))',
          zIndex: 1,
          transform: 'scale(1.5)', 
          transformOrigin: 'center'
        }}
      />
      <div className="relative z-10 h-full  overflow-hidden">
        {children}
      </div>
    </div>
  );

  // filtro con animación Lottie
  const FilterIcon = () => (
    <div className="w-12 h-12 relative">
      <Lottie 
        animationData={filterAnimation}
        loop={true}
        autoplay={true}
        className="w-8 h-8"
        style={{ 
          filter: 'invert(1)', 
        }}
      />
    </div>
  );

  // Función simple para obtener la traducción
  const getProjectTypeLabel = (type) => {
    const translations = {
      'All': t('projectsType.all'),
      'Aplicaciones Web': t('projectsType.webApps'),
      'Videojuegos': t('projectsType.games'),
      'Diseños 3D': t('projectsType.3dDesign'),
      'Interfaces UI': t('projectsType.uiInterfaces'),
      'Productos digitales': t('projectsType.digitalProducts'),
      'Proyectos de clase': t('projectsType.academic'),
      'Freelance': t('projectsType.freelance'),
      'Personales': t('projectsType.openSource')
    };
    return translations[type] || type;
  };

  const filteredProjects = useMemo(() => {
    const projects = mockProjectsDev(t);
    return projects.filter(project => {
      const techMatch = selectedTech === 'All' || project.technologies.includes(selectedTech);
      const typeMatch = selectedType === 'All' || project.type === selectedType;
      return techMatch && typeMatch;
    });
  }, [selectedTech, selectedType, t]);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className="min-h-screen text-graylight relative overflow-x-hidden">
      <section id="soft-hero" className="h-[70vh] flex items-center justify-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={wallpaperDev} 
            alt="Background" 
            className="absolute top-0 left-0 w-full h-full object-cover object-[25%_95%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-90 via-dark-50 to-dark-90" />
        </div>
        {/*iconos de la izquierda*/}
        <div className="absolute right-8 md:left-[10rem] z-10 flex flex-col md:flex-col gap-8">
          <p className="text-white leading-normal space-y-1 mr-[6rem]">
            {t('softDev.subtitle').split('/n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="https://github.com/MaoDhell" target="_blank" rel="noopener noreferrer" aria-label="GitHub" 
              className="group w-10 h-10 border-2 border-red-600 flex items-center justify-center rounded-md bg-dark/50 text-2xl transition">
              <FaGithub style={{ color: '#D5182E' }} className="hover:text-accent" />
            </a>
            <a href="https://www.linkedin.com/in/laura-escobar-ruiz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-10 h-10 border-2 border-red-600 text-primary flex items-center justify-center
              rounded-md hover:text-accent bg-dark/50 text-2xl transition">
              <FaLinkedin style={{ color: '#D5182E' }} className="hover:text-accent"/>
            </a>
          </div>
        </div>
        {/*texto de la derecha*/}
        <div className="container mx-auto px-4 relative z-10 ">
          <div className="text-right text-white text-4xl md:text-6xl leading-normal space-y-1 mr-[6rem]">
            <h1 className="text-5xl md:text-7xl font-bold mb-9 font-mochiy " style={{lineHeight: '1.5'}} >
              {t('softDev.title').split('/n').map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </h1>
          </div>
        </div>
      </section>
      
      {/* Tools */}
      <TechMarquee className="" />
      
      {/* Filters Section */}
      <section className="px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Filter Header */}
          <div className=" items-start gap-4 mb-8">
            <h2 className="text-5xl font-bold font-genos text-white">{t("filters.title")}</h2>   
          </div>
          {/* Filter Controls */}
          <div className="flex items-center justify-between mb-12 gap-4">
            {/* Left side - Filter icon and controls */}
            <div className="flex items-center gap-4">
              {/* Filter Icon */}
              <div className="flex items-center justify-center w-12 h-12 ">
                <FilterIcon className="w-5 h-5 text-cyan-400" />
              </div>

              {/* Technology Filter */}
              <div>
                <label className="block text-xs font-medium mb-1 text-white">{t("filters.techLabel")}</label>
                <select 
                  value={selectedTech}
                  onChange={(e) => {
                    setSelectedTech(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-40 px-3 py-2 bg-dark/50 border border-purple-500/30 rounded-lg text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                >
                  {technologies.map(tech => (
                    <option key={tech} value={tech} className="bg-dark">
                      {tech}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Type Filter */}
              <div>
                <label className="block text-xs font-medium mb-1 text-white">{t("filters.typeLabel")}</label>
                <select 
                  value={selectedType}
                  onChange={(e) => {
                    setSelectedType(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-40 px-3 py-2 bg-dark/50 border border-purple-500/30 rounded-lg text-white text-sm focus:border-purple-400 focus:outline-none transition-colors"
                >
                  {projectTypes.map(type => (
                    <option key={type} value={type} className="bg-dark">
                      {getProjectTypeLabel(type)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right side - Project count */}
            <div className="text-2xl font-semibold font-genos text-white bg-clip-text text-transparent whitespace-nowrap">
              {filteredProjects.length} {t("filters.title")}
            </div>
          </div>
          {/* Neon divider */}
          <div className="relative mb-40 -mt-8 h-8 overflow-hidden">
            <div 
              className="absolute top-1/2 left-0 right-0 h-0.5 rounded-full transform -translate-y-1/2 neon-divider"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(231, 107, 151, 0.4), rgba(8, 196, 214, 0.8), rgba(231, 107, 151, 0.4), transparent)',
                boxShadow: `
                  0 0 8px rgba(8, 196, 214, 0.4),
                  0 0 16px rgba(8, 196, 214, 0.2)
                `
              }}
            />
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 h-3 w-6 rounded-full"
              style={{
                background: 'radial-gradient(ellipse, rgba(8, 196, 214, 0.6) 0%, rgba(8, 196, 214, 0.2) 60%, transparent 80%)',
                animation: 'wave-move 4s ease-in-out infinite',
                left: '-4%'
              }}
            />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-60 mb-40">
            {currentProjects.map(project => (
              <DevFrame key={project.id}>
                <div className="flex flex-col h-full mx-6">
                  {/* Project Image */}
                  <div className="w-full h-40 rounded-lg mb-4 overflow-hidden ">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-dark flex items-center justify-center">
                        <span className=" text-pink text-sm font-medium"> 猫D </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Project Info */}
                  <h3 className="font-bold text-lg mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-5 mt-auto">
                    <button 
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink hover:from-purple-700 hover:to-pink-700 px-2 py-3 rounded-lg text-sm font-medium transition-all"
                    >
                      GitHub
                    </button>
                  </div>
                </div>
              </DevFrame>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              {/* Previous Arrow */}
              <button 
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="text-2xl text-red-500 hover:text-red-400 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
              >
                «
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-8 h-8 rounded-full text-sm font-bold transition-all ${
                    page === currentPage 
                      ? 'bg-red-600 text-white' 
                      : 'text-red-500 hover:text-red-400'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Dots if needed */}
              {totalPages > 5 && (
                <span className="text-gray-500">...</span>
              )}

              {/* Next Arrow */}
              <button 
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="text-2xl text-red-500 hover:text-red-400 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
              >
                »
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default SoftwareDev;
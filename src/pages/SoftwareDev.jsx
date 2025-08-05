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
    <div className={`relative w-full max-w-sm mx-auto h-[400px] sm:h-[500px] box-border ${className}`}>
      <img 
        src={devFrame} 
        alt="Dev Frame" 
        className="absolute inset-0 w-full h-full object-fill"
        style={{ 
          filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5)) drop-shadow(0 0 20px rgba(255, 0, 255, 0.3))',
          zIndex: 1,
          transform: 'scale(1.1) sm:scale(1.5)', 
          transformOrigin: 'center'
        }}
      />
      <div className="relative z-10 h-full overflow-hidden flex items-center justify-center" style={{ 
        padding: '50px 25px 40px 25px' // Padding con más margen
      }}>
        <div className="w-full max-w-[200px] sm:max-w-[250px]">
          {children}
        </div>
      </div>
    </div>
  );

  // filtro con animación Lottie
  const FilterIcon = () => (
    <div className="w-8 h-8 sm:w-12 sm:h-12 relative">
      <Lottie 
        animationData={filterAnimation}
        loop={true}
        autoplay={true}
        className="w-6 h-6 sm:w-8 sm:h-8"
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
      <section id="soft-hero" className="h-[70vh] flex items-center justify-center px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={wallpaperDev} 
            alt="Background" 
            className="absolute top-0 left-0 w-full h-full object-cover object-[25%_95%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-90 via-dark-50 to-dark-90" />
        </div>
        
        {/* Layout móvil completamente diferente */}
        <div className="container mx-auto px-4 relative z-10 w-full">
          {/* Móvil: Layout vertical centrado */}
          <div className="block sm:hidden text-center text-white">
            <h1 className="text-3xl font-bold mb-4 font-mochiy leading-tight">
              {t('softDev.title').split('/n').map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </h1>
            <p className="text-sm leading-relaxed mb-6 max-w-xs mx-auto">
              {t('softDev.subtitle').split('/n').map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/MaoDhell" target="_blank" rel="noopener noreferrer" aria-label="GitHub" 
                className="w-10 h-10 border-2 border-red-600 flex items-center justify-center rounded-md bg-dark/50 text-xl transition">
                <FaGithub style={{ color: '#D5182E' }} className="hover:text-accent" />
              </a>
              <a href="https://www.linkedin.com/in/laura-escobar-ruiz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-10 h-10 border-2 border-red-600 text-primary flex items-center justify-center
                rounded-md hover:text-accent bg-dark/50 text-xl transition">
                <FaLinkedin style={{ color: '#D5182E' }} className="hover:text-accent"/>
              </a>
            </div>
          </div>

          {/* Desktop: Layout original */}
          <div className="hidden sm:flex items-center justify-between">
            {/* Iconos de la izquierda */}
            <div className="flex flex-col gap-8">
              <p className="text-white leading-normal space-y-1">
                {t('softDev.subtitle').split('/n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </p>
              <div className="flex gap-4">
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
            
            <div className="text-right text-white">
              <h1 className="text-5xl md:text-7xl font-bold font-mochiy leading-relaxed">
                {t('softDev.title').split('/n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </h1>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tools */}
      <TechMarquee className="" />
      
      {/* Filters Section */}
      <section className="px-4 sm:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Filter Header */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-5xl font-bold font-genos text-white text-center sm:text-left">
              {t("filters.title")}
            </h2>   
          </div>
          
          {/* Filter Controls - Responsive */}
          <div className="mb-8 sm:mb-12">
            {/* Móvil: Layout vertical */}
            <div className="block sm:hidden space-y-4">
              <div className="flex items-center justify-center gap-2">
                <FilterIcon />
                <span className="text-lg font-semibold text-white">
                  {filteredProjects.length} {t("filters.title")}
                </span>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white text-center">
                    {t("filters.techLabel")}
                  </label>
                  <select 
                    value={selectedTech}
                    onChange={(e) => {
                      setSelectedTech(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full px-3 py-3 bg-dark/50 border border-purple-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    {technologies.map(tech => (
                      <option key={tech} value={tech} className="bg-dark">
                        {tech}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white text-center">
                    {t("filters.typeLabel")}
                  </label>
                  <select 
                    value={selectedType}
                    onChange={(e) => {
                      setSelectedType(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full px-3 py-3 bg-dark/50 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors"
                  >
                    {projectTypes.map(type => (
                      <option key={type} value={type} className="bg-dark">
                        {getProjectTypeLabel(type)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Desktop: Layout horizontal original */}
            <div className="hidden sm:flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12">
                  <FilterIcon className="w-5 h-5 text-cyan-400" />
                </div>

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

              <div className="text-2xl font-semibold font-genos text-white whitespace-nowrap">
                {filteredProjects.length} {t("filters.title")}
              </div>
            </div>
          </div>

          {/* Neon divider */}
          <div className="relative mb-16 sm:mb-20 -mt-4 sm:-mt-8 h-8 overflow-hidden">
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

          {/* Projects Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-x-12 sm:gap-y-40 mb-16 sm:mb-40">
            {currentProjects.map(project => (
              <DevFrame key={project.id}>
                <div className="flex flex-col h-full">
                  {/* Project Image */}
                  <div className="w-full h-28 sm:h-32 rounded-lg mb-3 overflow-hidden flex-shrink-0">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-dark flex items-center justify-center">
                        <span className="text-pink text-xs font-medium"> 猫D </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Project Info */}
                  <h3 className="font-bold text-sm sm:text-base mb-2 text-white leading-tight flex-shrink-0 text-left">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs mb-4 text-left leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies - Alineadas a la izquierda */}
                  <div className="flex flex-wrap justify-start gap-1 mb-8 flex-shrink-0">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-1.5 py-0.5 bg-purple-600/20 text-purple-300 text-xs rounded leading-none whitespace-nowrap">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="mt-auto flex justify-center flex-shrink-0">
                    <button 
                      onClick={() => window.open(project.github, '_blank')}
                      className="bg-gradient-to-r from-purple-600 to-pink hover:from-purple-700 hover:to-pink-700 px-6 py-2 rounded-lg text-sm font-medium transition-all"
                    >
                      GitHub
                    </button>
                  </div>
                </div>
              </DevFrame>
            ))}
          </div>

          {/* Pagination - Responsive */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 px-4">
              {/* Previous Arrow */}
              <button 
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="text-xl sm:text-2xl text-red-500 hover:text-red-400 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors p-2"
              >
                «
              </button>

              {/* Page Numbers - Mostrar menos en móvil */}
              <div className="flex gap-1 sm:gap-2 overflow-x-auto max-w-xs sm:max-w-none">
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full text-xs sm:text-sm font-bold transition-all flex-shrink-0 ${
                        pageNum === currentPage 
                          ? 'bg-red-600 text-white' 
                          : 'text-red-500 hover:text-red-400'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              {/* Next Arrow */}
              <button 
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="text-xl sm:text-2xl text-red-500 hover:text-red-400 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors p-2"
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
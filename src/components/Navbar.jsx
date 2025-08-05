import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/icons/logo512.png';
import Lottie from "lottie-react";
import menuAnimation from "../assets/animations/menu-hamburguer.json";
import dropdownAnimation from "../assets/animations/dropdown.json";
import { useEffect } from 'react';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const lottieRef = useRef();
  const dropdownLottieRef = useRef();
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleNav = (item) => {
    if (menuOpen && lottieRef.current) {
      lottieRef.current.playSegments([80, 159], true);
    }

    setMenuOpen(false);
    setPortfolioDropdownOpen(false);

    if (item.path === '/about') {
      if (location.pathname === '/') {
        scrollToSection('about-me');
      } else {
        navigate('/', { state: { scrollTo: 'about-me' } });
      }
    } else if (item.path === '/contact') {
      if (location.pathname === '/') {
        scrollToSection('contact-section');
      } else {
        navigate('/', { state: { scrollTo: 'contact-section' } });
      }
    } else if (item.path === '/portfolio') {
      if (location.pathname === '/') {
        scrollToSection('portfolio-home');
      } else {
        navigate('/', { state: { scrollTo: 'portfolio-home' } });
      }
    } else if (item.path === '/') {
      if (location.pathname === '/') {
        scrollToSection('home-hero');
      } else {
        navigate('/');
      }
    } else {
      navigate(item.path);
    }
  };

  const handlePortfolioClick = () => {
    // Solo hacer scroll a la sección portfolio, sin manejar dropdown
    if (location.pathname === '/') {
      scrollToSection('portfolio-home');
    } else {
      navigate('/', { state: { scrollTo: 'portfolio-home' } });
    }
  };

  const handleMobilePortfolioClick = () => {
  setPortfolioDropdownOpen(!portfolioDropdownOpen);
  if (dropdownLottieRef.current) {
    if (!portfolioDropdownOpen) {
      dropdownLottieRef.current.setDirection(1);
      dropdownLottieRef.current.play();
    } else {
      dropdownLottieRef.current.setDirection(-1);
      dropdownLottieRef.current.play();
    }
  }
};

  const handlePortfolioHover = (isHovering) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }

    if (isHovering) {
      // Abrir inmediatamente
      setPortfolioDropdownOpen(true);
      if (dropdownLottieRef.current) {
        dropdownLottieRef.current.setDirection(1);
        dropdownLottieRef.current.play();
      }
    } else {
      // Cerrar con delay
      const timeout = setTimeout(() => {
        setPortfolioDropdownOpen(false);
        if (dropdownLottieRef.current) {
          dropdownLottieRef.current.setDirection(-1);
          dropdownLottieRef.current.play();
        }
      }, 300); 
      setHoverTimeout(timeout);
    }
  };

  const handleDropdownOption = (optionPath) => {
    if (hoverTimeout) {
    clearTimeout(hoverTimeout);
    setHoverTimeout(null);
    }

    // Cerrar dropdown inmediatamente
    setPortfolioDropdownOpen(false);
    setMenuOpen(false);
    
    if (dropdownLottieRef.current) {
      dropdownLottieRef.current.setDirection(-1);
      dropdownLottieRef.current.play();
    }

    

    // Navegar
    navigate(optionPath);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home-hero', path: '/' },
        { id: 'about-me', path: '/about' },
        { id: 'portfolio-home', path: '/portfolio' },
        { id: 'contact-section', path: '/contact' },
      ];

      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.path);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const menuHamburguer = () => {
    setMenuOpen(!menuOpen);
    setPortfolioDropdownOpen(false);
    if (lottieRef.current) {
      const instance = lottieRef.current;
      if (!menuOpen) {
        instance.playSegments([0, 80], true); // de hamburguesa a X
      } else {
        instance.playSegments([80, 159], true); // de X a hamburguesa
      }
    }
  };

  const navItems = [
    { path: '/', label: <span className="font-genos">{t('nav.home', 'INICIO')}</span> },
    { path: '/about', label: <span className="font-genos">{t('nav.about', 'SOBRE MI')}</span> },
    { path: '/portfolio', label: <span className="font-genos">{t('nav.projects', 'PORTAFOLIO')}</span>, hasDropdown: true },
    { path: '/contact', label: <span className="font-genos">{t('nav.contact', 'CONTACTA ME')}</span> }
  ];

  const portfolioOptions = [
    { path: '/portfolio/software', label: 'Software' },
    { path: '/portfolio/visual', label: 'Desarrollo Visual' }
  ];

  return (
    <nav className="bg-dark/5 text-light fixed w-full z-50 py-4 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <nav className="flex items-center gap-12">
            <button
              className="flex items-center group mr-12"
              onClick={() => handleNav({ path: '/' })}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              aria-label="Go to home"
            >
              <img
                src={logo}
                alt="猫D Logo"
                className="h-14 transition-transform group-hover:rotate-12"
              />
            </button>

            {/* Botón hamburguesa (solo visible en mobile) */}
            <div className="md:hidden">
              <button onClick={menuHamburguer} aria-label="Toggle menu">
                <Lottie
                  lottieRef={lottieRef}
                  animationData={menuAnimation}
                  loop={false}
                  autoplay={false}
                  className="w-10 h-10"
                />
              </button>
            </div>

            {/* Menú móvil */}
            {menuOpen && (
              <div className="absolute top-20 right-5 bg-dark p-4 rounded shadow-lg z-50">
                {navItems.map((item) => (
                  <div key={item.path} className="flex flex-col">
                    <button
                      onClick={() => item.hasDropdown ? handleMobilePortfolioClick() : handleNav(item)}
                      className={`relative px-1 py-2 text-white transition-all duration-300 text-left
                        ${(location.pathname === item.path || 
                          (item.path === '/about' && location.pathname === '/' && location.hash === '#about-me') || 
                          (item.path === '/contact' && location.pathname === '/' && location.hash === '#contact-section')) ? 'font-bold' : 'font-medium'}`}
                    >
                      <div className="flex items-center justify-between">
                        {item.label}
                        {item.hasDropdown && (
                          <Lottie
                            lottieRef={dropdownLottieRef}
                            animationData={dropdownAnimation}
                            loop={false}
                            autoplay={false}
                            className="w-5 h-5 ml-2"
                          />
                        )}
                      </div>
                    </button>
                    
                    {item.hasDropdown && portfolioDropdownOpen && (
                      <div 
                        className="ml-4 mt-2"
                      >
                        {portfolioOptions.map((option) => (
                          <button
                            key={option.path}
                            onClick={() => 
                              handleDropdownOption(option.path)
                            }
                            className="block w-full text-left px-2 py-1 text-white/80 hover:text-white hover:bg-white/10 rounded transition-all duration-200"
                          >
                            <span className="font-genos">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Menú desktop */}
            <ul className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className={`flex items-center relative ${item.hasDropdown ? 'portfolio-dropdown-container' : ''}`}
                  {...(item.hasDropdown && {
                    onMouseEnter: () => handlePortfolioHover(true),
                    onMouseLeave: () => handlePortfolioHover(false)
                  })}
                >
                  <button
                    onClick={() => item.hasDropdown ? handlePortfolioClick() : handleNav(item)}
                    className={`relative px-1 py-2 text-white transition-all duration-300 flex items-center
                      ${(location.pathname === item.path || 
                        (item.path === '/about' && location.pathname === '/' && location.hash === '#about-me') ||
                        (item.path === '/contact' && location.pathname === '/' && location.hash === '#contact-section')) ? 'font-bold' : 'font-medium'}`}
                    onMouseEnter={() => setHoveredItem(item.path)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <Lottie
                        lottieRef={dropdownLottieRef}
                        animationData={dropdownAnimation}
                        loop={false}
                        autoplay={false}
                        className="w-5 h-5 ml-2"
                      />
                    )}

                    <div 
                      className={`absolute bottom-0 left-0 h-0.5 w-full transition-all duration-300 
                        ${(activeSection === item.path || hoveredItem === item.path) 
                          ? "w-full underline-gradient shadow-glow" 
                          : "w-0 bg-transparent blur-[2px] opacity-70 blur-sm"}`}
                    />

                    {(activeSection === item.path || hoveredItem === item.path) && (
                      <div className="absolute -bottom-0 left-0 w-full h-px bg-teal blur-[2px] opacity-50" />
                    )}
                  </button>

                  {/* Dropdown para desktop */}
                  {item.hasDropdown && portfolioDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-1 bg-dark/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10 min-w-48 z-50"
                      onMouseEnter={() => handlePortfolioHover(true)}
                      onMouseLeave={() => handlePortfolioHover(false)}
                    >
                      {portfolioOptions.map((option) => (
                        <div
                          key={option.path}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleDropdownOption(option.path);
                          }}
                          className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 first:rounded-t-lg last:rounded-b-lg transition-all duration-200 cursor-pointer"
                        >
                          <span className="font-genos pointer-events-none">{option.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
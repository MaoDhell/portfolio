import React from 'react';
import footerLogo from '../assets/icons/Logo-20.png';
import LanguageSelector from './LanguageSelector';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation()
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNav = (item) => {
    if (item.path === '/') {
      if (location.pathname === '/') {
        scrollToSection('home-hero');
      } else {
        navigate('/');
      }
    } else {
      navigate(item.path);
    }
  };

  return (
    <footer className="bg-dark text-light py-4 border-t border-accent">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Layout móvil: todo centrado verticalmente */}
        <div className="flex flex-col items-center space-y-4 md:hidden">
          {/* Logo */}
          <button
            className="flex items-center group"
            onClick={() => handleNav({ path: '/' })}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            aria-label="Go to home"
          >
            <img src={footerLogo} alt="Footer Logo" className="h-16 transition-transform group-hover:rotate-12" />
          </button>

          {/* Texto centrado */}
          <div className="text-center">
            <span className="text-base">{t("footer")}</span>
          </div>

          {/* Iconos sociales y selector de idioma juntos */}
          <div className="flex items-center justify-center space-x-4">
            <a href="https://github.com/MaoDhell" target="_blank" rel="noopener noreferrer" 
               aria-label="GitHub" className="text-primary hover:text-accent text-xl transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/laura-escobar-ruiz/" target="_blank" rel="noopener noreferrer" 
               aria-label="LinkedIn" className="text-primary hover:text-accent text-xl transition">
              <FaLinkedin />
            </a>
            <LanguageSelector inline={true} />
          </div>
        </div>

        {/* Layout tablet y desktop: horizontal */}
        <div className="hidden md:flex md:items-center md:justify-between">
          {/* Logo izquierda */}
          <div className="flex-shrink-0">
            <button
              className="flex items-center group"
              onClick={() => handleNav({ path: '/' })}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              aria-label="Go to home"
            >
              <img src={footerLogo} alt="Footer Logo" className="h-20 lg:h-24 transition-transform group-hover:rotate-12" />
            </button>
          </div>

          {/* Texto centrado */}
          <div className="flex-grow text-center px-4">
            <span className="text-lg">{t("footer")}</span>
          </div>

          {/* Iconos y selector de idioma a la derecha - en línea horizontal */}
          <div className="flex items-center justify-end space-x-4 flex-shrink-0">
            <a href="https://github.com/MaoDhell" target="_blank" rel="noopener noreferrer" 
               aria-label="GitHub" className="text-primary hover:text-accent text-2xl transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/laura-escobar-ruiz/" target="_blank" rel="noopener noreferrer" 
               aria-label="LinkedIn" className="text-primary hover:text-accent text-2xl transition">
              <FaLinkedin />
            </a>
            <LanguageSelector inline={true} />
          </div>
        </div>

        {/* Copyright - siempre centrado en la parte inferior */}
        <div className="text-center mt-4 pt-2 border-t border-accent border-opacity-30">
          <p className="text-xs">© 2025 - Laura D Escobar Ruiz (猫D ). {t("reserved")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
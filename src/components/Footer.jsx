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
    <footer className="bg-dark text-light py-2 border-t border-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-0">
          {/* Logo izquierda */}
          <div className="mb-2 md:mb-0 ml-16 ">
            <button
              className="flex items-center group"
              onClick={() => handleNav({ path: '/' })}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              aria-label="Go to home"
            >
              <img src={footerLogo} alt="Footer Logo" className="h-24 transition-transform group-hover:rotate-12" />
            </button>
          </div>

          {/* Texto centrado */}
          <div className="text-center -mt-6 mb-2 md:mb-0 flex-grow">
            <span className="text-lg">{t("footer")}</span>
          </div>

          {/* Iconos y selector de idioma a la derecha - alineados verticalmente */}
          <div className="flex flex-col items-end space-y-2 mb-8 mr-16">
            <div className="flex space-x-4">
              <a href="https://github.com/MaoDhell" target="_blank" rel="noopener noreferrer" 
                 aria-label="GitHub" className="text-primary hover:text-accent text-2xl transition">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/laura-escobar-ruiz/" target="_blank" rel="noopener noreferrer" 
                 aria-label="LinkedIn" className="text-primary hover:text-accent text-2xl transition">
                <FaLinkedin />
              </a>
            </div>
            <LanguageSelector />
          </div>
        </div>

        {/* Copyright centrado en la parte inferior */}
        <div className="text-center -mt-4">
          <p className="text-xs">© 2025 - Laura D Escobar Ruiz (猫D ). {t("reserved")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
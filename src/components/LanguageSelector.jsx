import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = ({ inline = false }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // posicionamiento relativo
  if (inline) {
    return (
      <div className="relative">
        <select
          onChange={e => changeLanguage(e.target.value)}
          value={i18n.language}
          className="bg-gradient-to-r from-primary to-dark text-graylight border border-primary rounded px-4 py-2 font-genos text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-neon"
        >
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="zh">中文</option>
        </select>
      </div>
    );
  }

  //posicionamiento absoluto
  return (
    <div className="absolute bottom-4 z-50 right-8 opacity-75">
      <select
        onChange={e => changeLanguage(e.target.value)}
        value={i18n.language}
        className="bg-gradient-to-r from-primary to-dark text-graylight border border-primary rounded px-4 py-2 font-genos text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-neon"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
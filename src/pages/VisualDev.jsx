import React from 'react';
import { useTranslation } from 'react-i18next';

const VisualDev = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full flex flex-col items-center gap-8 animate-fade-in">
      <h3 className="font-genos text-3xl text-pink mb-4 drop-shadow-neon">{t('portfolio.visual', 'Visual Dev')}</h3>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ejemplo de proyecto visual */}
        <div className="bg-gradient-to-br from-dark to-graylight border-2 border-pink rounded-2xl p-6 shadow-lg relative overflow-hidden group transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 border-2 border-pink animate-neon-glow pointer-events-none rounded-2xl" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink via-neon to-fuchsia animate-neon-bar" />
          <h4 className="font-mochiy text-xl text-pink mb-2">{t('portfolio.visualProject1', 'Proyecto Visual 1')}</h4>
          <p className="font-inter text-base mb-4">{t('portfolio.visualProject1Desc', 'Descripción breve del proyecto visual.')}</p>
          <a href="#" className="bg-pink hover:bg-neon text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-lg hover:scale-110">{t('portfolio.viewMore', 'Ver más')}</a>
        </div>
        {/* Puedes duplicar este bloque para más proyectos */}
      </div>
    </section>
  );
};

export default VisualDev;

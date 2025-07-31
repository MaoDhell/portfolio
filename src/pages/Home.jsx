import React, { useEffect,useState  } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import wallpaperSaludo from '../assets/images/Wallpapersaludo.png';
import maoImg from '../assets/images/mao.png';
import allImg from '../assets/images/all.png';
import siriusImg from '../assets/images/Sirius.png';
import dhellImg from '../assets/images/Dhell.png';
import { FaGithub,FaLinkedin } from 'react-icons/fa';
import TechMarquee from '../components/TechMarquee';
import maoFrame from '../assets/borders/mao.svg';
import frameStats1 from '../assets/borders/stats 2.svg'
import statsLines from '../assets/borders/stats 4.svg';
import frameStats2 from '../assets/borders/stats 3.svg';
import frameStats3 from '../assets/borders/stats 1.svg';
import frameDev from '../assets/borders/portfolio 1.svg';
import frameVisual from '../assets/borders/portfolio 2.svg';
import contactFrame from '../assets/borders/contact.svg';


const Home = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

   const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor completa todos los campos');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      
      const response = await fetch('https://formspree.io/f/xnnvbnrw', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(t("contact.errorMessage"));
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t("contact.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

 

  return (
    <main className="min-h-screen text-graylight relative overflow-x-hidden">
      {/* Hero Section */}
      <section id="home-hero" className="h-screen flex items-center justify-end px-8 relative overflow-hidden ">
        <div className="absolute inset-0 z-0 ">
              <img 
                src={wallpaperSaludo} 
                alt="Background" 
                className="absolute top-0 left-0 w-full h-full object-cover "
            />
          <div className="absolute inset-100 bg-gradient-to-b from-dark-90 via-dark-50 to-dark-90" />
        </div>
        {/*iconos de la izquierda*/}
        <div className="absolute bottom-8 rigt-8 md:bottom-[10rem] md:left-[10rem] z-10 flex flex-col md:flex-row gap-4">
           <a href="https://github.com/MaoDhell" target="_blank" rel="noopener noreferrer" aria-label="GitHub" 
            className="group w-10 h-10 border-2 border-red-600 flex items-center justify-center rounded-md bg-dark/50 text-2xl transition">
            <FaGithub  style={{ color: '#D5182E' }} className="hover:text-accent" />
          </a>
          <a href="https://www.linkedin.com/in/laura-escobar-ruiz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
           className="w-10 h-10 border-2 border-red-600 text-primary flex items-center justify-center
            rounded-md hover:text-accent bg-dark/50 text-2xl transition"><FaLinkedin style={{ color: '#D5182E' }} className="hover:text-accent"/>
          </a>
        </div>
        {/*texto de la derecha*/}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-right text-white text-4xl md:text-6xl leading-tight space-y-1 mr-[6rem]">
            <h1 className="text-5xl md:text-7xl font-bold mb-9  font-mochiy">
              {t('home.title', "Hi, I'm ").split('/n').map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </h1>
            <p className="text-xl md:text-xl font-genos">
              {t('home.subtitle', 'I develop software like ').split('/n').map((line, index) => (
                <div  className="leading-tight" key={index}>{line}</div>
              ))}
            </p>
            <p className="text-xl md:text-xl font-genos">
              {t('home.subtitle2', 'I illustrate what others can barely imagine.').split('/n').map((line, index) => (
                <div className="leading-tight" key={index}>{line}</div>
              ))}
            </p>
          </div>
        </div>
      </section>
      {/* Tools */}
      <TechMarquee />
      {/* About Me Section */}
      <section id="about-me" className="flex flex-col md:flex-row items-center justify-center px-6 py-8 relative z-10 w-full max-w-7xl mx-auto my-5">
        <div className="flex-1 flex justify-start relative h-fit -ml-[10px]  md:-ml-[5px]">
          <div className="relative w-[350px] h-[350px]">
            <img 
              src={maoFrame} 
              alt="Cyber Frame" 
              className="w-full h-full object-contain z-20 shadow-2xl pointer-events-none"
            />
            <img src={maoImg} 
              alt="Laura" 
              className="absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] object-cover z-30 rounded-lg"
              />   
          </div>
        </div>
        <div className="flex-[2] font-inter text-lg leading-relaxed max-w-2xl md:pl-0.5">
          <h2 className="font-mochiy text-4xl white-text mb-6">{t('about.title')}</h2>
          <div className='space-y-4'>
            <p>{t('about.desc1')}</p>
            <p className="mt-4">{t('about.desc2')}</p>
          </div>
        </div>
      </section>    
      {/* Stats + Sirius Section */}
      <section className="hidden md:flex relative w-full py-24 my-10 overflow-x-hidden">
        <div className="absolute inset-0 w-screen bg-[#131212ff] left-1/2 -translate-x-1/2 h-[80%] top-1/2 -translate-y-1/2">
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[500px] md:h-[650px] -mx-8 overflow-visible">
            <img 
              src={allImg} 
              alt={t('about.avatarAlt')}
              className="absolute top-1/2 left-1/2 w-auto h-[115%] max-w-none -translate-x-1/2 -translate-y-[50%] pointer-events-none"
              style={{
                minWidth: "100%",
                minHeight: "100%",
                objectFit: "contain" 
              }}
            />
            <img
              src={siriusImg} 
              alt={t('about.siriusAlt')}
              className="absolute top-1/2 left-1/2 w-auto h-[40%] max-w-none -translate-x-[-110%] z-20 -translate-y-[70%] pointer-events-none"
              style={{
                minWidth: "40%",
                minHeight: "40%",
                objectFit: "contain" 
              }}
            />
            <img 
              src={statsLines} 
              alt="Cyber Frame" 
              className="absolute top-1/2 left-1/2 w-auto h-[85%] max-w-none -translate-x-[50%] -translate-y-[60%] pointer-events-none"
              style={{
                minWidth: "50%",
                minHeight: "50%",
                objectFit: "contain" 
              }}
            />
            
            {/* Frame 1 */}
            <img 
              src={frameStats1} 
              alt="Cyber Frame" 
              className="absolute top-1/2 left-1/2 w-auto h-[50%] max-w-none -translate-x-[135%] -translate-y-[100%] pointer-events-none"
              style={{
                minWidth: "50%",
                minHeight: "50%",
                objectFit: "contain" 
              }}
            />
            {/* Texto para Frame 1 */}
              <div className="text-light text-left transform translate-y-[23%] translate-x-[-158%] justify-start">
                <h3 className='font-genos text-2xl mb-2'><span className="font-bold">{t('aboutStats.name')}</span> <span className="font-bold">{t('aboutStats.nickname')}</span></h3>
                <p className='font-inter mb-1'><span className="font-bold">{t('aboutStats.typeLabel')}</span>: {t('aboutStats.type')}</p>
                <p className='font-inter mb-1'><span className='font-bold'>{t('aboutStats.roleLabel')}</span>: {t('aboutStats.role')}</p>
                <p className='font-inter mb-1 ml-8'><span className='font-bold'>{t('aboutStats.mainClassLabel')}</span>: {t('aboutStats.mainClass')}</p>
                <p className='font-inter mb-2 ml-8'><span className='font-bold'>{t('aboutStats.subClassLabel')}</span>: {t('aboutStats.subClass')}</p>
                <p className='font-inter mb-1'><span className='font-bold'>{t('aboutStats.quoteLabel')}</span>: {t('aboutStats.quote').split('/n').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </p>
              </div>
            
            
            {/* Frame 2 */}
            <img 
              src={frameStats2} 
              alt="Cyber Frame" 
              className="absolute top-1/2 left-1/2 w-auto h-[35%] max-w-none -translate-x-[130%] -translate-y-[-35%] pointer-events-none"
              style={{
                minWidth: "30%",
                minHeight: "30%",
                objectFit: "contain" 
              }}
            />
            {/* Texto para Frame 2 */}
            <div className="absolute top-1/2 left-1/2 w-auto h-[35%] max-w-none -translate-x-[30%] -translate-y-[-50%] pointer-events-none flex items-center justify-center"
              style={{
                minWidth: "30%",
                minHeight: "30%",
              }}>
              <div className="text-light text-left transform translate-y-[-19%] translate-x-[-158%] justify-start">
                <h3 className='font-genos text-2xl mb-2 font-bold'>{t('aboutStats.statsTitle')}</h3>                
                <div className=" font-inter">
                  {Object.entries(t('aboutStats.stats', { returnObjects: true })).map(([key, stat]) => (
                    <div key={key} className="flex items-center">
                      <span className="w-40 mr-3">{stat.label}:</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span 
                            key={star}
                            className={`
                              text-xl mx-0.5
                              ${star <= stat.value 
                                ? 'text-[#DAFF00]' 
                                : 'text-gray-500'
                              }
                            `}
                            style={{
                              textShadow: star <= stat.value ? '0 0 2px rgba(218, 255, 0, 0.7)' : 'none'
                            }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Frame 3  */}
            <img 
              src={frameStats3} 
              alt="Cyber Frame"
              className="absolute top-1/2 left-1/2 w-auto h-[50%] max-w-none -translate-x-[-37%] -translate-y-[-3%] pointer-events-none"
              style={{
                minWidth: "50%",
                minHeight: "50%",
                objectFit: "contain" 
              }}
            />
            {/* Texto para Frame 3 */}
            <div className="absolute top-1/2 left-1/2 w-auto h-[50%] max-w-none -translate-x-[-37%] -translate-y-[-3%] pointer-events-none flex items-center justify-center"
              style={{
                minWidth: "50%",
                minHeight: "50%",
              }}>
              <div className="text-light text-left transform translate-y-[8%] translate-x-[100%]">
                <h3 className='font-genos text-3xl mb-2 font-bold tracking-wide'>{t('aboutStats.hobbiesTitle')}</h3>
                
                <div className="font-inter mr-4 ml-4 w-full">
                  {t('aboutStats.hobbies', { returnObjects: true }).map((hobby, index) => (
                    <div key={index} className="flex items-start mb-0.5">
                      <span className="text-[#DAFF00] mr-2 ">•</span>
                      <span className="text-sm whitespace-nowrap leading-tight">
                        {hobby}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sirius Frame -*/}
            <img 
              src={maoFrame} 
              alt="Cyber Frame" 
              className="absolute top-1/2 left-1/2 w-auto h-[30%] max-w-none -translate-x-[-255%] -translate-y-[155%] pointer-events-none"
              style={{
                minWidth: "20%",
                minHeight: "20%",
                objectFit: "contain" 
              }}
            />
            {/* Texto para Sirius Frame */}
            <div className="absolute top-1/2 left-1/2 w-auto h-[30%] max-w-none -translate-x-[-255%] -translate-y-[140%] pointer-events-none flex items-center justify-center"
              style={{
                minWidth: "20%",
                minHeight: "20%",
              }}>
              <div className="text-white text-left transform translate-y-[-20%] translate-x-[88%] justify-start">
                <div className="mb-0.5">
                  <h3 className="font-genos text-2xl font-bold mb-2">{t('aboutStats.siriusTitle')}</h3>
                  <p className="font-inter">
                    <span className="font-bold text-xs ">{t('aboutStats.siriusAbout.siriusTypeLabel')}: </span>
                    {t('aboutStats.siriusAbout.siriusType')}
                  </p>
                </div>

                {/* Modo/Rol */}
                <div className="mb-3">
                  <p className="font-inter italic text-xs">
                    {t('aboutStats.siriusAbout.siriusRoleLabel')}
                  </p>
                </div>

                {/* Estadísticas con estrellas */}
                <div className="mx-auto w-fit">
                  {Object.entries(t('aboutStats.siriusAbout.siriusStats', { returnObjects: true })).map(([key, stat]) => (
                    <div key={key} className="flex items-center mb-0">
                      <span className="font-inter font-bold w-24 text-left text-xs">{stat.label}:</span>
                      <div className="flex ml-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span 
                            key={star} 
                            className={`text-xs ${star <= stat.value ? 'text-[#DAFF00]' : 'text-gray-500'}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Portfolio section */}
      <section id="portfolio-home" className="flex flex-col items-center justify-center px-4 py-4 relative z-10 w-full max-w-7xl mb-10 -mt-5 mx-auto my-5">
        <h2 className="font-mochiy text-5xl text-light mb-12 text-right tracking-wide pr-[50rem]">{t('portfolios.title')}</h2>   
        <div className="flex flex-col lg:flex-row items-center justify-center gap-24 w-full">
          {/* Card Software Dev */}
          <div className="relative w-full  lg:max-w-md transform -rotate-3 hover:rotate-0 transition-transform duration-300"
            style={{maxWidth: '680px'}}>
            <img 
              src={frameDev} 
              alt="Software Dev Frame" 
              className="w-full h-auto object-contain pointer-events-none"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-24 pt-12 pb-16">
              <div className="text-left ">  
                <div className="w-full max-w-md h-12 mb-1 flex items-center justify-center">
                  <span className="text-sm font-genos typing-animation">- LOADING PORTFOLIO_SOFTWARE...[OK]<span className="blink">_</span></span>                  
                </div>              
                {/* Título  */}
                <h3 className="text-3xl font-bold text-white mb-5">{t('portfolios.softTitle')} </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{t('portfolios.softDesc')} </p>
              </div>
              <div className="mt-6">
                <button 
                className="px-6 py-2 bg-gradient-to-r from-pink to-neon  hover:from-pink-600 hover:to-neon-500 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                onClick={() => navigate('/portfolio/software')}
                >
                  {t('portfolios.buttonSoft')}
                </button>
              </div>
            </div>
          </div>

          {/* Card Visual Dev */}
          <div className="relative w-full max-w-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"
            style={{maxWidth: '330px'}}>
            <img 
              src={frameVisual} 
              alt="Visual Dev Frame" 
              className="w-full h-auto object-contain pointer-events-none"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 px-10">
              <div className="text-center flex-1 flex flex-col justify-center">                
                {/* Título  */}
                <h3 className="text-2xl font-bold text-white mb-4">{t('portfolios.visualTitle')}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  {t('portfolios.visualDesc')}
                </p>
              </div>
              <div className="mt-auto mb-2">
                <button className="px-6 py-2 bg-gradient-to-r from-green-400 to-yellow-400 hover:from-green-500 hover:to-yellow-500 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg text-sm">
                  {t('portfolios.buttonVisual')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact-section" className="min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl">
          <div className="relative">
            <div 
              className="w-full h-auto"
              style={{
                backgroundImage: `url(${contactFrame})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                aspectRatio: '2/1',
                minHeight: '600px'
              }}
            ></div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex">
              <div className="flex-1 flex flex-col items-center justify-center relative px-8">
                {/* Title positioned higher */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/3">
                  <h1 className="text-4xl font-bold text-white">
                    {t('contact.title')}
                  </h1>
                </div>
                
                {/* Text in upper right area */}
                <div className="absolute top-28 -right-4 text-right">
                  <p className="text-pink-200 text-xs leading-tight">
                    {t("contact.subtitle").split('/n').map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </p>
                </div>
                
                <div className="w-[80%] h-[80%] flex items-start justify-center mt-16 -ml-16">
                  <img src={dhellImg} alt="Dhell" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Contact form */}
              <div className="flex-1 flex flex-col justify-center items-center px-28">
                <div className="backdrop-blur-sm rounded-2xl p-8 w-full max-w-sm mx-auto">
                  <h2 className="text-3xl font-bold text-pink-300 mb-6 text-center">
                    {t('contact.title', 'Contáctame')}
                  </h2>
                  
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="text-green-400 text-lg mb-2">✓ {t("contact.successMessage")}</div>
                      <p className="text-pink-200">{t("contact.successMessage")}</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder={t("contact.form.nameLabel")}
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-transparent border border-pink-500/50 rounded-lg text-white placeholder-pink-300/70 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-500/30 transition-all"
                        />
                      </div>
                      
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder={t("contact.form.emailLabel")}
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-transparent border border-pink-500/50 rounded-lg text-white placeholder-pink-300/70 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-500/30 transition-all"
                        />
                      </div>
                      
                      <div>
                        <textarea
                          name="message"
                          placeholder={t("contact.form.messageLabel")}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows="4"
                          className="w-full px-4 py-3 bg-transparent border border-pink-500/50 rounded-lg text-white placeholder-pink-300/70 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-500/30 transition-all resize-none"
                        ></textarea>
                      </div>
                      
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full py-3 px-6 bg-gradient-to-r from-pink to-neon text-white font-semibold rounded-lg hover:from-fuchsia hover:to-neonYellow focus:outline-none focus:ring-2 focus:ring-pink-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 shadow-lg"
                      >
                        {isSubmitting ? "Sending..." : t("contact.form.submitButton")}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

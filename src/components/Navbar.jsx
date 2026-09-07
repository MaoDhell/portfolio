import Logo from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import {useLocation,useNavigate} from 'react-router-dom'

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();


 

    return (
        <div className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-sm bg-[var(--color-black)]/20">
            <nav className="max-w-7xl mx-auto px-6 grid items-center" style={{gridTemplateColumns: '1fr auto 1fr'}}>
                <button 
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} 
                    aria-label="Go to home"
                    className="justify-self-start"
                >
                    <img src={Logo} alt="Logo" className="h-12" />
                </button>
                
                <ul className="flex gap-10 list-none justify-center">
                    <li><a href="#home" className="text-white hover:text-[#08C4D6] transition-colors font-subtitle text-base tracking-widest uppercase">{t('nav.home')}</a></li>
                    <li><a href="#about" className="text-white hover:text-[#08C4D6] transition-colors font-subtitle text-base tracking-widest uppercase">{t('nav.about')}</a></li>
                    <li><a href="#projects" className="text-white hover:text-[#08C4D6] transition-colors font-subtitle text-base tracking-widest uppercase">{t('nav.projects')}</a></li>
                    <li><a href="#contact" className="text-white hover:text-[#08C4D6] transition-colors font-subtitle text-base tracking-widest uppercase">{t('nav.contact')}</a></li>
                </ul>

                <div className="flex justify-end">
                    <LanguageSelector inline={true} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
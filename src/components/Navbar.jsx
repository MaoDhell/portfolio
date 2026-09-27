import Logo from '../assets/logo.svg';
import Line from '../assets/frames/navbar.svg';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import {useLocation,useNavigate} from 'react-router-dom'

const Navbar = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const lineClip = 'polygon(0% 0%, 100% 0%, 100% 100.71%, 91.44% 124.10%, 91.66% 110.10%, 85% 52.86%, 42.47% 52.86%, 36.27% 92.43%, 3.6% 92.43%, 0% 114.29%)';
    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-28">
            <div
                className="absolute inset-0 bottom-0 left-0 w-full h-20 overflow-hidden pointer-events-none z-0"
                style={{ clipPath: lineClip }}
                >
                <div className="absolute inset-0 backdrop-blur-sm bg-[var(--color-black)]/40" />
            </div>
             <img
                src={Line}
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-full h-20 pointer-events-none"
            />
            <nav className="max-w-full mx-auto px-20 pt-2.5 grid items-center relative" style={{gridTemplateColumns: '1fr  1fr'}}>
                <div className="flex items-center gap-10">
                    <button 
                        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} 
                        aria-label="Go to home"
                        className="justify-self-start"
                    >
                        <img src={Logo} alt="Logo" className="h-14" />
                    </button>
                    
                    <ul className="flex gap-10 list-none ">
                        <li><a href="#home" className="text-white hover:text-[#D5182E] transition-colors font-subtitle text-base tracking-widest uppercase">{t('nav.home')}</a></li>
                        <li><a href="#about" className="text-white hover:text-[#D5182E] transition-colors font-subtitle text-base tracking-widest uppercase">{t('nav.about')}</a></li>
                        <li><a href="#projects" className="text-white hover:text-[#D5182E] transition-colors font-subtitle text-base tracking-widest uppercase">{t('nav.projects')}</a></li>
                        <li><a href="#contact" className="text-white hover:text-[#D5182E] transition-colors font-subtitle text-base tracking-widest uppercase">{t('nav.contact')}</a></li>
                    </ul>
                </div>
                <div className="flex justify-end">
                    <LanguageSelector inline={true} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
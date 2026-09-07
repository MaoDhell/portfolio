import Logo from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import LanguageSelector from './LanguageSelector';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="relative mt-auto text-white overflow-hidden w-full">
            {/* línea superior con glow cyan */}
            <div className="h-px w-full bg-[var(--color-cyan)] shadow-[0_0_8px_var(--color-cyan)]" />

            <div className="bg-[var(--color-black)] px-8 py-8 w-full">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    
                    {/* Logo + texto decorativo */}
                    <div className="flex items-center gap-3">
                        <img src={Logo} alt="猫D." className="h-8" />
                        <span className="text-[var(--color-cyan)] font-mono text-xs tracking-widest opacity-60">
                            v2.0.26
                        </span>
                    </div>

                    {/* Texto central */}
                    <p className="text-[var(--color-gray)] font-mono text-xs tracking-widest text-center">
                        {t('footer.footer')}
                    </p>

                    {/* Links + idioma */}
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/MaoDhell" target="_blank" rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-[var(--color-gray)] hover:text-[var(--color-cyan)] text-xl transition-colors">
                            <IoLogoGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/laura-escobar-ruiz/" target="_blank" rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-[var(--color-gray)] hover:text-[var(--color-cyan)] text-xl transition-colors">
                            <IoLogoLinkedin />
                        </a>
                        <LanguageSelector inline={true} />
                    </div>
                </div>

                {/* línea inferior + copyright */}
                <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-[var(--color-red)]/20 flex items-center justify-center gap-3">
                    <span className="text-[var(--color-red)] font-mono text-xs opacity-40">▮</span>
                    <p className="text-[var(--color-gray)] font-mono text-xs opacity-50">
                        © 2026 Laura D Escobar Ruiz (猫D.) — {t('footer.reserved')}
                    </p>
                    <span className="text-[var(--color-red)] font-mono text-xs opacity-40">▮</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
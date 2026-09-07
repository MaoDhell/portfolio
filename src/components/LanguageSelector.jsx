import {useTranslation} from 'react-i18next'
import { IoGlobeOutline } from 'react-icons/io5'

const LanguageSelector = ({ inline = false }) => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <div className="inline-flex items-center gap-2 pl-5 pr-2 py-2 opacity-75 bg-gradient-to-r from-[var(--color-red)] to-[var(--color-black)] text-[var(--color-gray)] border border-[var(--color-red)] rounded font-genos text-base shadow-lg focus-within:ring-2 focus-within:ring-neon">
            <span className="text-xl flex items-center justify-center shrink-0">
                <IoGlobeOutline />
            </span>
            <select 
                onChange={e => changeLanguage(e.target.value)}
                value={i18n.language}
                className="appearance-none bg-transparent text-[var(--color-gray)] font-subtitle text-xl focus:outline-none cursor-pointer  border-none"
            >
                <option value="es">ES</option>
                <option value="en">EN</option>
                <option value="zh">中文</option>
            </select>
        </div>
    )
}

export default LanguageSelector;
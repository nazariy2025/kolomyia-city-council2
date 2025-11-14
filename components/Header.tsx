
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import Icon from './Icon';

interface HeaderProps {
    isHighContrast: boolean;
    toggleHighContrast: () => void;
    isLargeText: boolean;
    toggleLargeText: () => void;
}


const Header: React.FC<HeaderProps> = ({ isHighContrast, toggleHighContrast, isLargeText, toggleLargeText }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [language, setLanguage] = useState('UA');

    const toggleLanguage = () => setLanguage(lang => lang === 'UA' ? 'EN' : 'UA');

    const topBarBgClass = isHighContrast ? 'bg-gray-900 text-white' : 'bg-brand-blue-light text-brand-blue-dark';
    const mainHeaderBgClass = isHighContrast ? 'bg-black text-white' : 'bg-white text-gray-800';
    const accessibilityButtonClass = (isActive: boolean) => 
        `flex items-center gap-1.5 px-3 py-1 rounded-full transition-colors duration-200 ${
            isActive 
                ? (isHighContrast ? 'bg-brand-yellow text-black' : 'bg-brand-blue text-white')
                : (isHighContrast ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200')
        }`;
    

    return (
        <header className="shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className={`hidden lg:flex justify-between items-center px-8 py-2 text-sm ${topBarBgClass} transition-colors duration-300`}>
                <div className="flex items-center gap-6">
                    <a href="tel:+380343347000" className="flex items-center gap-2 hover:text-brand-yellow-dark">
                        <Icon><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg></Icon>
                        <span>Гаряча лінія</span>
                    </a>
                    <div className="flex items-center gap-3">
                        <a href="#" aria-label="Facebook"><Icon className="w-5 h-5 hover:text-brand-yellow-dark"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a4 4 0 0 0-4 4v2.01h-2v3.98h2v8.01Z" /></svg></Icon></a>
                        <a href="#" aria-label="YouTube"><Icon className="w-5 h-5 hover:text-brand-yellow-dark"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.582 7.188a2.787 2.787 0 0 0-1.962-1.962C17.859 4.75 12 4.75 12 4.75s-5.859 0-7.62.476a2.787 2.787 0 0 0-1.962 1.962A29.022 29.022 0 0 0 2 12c0 2.193.313 4.141.418 4.812a2.787 2.787 0 0 0 1.962 1.962C6.141 19.25 12 19.25 12 19.25s5.859 0 7.62-.476a2.787 2.787 0 0 0 1.962-1.962A29.022 29.022 0 0 0 22 12c0-2.193-.313-4.141-.418-4.812ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg></Icon></a>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={toggleHighContrast} className={accessibilityButtonClass(isHighContrast)} aria-pressed={isHighContrast}>
                        <Icon className="w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-5-8a5 5 0 0 0 5 5V7a5 5 0 0 0-5 5Z" clipRule="evenodd" /></svg></Icon>
                        <span>Контраст</span>
                    </button>
                     <button onClick={toggleLargeText} className={accessibilityButtonClass(isLargeText)} aria-pressed={isLargeText}>
                        <Icon className="w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M9.146 11.146a.5.5 0 0 1 .708 0L10 11.293l.146-.147a.5.5 0 0 1 .708.708L10.707 12l.147.146a.5.5 0 0 1-.708.708L10 12.707l-.146.147a.5.5 0 0 1-.708-.708L9.293 12l-.147-.146a.5.5 0 0 1 0-.708zM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM1 7.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/></svg></Icon>
                        <span>Розмір</span>
                    </button>
                    <button onClick={toggleLanguage} className="font-semibold">{language}</button>
                </div>
            </div>

            {/* Main Header */}
            <div className={`flex justify-between items-center px-4 lg:px-8 py-4 ${mainHeaderBgClass} transition-colors duration-300`}>
                <a href="/" className="flex items-center gap-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Coat_of_Arms_of_Kolomyia.svg/129px-Coat_of_Arms_of_Kolomyia.svg.png" alt="Герб Коломиї" className="h-12 lg:h-16"/>
                    <span className="font-bold text-lg lg:text-xl leading-tight">Коломийська<br/>міська рада</span>
                </a>

                <nav className="hidden lg:flex items-center gap-6">
                    {NAV_LINKS.map(link => (
                        <a key={link.label} href={link.href} className="font-medium hover:text-brand-blue">{link.label}</a>
                    ))}
                </nav>
                
                <div className="hidden lg:flex items-center">
                     <div className="relative">
                        <input type="text" placeholder="Пошук..." className={`pl-4 pr-10 py-2 rounded-full border ${isHighContrast ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-300'}`} />
                        <Icon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg></Icon>
                    </div>
                </div>

                <div className="lg:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Відкрити меню" aria-expanded={isMobileMenuOpen}>
                        <Icon className="w-8 h-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg></Icon>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                 <div className={`lg:hidden ${mainHeaderBgClass}`}>
                    <nav className="flex flex-col items-center gap-4 px-4 pt-4 pb-8">
                        {NAV_LINKS.map(link => (
                            <a key={link.label} href={link.href} className="font-medium text-lg w-full text-center py-2 hover:bg-brand-blue-light rounded-md">{link.label}</a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
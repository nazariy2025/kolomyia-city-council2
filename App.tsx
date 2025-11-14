
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSlider from './components/HeroSlider';
import NewsSection from './components/NewsSection';
import MayorInfo from './components/MayorInfo';
import QuickActions from './components/QuickActions';
import ImportantLinks from './components/ImportantLinks';
import Announcements from './components/Announcements';
import Gallery from './components/Gallery';
import CommunityInfo from './components/CommunityInfo';
import Banners from './components/Banners';

const App: React.FC = () => {
    const [isHighContrast, setIsHighContrast] = useState(false);
    const [isLargeText, setIsLargeText] = useState(false);

    const accessibilityToggles = {
        isHighContrast,
        toggleHighContrast: () => setIsHighContrast(prev => !prev),
        isLargeText,
        toggleLargeText: () => setIsLargeText(prev => !prev),
    };

    const accessibilityClasses = `${isHighContrast ? 'bg-black text-white high-contrast' : 'bg-white text-gray-800'} ${isLargeText ? 'text-lg' : 'text-base'}`;

    return (
        <div className={`flex flex-col min-h-screen ${accessibilityClasses} transition-colors duration-300`}>
             <style>{`
                .high-contrast a, .high-contrast button {
                    color: #FFFF00 !important;
                }
                .high-contrast input {
                    background-color: #333 !important;
                    border-color: #FFFF00 !important;
                    color: #FFFFFF !important;
                }
             `}</style>
            <Header {...accessibilityToggles} />
            <main className="flex-grow">
                <HeroSlider />
                <div className="container mx-auto px-4 py-8 md:py-12">
                    <NewsSection />
                    <QuickActions />
                    <MayorInfo />
                    <Announcements />
                    <ImportantLinks />
                    <CommunityInfo />
                    <Gallery />
                    <Banners />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
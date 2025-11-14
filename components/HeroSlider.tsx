
import React, { useState, useEffect } from 'react';
import { HERO_SLIDER_NEWS } from '../constants';

const HeroSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDER_NEWS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const currentSlide = HERO_SLIDER_NEWS[currentIndex];

    return (
        <div className="relative w-full h-[60vh] max-h-[600px] overflow-hidden">
            {HERO_SLIDER_NEWS.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={slide.imageUrl} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
            ))}
            
            <div className="absolute inset-0 flex items-end p-8 md:p-12 lg:p-16">
                <div className="text-white max-w-2xl">
                    <span className="bg-brand-yellow text-brand-blue-dark font-bold px-3 py-1 rounded-sm text-sm uppercase tracking-wider">{currentSlide.category}</span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-2 leading-tight shadow-text">{currentSlide.title}</h1>
                    <p className="hidden md:block text-lg text-gray-200">{currentSlide.description}</p>
                    <a href="#" className="mt-6 inline-block bg-brand-blue text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-blue-dark transition-colors">
                        Читати більше
                    </a>
                </div>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {HERO_SLIDER_NEWS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-brand-yellow' : 'bg-white/50 hover:bg-white/80'}`}
                        aria-label={`Перейти до слайду ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;

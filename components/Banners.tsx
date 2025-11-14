
import React from 'react';
import { BANNERS } from '../constants';

const Banners: React.FC = () => {
    return (
        <section className="py-8 md:py-12">
             <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-blue-dark mb-8">Корисні посилання</h2>
                <div className="flex flex-wrap justify-center items-center gap-6">
                    {BANNERS.map(banner => (
                        <a 
                            key={banner.id}
                            href={banner.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3 text-center text-gray-700 font-semibold border-2 border-gray-200 rounded-lg hover:border-brand-blue hover:text-brand-blue transition-colors duration-200"
                        >
                            {banner.title}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banners;

import React from 'react';
import { BANNERS } from '../constants';

const Banners: React.FC = () => {
    return (
        <section className="py-8 md:py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-blue-dark mb-8">Посилання на урядові та обласні сайти</h2>
            <div className="flex flex-wrap justify-center items-center gap-6">
                {BANNERS.map(banner => (
                    <a 
                        key={banner.id}
                        href={banner.href}
                        className="px-4 py-2 text-center text-gray-700 font-semibold border-2 border-gray-200 rounded-lg hover:border-brand-blue hover:text-brand-blue transition-colors duration-200"
                    >
                        {banner.title}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Banners;

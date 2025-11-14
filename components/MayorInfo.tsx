
import React from 'react';
import Icon from './Icon';

const MayorInfo: React.FC = () => {
    return (
        <section className="py-12 md:py-16 bg-brand-blue-light rounded-lg">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="flex-shrink-0 text-center">
                        <img 
                            src="https://media.slovoidilo.ua/media/publications/15/144675/144675-1_large.jpg" 
                            alt="Богдан Станіславський, міський голова" 
                            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-lg border-4 border-white mx-auto"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-lg text-gray-600 mb-1">Звернення міського голови</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">Богдан Станіславський</h2>
                        
                        <p className="max-w-2xl text-gray-700 my-6">
                            "Шановна громадо! Моя мета — зробити Коломию містом, де кожен відчуває себе комфортно та захищено. Ми працюємо над залученням інвестицій, розвитком інфраструктури та підтримкою наших захисників. Разом ми збудуємо європейське майбутнє для нашого міста!"
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <a href="#" className="px-6 py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue-dark transition-colors">
                                Біографія
                            </a>
                             <a href="#" className="px-6 py-3 bg-white text-brand-blue-dark font-semibold rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                                Сторінка у Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MayorInfo;
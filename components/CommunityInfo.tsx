
import React from 'react';

const CommunityInfo: React.FC = () => {
    return (
        <section className="py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-blue-dark mb-4">Інформація про громаду</h2>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-4 bg-brand-blue-light rounded-lg">
                            <p className="text-3xl font-bold text-brand-blue">62,4 тис.</p>
                            <p className="text-gray-600">Населення</p>
                        </div>
                         <div className="p-4 bg-brand-blue-light rounded-lg">
                            <p className="text-3xl font-bold text-brand-blue">102 км²</p>
                            <p className="text-gray-600">Розмір</p>
                        </div>
                         <div className="p-4 bg-brand-blue-light rounded-lg">
                            <p className="text-3xl font-bold text-brand-blue">12</p>
                            <p className="text-gray-600">Населених пунктів</p>
                        </div>
                         <div className="p-4 bg-brand-blue-light rounded-lg">
                            <p className="text-3xl font-bold text-brand-blue">1438</p>
                            <p className="text-gray-600">Рік заснування</p>
                        </div>
                    </div>
                </div>
                <div className="h-80 lg:h-full rounded-lg overflow-hidden shadow-lg">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42079.31497223616!2d24.98188204128479!3d48.52220795431614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4736b3064615b37b%3A0x963665a25e648f3b!2sKolomyia%2C%20Ivano-Frankivsk%20Oblast%2C%20Ukraine%2C%2078200!5e0!3m2!1sen!2sus!4v1721934571003!5m2!1sen!2sus"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Карта Коломийської громади"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default CommunityInfo;

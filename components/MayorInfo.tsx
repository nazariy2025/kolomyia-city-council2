
import React from 'react';
import Icon from './Icon';

const MayorInfo: React.FC = () => {
    return (
        <section className="py-8 md:py-12 bg-brand-blue-light rounded-lg">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                        <img 
                            src="https://picsum.photos/300/300?random=mayor" 
                            alt="Міський голова" 
                            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-lg border-4 border-white"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">Богдан Станіславський</h2>
                        <p className="text-lg text-gray-600 mb-4">Міський голова</p>
                        <p className="max-w-xl text-gray-700 mb-6">
                            Коротка біографічна довідка. Тут може бути декілька речень про досвід роботи, освіту та основні напрямки діяльності на посаді міського голови.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 text-sm">
                           <div className="flex items-center gap-2 text-gray-800">
                                <Icon className="w-5 h-5 text-brand-blue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5A1.5 1.5 0 0 1 16.5 18h-13A1.5 1.5 0 0 1 2 16.5v-13Z" /></svg></Icon>
                                <span>Номер приймальні: (03433) 4-50-00</span>
                           </div>
                           <div className="flex items-center gap-2 text-gray-800">
                                <Icon className="w-5 h-5 text-brand-blue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" /><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" /></svg></Icon>
                                <span>Email: mayor@kolomyia.if.ua</span>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MayorInfo;

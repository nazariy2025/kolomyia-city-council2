
import React from 'react';

const links = [
    'Опитування', 'Запис у школи', 'Запис у дитсадок', 
    'Геопортал', 'Паркування', 'Громадський транспорт онлайн', 'Перевірка черги'
];

const ImportantLinks: React.FC = () => {
    return (
        <section className="py-8 md:py-12 bg-white rounded-lg">
             <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-blue-dark mb-8">Важливі посилання</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {links.map(link => (
                        <a 
                            key={link} 
                            href="#" 
                            className="px-5 py-3 bg-gray-100 text-brand-blue-dark font-semibold rounded-full hover:bg-brand-blue hover:text-white transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImportantLinks;
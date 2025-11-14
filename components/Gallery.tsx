
import React from 'react';

const galleryItems = [
    { type: 'photo', url: 'https://images.unsplash.com/photo-1599804847934-e47f7b469038?q=80&w=2070&auto=format&fit=crop', title: 'День міста' },
    { type: 'photo', url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop', title: 'Ярмарок' },
    { type: 'video', url: 'https://images.unsplash.com/photo-1518911710364-1a34a0a4c2c1?q=80&w=2070&auto=format&fit=crop', title: 'Ремонт доріг' },
    { type: 'photo', url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop', title: 'Зустріч з громадою' },
];

const Gallery: React.FC = () => {
    return (
        <section className="py-8 md:py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-blue-dark mb-8">Фото та відео</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryItems.map((item, index) => (
                    <a href="#" key={index} className="group relative block overflow-hidden rounded-lg shadow-lg">
                        <img src={item.url} alt={item.title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-colors"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                            <h3 className="font-bold">{item.title}</h3>
                        </div>
                        {item.type === 'video' && (
                             <div className="absolute inset-0 flex items-center justify-center">
                                 <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/50 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white"><path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" /></svg>
                                 </div>
                            </div>
                        )}
                    </a>
                ))}
            </div>
             <div className="flex justify-center mt-8">
                <a href="#" className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300 transition-colors">Перейти до галереї</a>
            </div>
        </section>
    );
};

export default Gallery;

import React from 'react';

const galleryItems = [
    { type: 'photo', url: 'https://picsum.photos/600/400?random=10' },
    { type: 'photo', url: 'https://picsum.photos/600/400?random=11' },
    { type: 'video', url: 'https://picsum.photos/600/400?random=12' },
    { type: 'photo', url: 'https://picsum.photos/600/400?random=13' },
];

const Gallery: React.FC = () => {
    return (
        <section className="py-8 md:py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-blue-dark mb-8">Фотогалерея та відеогалерея</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryItems.map((item, index) => (
                    <a href="#" key={index} className="group relative block overflow-hidden rounded-lg">
                        <img src={item.url} alt={`Gallery item ${index + 1}`} className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                        {item.type === 'video' && (
                             <div className="absolute inset-0 flex items-center justify-center">
                                 <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white"><path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" /></svg>
                                 </div>
                            </div>
                        )}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Gallery;

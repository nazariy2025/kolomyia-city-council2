
import React from 'react';
import { EVENTS } from '../constants';

const Announcements: React.FC = () => {
    const councilEvents = EVENTS.filter(e => e.category === 'Міська рада');
    const cultureEvents = EVENTS.filter(e => e.category === 'Культура');

    return (
        <section className="py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-brand-blue-dark">Анонси подій - Міська рада</h3>
                    <div className="space-y-4">
                        {councilEvents.map(event => (
                            <div key={event.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                                <p className="font-bold text-lg">{event.title}</p>
                                <div className="text-sm text-gray-600 mt-1 flex items-center gap-4">
                                    <span>📅 {event.date}</span>
                                    <span>📍 {event.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                 <div>
                    <h3 className="text-2xl font-bold mb-4 text-brand-blue-dark">Анонси подій - Культура</h3>
                    <div className="space-y-4">
                        {cultureEvents.map(event => (
                            <div key={event.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                                <p className="font-bold text-lg">{event.title}</p>
                                <div className="text-sm text-gray-600 mt-1 flex items-center gap-4">
                                    <span>📅 {event.date}</span>
                                    <span>📍 {event.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Announcements;

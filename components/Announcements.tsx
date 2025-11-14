
import React from 'react';
import { EVENTS, TABBED_NEWS } from '../constants';
import { Event, NewsArticle } from '../types';

const EventItem: React.FC<{ event: Event }> = ({ event }) => (
    <a href="#" className="block p-4 border rounded-lg hover:shadow-md hover:border-brand-blue transition-all duration-200">
        <p className="font-bold text-lg text-brand-blue-dark">{event.title}</p>
        <div className="text-sm text-gray-600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>📅 {event.date}</span>
            <span>📍 {event.location}</span>
        </div>
    </a>
);

const AnnouncementItem: React.FC<{ announcement: NewsArticle }> = ({ announcement }) => (
    <a href="#" className="block p-4 border rounded-lg hover:shadow-md hover:border-brand-blue transition-all duration-200">
        <p className="font-bold text-lg text-brand-blue-dark">{announcement.title}</p>
        <div className="text-sm text-gray-600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>📅 {announcement.date}</span>
        </div>
        <p className="text-sm text-gray-700 mt-2">{announcement.description}</p>
    </a>
);

const Announcements: React.FC = () => {
    const councilEvents = EVENTS.filter(e => e.category === 'Міська рада');
    const cultureEvents = EVENTS.filter(e => e.category === 'Культура');
    const announcements = TABBED_NEWS.filter(n => n.category === 'Оголошення');

    return (
        <section className="py-8 md:py-12 bg-gray-50">
             <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue-dark mb-8">Анонси та оголошення</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-brand-blue-dark">Події міської ради</h3>
                        <div className="space-y-4">
                            {councilEvents.map(event => <EventItem key={event.id} event={event} />)}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-brand-blue-dark">Культурні події</h3>
                        <div className="space-y-4">
                            {cultureEvents.map(event => <EventItem key={event.id} event={event} />)}
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 text-brand-blue-dark">Важливі оголошення</h3>
                         <div className="space-y-4">
                            {announcements.map(ann => <AnnouncementItem key={ann.id} announcement={ann} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Announcements;
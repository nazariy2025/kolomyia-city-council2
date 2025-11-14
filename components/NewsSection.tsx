
import React, { useState } from 'react';
import { MAIN_NEWS, TABBED_NEWS } from '../constants';
import { NewsArticle } from '../types';

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <div className="group overflow-hidden rounded-lg shadow-lg">
        <div className="overflow-hidden">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-4">
            <p className="text-sm text-gray-500 mb-1">{article.date}</p>
            <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-brand-blue transition-colors">{article.title}</h3>
            <a href="#" className="text-sm font-semibold text-brand-blue hover:underline">Детальніше &rarr;</a>
        </div>
    </div>
);

const NewsListItem: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <li className="py-3 border-b last:border-b-0">
        <p className="text-xs text-gray-500">{article.date}</p>
        <a href="#" className="font-semibold hover:text-brand-blue transition-colors">{article.title}</a>
        <p className="text-sm text-gray-600 mt-1">{article.description}</p>
    </li>
);

const NewsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'news' | 'announcements'>('news');

    return (
        <section className="py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {MAIN_NEWS.map(article => (
                    <NewsCard key={article.id} article={article} />
                ))}
            </div>
            
            <div className="flex justify-end mt-6">
                <a href="#" className="px-6 py-2 border-2 border-brand-blue text-brand-blue font-semibold rounded-full hover:bg-brand-blue hover:text-white transition-colors">До всіх новин</a>
            </div>

            <div className="mt-12">
                <div className="border-b">
                    <nav className="-mb-px flex gap-6">
                        <button 
                            onClick={() => setActiveTab('news')}
                            className={`py-4 px-1 border-b-2 font-medium text-lg ${activeTab === 'news' ? 'border-brand-blue text-brand-blue' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            Новини
                        </button>
                        <button 
                            onClick={() => setActiveTab('announcements')}
                            className={`py-4 px-1 border-b-2 font-medium text-lg ${activeTab === 'announcements' ? 'border-brand-blue text-brand-blue' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            Оголошення
                        </button>
                    </nav>
                </div>
                <div>
                    {activeTab === 'news' && (
                        <ul>
                            {TABBED_NEWS.map(article => <NewsListItem key={article.id} article={article} />)}
                        </ul>
                    )}
                    {activeTab === 'announcements' && (
                         <ul>
                            {TABBED_NEWS.slice(2, 7).map(article => <NewsListItem key={article.id} article={article} />)}
                        </ul>
                    )}
                </div>
                 <div className="flex justify-end mt-6">
                    <a href="#" className="px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300 transition-colors">
                        {activeTab === 'news' ? 'Всі новини' : 'Всі оголошення'}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;

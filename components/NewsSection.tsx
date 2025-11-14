
import React, { useState } from 'react';
import { MAIN_NEWS, TABBED_NEWS } from '../constants';
import { NewsArticle } from '../types';

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <article className="group flex flex-col overflow-hidden rounded-lg shadow-lg bg-white">
        <a href="#" className="block overflow-hidden">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </a>
        <div className="p-4 flex flex-col flex-grow">
            <p className="text-sm text-gray-500 mb-1">{article.date}</p>
            <h3 className="font-bold text-lg leading-tight mb-2 flex-grow">
                <a href="#" className="hover:text-brand-blue transition-colors">{article.title}</a>
            </h3>
            <a href="#" className="text-sm font-semibold text-brand-blue hover:underline self-start">Детальніше &rarr;</a>
        </div>
    </article>
);

const NewsListItem: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <li className="py-4 border-b last:border-b-0">
        <p className="text-xs text-gray-500 mb-1">{article.date}</p>
        <a href="#" className="font-semibold hover:text-brand-blue transition-colors">{article.title}</a>
        <p className="text-sm text-gray-600 mt-1">{article.description}</p>
    </li>
);

const NewsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'news' | 'announcements'>('news');

    return (
        <section className="py-8 md:py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue-dark mb-8">Останні новини</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MAIN_NEWS.map(article => (
                    <NewsCard key={article.id} article={article} />
                ))}
            </div>
            
            <div className="flex justify-center mt-8">
                <a href="#" className="px-8 py-3 border-2 border-brand-blue text-brand-blue font-semibold rounded-full hover:bg-brand-blue hover:text-white transition-colors">Переглянути всі новини</a>
            </div>
        </section>
    );
};

export default NewsSection;
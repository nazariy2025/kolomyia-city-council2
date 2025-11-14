
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Contacts */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Coat_of_Arms_of_Kolomyia.svg/129px-Coat_of_Arms_of_Kolomyia.svg.png" alt="Герб Коломиї" className="h-12 bg-white p-1 rounded-md" />
              <div>
                <h3 className="font-bold text-lg">Коломия єднає</h3>
                <p className="text-sm text-gray-300">Офіційний вебсайт</p>
              </div>
            </div>
            <div className="text-sm space-y-2">
              <p>Адреса: вул. Грушевського, 1, м. Коломия, 78200</p>
              <p>Робочий час: Пн-Пт, 8:00 - 17:15</p>
              <p>Гаряча лінія: <a href="tel:+380343347000" className="hover:text-brand-yellow">(03433) 4-70-00</a></p>
              <p>Email: <a href="mailto:rada@kolomyia.if.ua" className="hover:text-brand-yellow">rada@kolomyia.if.ua</a></p>
            </div>
          </div>

          {/* Column 2: Main Sections */}
          <div>
            <h4 className="font-bold mb-4 text-brand-yellow">Основні розділи</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Міська рада</a></li>
              <li><a href="#" className="hover:underline">Громада</a></li>
              <li><a href="#" className="hover:underline">Новини та Анонси</a></li>
              <li><a href="#" className="hover:underline">Електронні сервіси</a></li>
              <li><a href="#" className="hover:underline">Публічна інформація</a></li>
            </ul>
          </div>

          {/* Column 3: Detailed Subsections */}
          <div>
            <h4 className="font-bold mb-4 text-brand-yellow">Важлива інформація</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Кадрова політика</a></li>
              <li><a href="#" className="hover:underline">Цивільний захист</a></li>
              <li><a href="#" className="hover:underline">Бюджет громади</a></li>
              <li><a href="#" className="hover:underline">Портал відкритих даних</a></li>
              <li><a href="#" className="hover:underline">Антикорупційна політика</a></li>
            </ul>
          </div>

          {/* Column 4: Social & Resources */}
          <div>
            <h4 className="font-bold mb-4 text-brand-yellow">Приєднуйтесь</h4>
            <div className="flex items-center gap-4 mb-4">
              <a href="#" aria-label="Facebook" className="p-2 bg-white/10 rounded-full hover:bg-brand-yellow hover:text-brand-blue-dark"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a4 4 0 0 0-4 4v2.01h-2v3.98h2v8.01Z" /></svg></a>
              <a href="#" aria-label="YouTube" className="p-2 bg-white/10 rounded-full hover:bg-brand-yellow hover:text-brand-blue-dark"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M21.582 7.188a2.787 2.787 0 0 0-1.962-1.962C17.859 4.75 12 4.75 12 4.75s-5.859 0-7.62.476a2.787 2.787 0 0 0-1.962 1.962A29.022 29.022 0 0 0 2 12c0 2.193.313 4.141.418 4.812a2.787 2.787 0 0 0 1.962 1.962C6.141 19.25 12 19.25 12 19.25s5.859 0 7.62-.476a2.787 2.787 0 0 0 1.962-1.962A29.022 29.022 0 0 0 22 12c0-2.193-.313-4.141-.418-4.812ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg></a>
            </div>
            <p className="text-sm text-gray-300">Корисні сайти та офіційні ресурси</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-gray-300">
          <p>© {currentYear} Коломийська міська рада. Всі права захищено!</p>
          <p className="mt-2">При використанні матеріалів обов'язкове посилання на сайт.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

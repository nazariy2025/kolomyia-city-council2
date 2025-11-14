
import { NavLink, NewsArticle, Event, Banner } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Головна', href: '#' },
  { label: 'Міська рада', href: '#' },
  { label: 'Громада', href: '#' },
  { label: 'Новини', href: '#' },
  { label: 'Публічна інформація', href: '#' },
  { label: 'Електронні сервіси', href: '#' },
  { label: 'Довідник', href: '#' },
];

export const HERO_SLIDER_NEWS: NewsArticle[] = [
    { id: 1, title: 'Реконструкція центральної площі міста: новий етап', date: '25.07.2024', category: 'Розвиток', imageUrl: 'https://images.unsplash.com/photo-1541848218765-9d3753364234?q=80&w=2070&auto=format&fit=crop', description: 'Розпочато наступний етап реконструкції, що включає оновлення фонтану та зелених зон.'},
    { id: 2, title: 'Відбулося засідання виконавчого комітету', date: '24.07.2024', category: 'Офіційно', imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop', description: 'Прийнято ряд важливих рішень щодо благоустрою та соціальних програм.'},
    { id: 3, title: 'Новий дитячий садок відчинив свої двері', date: '23.07.2024', category: 'Освіта', imageUrl: 'https://images.unsplash.com/photo-1576765636902-3c8e23f9d519?q=80&w=2070&auto=format&fit=crop', description: 'Сучасний дошкільний заклад зможе прийняти понад 150 дітей.'},
];

export const MAIN_NEWS: NewsArticle[] = [
    { id: 4, title: 'Програма підтримки молодих підприємців', date: '22.07.2024', category: 'Економіка', imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', description: 'Міська рада запускає грантову програму для стартапів.' },
    { id: 5, title: 'Оновлення громадського транспорту', date: '21.07.2024', category: 'Транспорт', imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1974&auto=format&fit=crop', description: 'На маршрути вийшли нові екологічні автобуси.' },
    { id: 6, title: 'Фестиваль "Коломийські вишиванки" зібрав тисячі гостей', date: '20.07.2024', category: 'Культура', imageUrl: 'https://images.unsplash.com/photo-1620242375994-2796e6211a7a?q=80&w=1932&auto=format&fit=crop', description: 'Традиційне свято продемонструвало багатство місцевої культури.' },
];

export const TABBED_NEWS: NewsArticle[] = [
  { id: 7, title: 'Ремонт доріг на вулиці Шевченка завершено', date: '19.07.2024', category: 'Інфраструктура', imageUrl: '', description: 'Рух транспорту повністю відновлено.' },
  { id: 8, title: 'Відкриття спортивного майданчика у школі №5', date: '18.07.2024', category: 'Спорт', imageUrl: '', description: 'Новий майданчик доступний для всіх мешканців мікрорайону.' },
  { id: 9, title: 'Конкурс на кращий проєкт благоустрою парку', date: '17.07.2024', category: 'Оголошення', imageUrl: '', description: 'Запрошуємо архітекторів та дизайнерів до участі.' },
  { id: 10, title: 'Профілактичні медичні огляди для пенсіонерів', date: '16.07.2024', category: 'Здоров\'я', imageUrl: '', description: 'Акція триватиме до кінця місяця.' },
  { id: 11, title: 'Обговорення стратегії розвитку міста до 2030 року', date: '15.07.2024', category: 'Стратегія', imageUrl: '', description: 'Долучайтеся до громадських слухань.' },
  { id: 12, title: 'Виставка дитячого малюнка "Моє рідне місто"', date: '14.07.2024', category: 'Мистецтво', imageUrl: '', description: 'Експозиція відкрита у міському будинку культури.' },
  { id: 13, title: 'Нові правила паркування в центрі міста', date: '13.07.2024', category: 'Правила', imageUrl: '', description: 'Зміни набувають чинності з 1 серпня.' },
];

export const EVENTS: Event[] = [
    {id: 1, title: 'Засідання постійної комісії з питань бюджету', date: '29.07.2024', location: 'Зала засідань', category: 'Міська рада'},
    {id: 2, title: 'Громадські слухання щодо нового генплану', date: '01.08.2024', location: 'Народний дім', category: 'Міська рада'},
    {id: 3, title: 'День міста: святковий концерт на площі', date: '19.08.2024', location: 'Площа Відродження', category: 'Культура'},
    {id: 4, title: 'Ярмарок народних ремесел', date: '20.08.2024', location: 'Сквер біля Ратуші', category: 'Культура'},
];

export const BANNERS: Banner[] = [
    {id: 1, title: 'Президент України', href: '#'},
    {id: 2, title: 'Верховна Рада України', href: '#'},
    {id: 3, title: 'Кабінет Міністрів України', href: '#'},
    {id: 4, title: 'Івано-Франківська обласна рада', href: '#'},
    {id: 5, title: 'Івано-Франківська ОДА', href: '#'},
];
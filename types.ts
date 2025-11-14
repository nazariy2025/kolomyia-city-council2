
export interface NavLink {
  label: string;
  href: string;
  sublinks?: NavLink[];
}

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  category: 'Міська рада' | 'Культура';
}

export interface Banner {
  id: number;
  title: string;
  href: string;
}

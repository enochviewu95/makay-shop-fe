export interface ICategory {
  id: number;
  href: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
}

export interface IProducts {
  id: number;
  href: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  isFavorite: boolean;
}

export interface ITrendingProducts {
  id: number;
  href: string;
  imageSrc: string;
  title: string;
}

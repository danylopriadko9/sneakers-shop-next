import { IImage } from './images';

export interface Product {
  id: number;
  attributes: {
    title: string;
    desc: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    art: string;
    price: number;
    isBestseller: boolean;
    img: {
      data: IImage[];
    };
    categories: {
      data: {
        id: number;
        attributes: {
          title: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      }[];
    };
  };
}

export interface IProducts {
  data: Product[];
}

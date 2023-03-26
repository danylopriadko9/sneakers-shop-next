import { Image } from './images';

interface Item1 {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    img: Image;
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

export interface Item {
  data: Item1[];
}

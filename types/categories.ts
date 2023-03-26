import { IImage } from './images';

export interface Category {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    sub_categories: {
      data: SubCategory[];
    };
    img?: {
      data: IImage;
    };
  };
}

interface SubCategory {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface ApiResponse {
  data: Category[];
}

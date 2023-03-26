import { IImage } from './images';

type Attributes = {
  title: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  icon: {
    data: IImage;
  };
  img: {
    data: IImage;
  };
};

export type Object = {
  id: number;
  attributes: Attributes;
};

export interface IBanner {
  data: Object[];
}

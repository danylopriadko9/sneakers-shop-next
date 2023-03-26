interface IImage {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
  };
}

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

interface Category {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    sub_categories: {
      data: SubCategory[];
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

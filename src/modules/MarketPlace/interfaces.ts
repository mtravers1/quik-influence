export interface ProductDataType {
  id: string;
  name: string;
  amount: number;
  discount?: number;
  description?: string;
  longDesc: string;
  meta: {
    images: string[];
    stock: number;
    options: {
      key: string;
      value: string[];
    }[];
  };
  totalUserRating?: number;
}

export interface PaginatedProductDataType extends ProductPaginationMeta {
  rows: ProductDataType[];
}

export interface CategoryDataType {
  name: string;
  image: string;
  id: string;
  description: string;
  meta?: any;
}

export interface CartItemDataType {
  id: string;
  quantity: number;
  CampaignProduct: ProductDataType;
  userId: any;
  variant: any;
  productId?: string;
}

export interface CartDataType {
  id?: string;
  total: number;
  CampaignCartProducts: CartItemDataType[];
}

export interface ProductPaginationMeta {
  count: number;
  recieved: number;
  totalPages: number;
  currentPage: number;
}

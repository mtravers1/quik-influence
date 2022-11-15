import queryString from 'query-string';
import {
  ProductDataType,
  CartDataType,
  PaginatedProductDataType,
} from 'modules/MarketPlace/interfaces';
import { axiosInstance } from 'utils/helpers';
import { PRODUCT_PAGE_LIMIT } from 'utils/constants';

export const getProducts = async (campaignId: string) => {
  let products: ProductDataType[] = [];
  let catories: any[] = [];

  try {
    const response = await axiosInstance.get(
      `/users/campaign/products/${campaignId}`
    );

    products = response.data.data || [];
  } catch (err) {
    console.log(err);
  }

  try {
    const response = await axiosInstance.get(
      `/users/campaign/product-categories`
      // `/users/campaign/product-categories/${campaignId}`
    );

    catories = response.data.data;
  } catch (err) {}

  return { products, catories };
};

export const getPageData = async (campaignId: string) => {
  let newProducts: PaginatedProductDataType = {
    rows: [],
    count: 0,
    recieved: 0,
    totalPages: 0,
    currentPage: 0,
  };
  let mostViewedProducts: PaginatedProductDataType = {
    rows: [],
    count: 0,
    recieved: 0,
    totalPages: 0,
    currentPage: 0,
  };

  try {
    const response = await axiosInstance.get(
      `/users/campaign/products/?campaignId=${campaignId}&sortField=createdAt&limit=16`
    );

    newProducts = response.data.data || [];
  } catch (err) {
    console.log(err);
  }

  try {
    const response = await axiosInstance.get(
      `/users/campaign/products/?campaignId=${campaignId}&sortField=views_count&limit=16`
    );

    mostViewedProducts = response.data.data || [];
  } catch (err) {
    console.log(err);
  }

  return { newProducts, mostViewedProducts };
};

export const getASingleProduct = async (productId: string) => {
  let product: ProductDataType | null = null;

  try {
    const response = await axiosInstance.get(
      `/users/campaign/products/single/${productId}`
    );

    product = response.data.data || [];
  } catch (err) {
    console.log(err);
  }

  return product;
};

export const getCartItems = async (
  campaignId?: string,
  campaignAdminId?: string,
  headers?: any
) => {
  let serverCart: CartDataType | null = null;

  try {
    const response = await axiosInstance.post(
      `/users/campaign/cart`,
      {
        campaignId,
        campaignAdminId,
      },
      {
        headers,
      }
    );

    serverCart = response.data.data || [];
  } catch (err) {
    console.log(err);
  }

  return serverCart;
};

export const getShopItems = async (query: any) => {
  const { campaignAdminId, page, ...rest } = query;

  const serverQueryString = `?${queryString.stringify({
    ...rest,
    page: page || 1,
    pageSize: PRODUCT_PAGE_LIMIT,
  })}`;

  let products: PaginatedProductDataType = {
    rows: [],
    count: 0,
    recieved: 0,
    totalPages: 0,
    currentPage: 0,
  };

  try {
    const response = await axiosInstance.get(
      `/users/campaign/products${serverQueryString}`
    );

    products = response.data.data || [];
  } catch (err) {
    console.log(err);
  }

  return { products };
};

export const getRates = async (campaignId: string) => {
  
}
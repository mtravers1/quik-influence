import { ProductDataType, CartDataType } from 'modules/MarketPlace/interfaces';
import { axiosInstance } from 'utils/helpers';

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
  campaignId: string,
  campaignAdminId: string
) => {
  let serverCart: CartDataType | null = null;

  try {
    const response = await axiosInstance.post(`/users/campaign/cart`, {
      campaignId,
      campaignAdminId,
    });

    serverCart = response.data.data || [];
  } catch (err) {
    console.log(err);
  }

  return serverCart;
};

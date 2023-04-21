import axios from 'axios';
import Config from 'config';
import { camelizeKeys, decamelizeKeys } from 'humps';
import { InitialConfig, Product } from 'types';

const fetchProductDetail = async (id: string): Promise<Product> => {
  const response = await axios.get(`${Config.baseUrl}/product/${id}/`);
  return camelizeKeys(response.data) as Product;
};

const updateProduct = async (product: Product): Promise<Product> => {
  const response = await axios.put(
    `${Config.baseUrl}/product/${product.id}/`,
    decamelizeKeys(product)
  );
  return camelizeKeys(response.data) as Product;
};
const fetchTrlSaga = async (): Promise<Product> => {
  const response = await axios.get(`${Config.baseUrl}/trl/`);
  return camelizeKeys(response.data) as Product;
};

const getConfig = async (): Promise<InitialConfig> => {
  const response = await axios.get(
    `${Config.baseUrl}/configuration/${Config.appId}/`
  );
  return camelizeKeys(response.data) as InitialConfig;
};

const api = {
  updateProduct,
  fetchProductDetail,
  fetchTrlSaga,
  getConfig,
};

export default api;

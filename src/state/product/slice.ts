import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { InitialConfig, Product, Trl } from 'types';

const initialProduct = {
  id: 0,
  name: '',
  description: '',
  picture: '',
  type: { id: 0, name: '' },
  categories: [{ id: 0, name: '' }],
  implementationEffortText: null,
  investmentEffort: '',
  trl: { id: 0, name: '' },
  video: '',
  user: {
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    sex: 1,
    profilePicture: '',
    position: '',
  },
  company: {
    name: '',
    logo: '',
    address: {
      country: {
        name: '',
      },
      city: {
        name: '',
      },
      street: '',
      house: '',
      zipCode: '',
      longitude: '',
      latitude: '',
    },
  },
  businessModels: [{ id: 0, name: '' }],
};

export interface ProductState {
  loading: boolean;
  product: Product;
  updateLoading: boolean;
  updateError: boolean;
  productError: boolean;
  trl: Trl[];
  trlError: boolean;
  initialConfig: InitialConfig;
  configLoading: boolean;
}

export const initialState: ProductState = {
  loading: false,
  product: initialProduct,
  productError: false,
  updateLoading: false,
  updateError: false,
  trlError: false,
  trl: [],
  initialConfig: {
    id: 1,
    logo: 'https://img.innoloft.de/logo.svg',
    mainColor: '#272e71',
    hasUserSection: true,
  },
  configLoading: false,
};

export const fetchProductDetails = createAction<string>('fetchProductDetails');
export const updateProduct = createAction('updateProduct');
export const fetchTrl = createAction('fetchTrl');
export const fetchConfig = createAction('fetchConfig');

export const product = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setLoading: (state: ProductState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProduct: (state: ProductState, action: PayloadAction<Product>) => {
      state.product = action.payload;
    },
    setProductError: (state: ProductState, action: PayloadAction<boolean>) => {
      state.productError = action.payload;
    },
    setUpdateLoading: (state: ProductState, action: PayloadAction<boolean>) => {
      state.updateLoading = action.payload;
    },
    setUpdateError: (state: ProductState, action: PayloadAction<boolean>) => {
      state.updateError = action.payload;
    },
    setTrlSelector: (state: ProductState, action: PayloadAction<Trl[]>) => {
      state.trl = action.payload;
    },
    setPicture: (state: ProductState, action: PayloadAction<string>) => {
      state.product = { ...state.product, picture: action.payload };
    },
    setName: (state: ProductState, action: PayloadAction<string>) => {
      state.product = { ...state.product, name: action.payload };
    },
    setDescription: (state: ProductState, action: PayloadAction<string>) => {
      state.product = { ...state.product, description: action.payload };
    },
    setTrl: (
      state: ProductState,
      action: PayloadAction<{ id: number; name: string }>
    ) => {
      state.product = { ...state.product, trl: action.payload };
    },
    setTrlError: (state: ProductState, action: PayloadAction<boolean>) => {
      state.trlError = action.payload;
    },
    setInitialConfig: (
      state: ProductState,
      action: PayloadAction<InitialConfig>
    ) => {
      state.initialConfig = action.payload;
    },
    setConfigLoading: (state: ProductState, action: PayloadAction<boolean>) => {
      state.configLoading = action.payload;
    },
  },
});
export const {
  setLoading,
  setProduct,
  setUpdateLoading,
  setUpdateError,
  setProductError,
  setTrl,
  setTrlSelector,
  setDescription,
  setName,
  setPicture,
  setTrlError,
  setInitialConfig,
  setConfigLoading,
} = product.actions;
export const selectProduct = (state: RootState) => state.product.product;
export const selectLoading = (state: RootState) => state.product.loading;
export const selectProductError = (state: RootState) =>
  state.product.productError;

export const selectUpdateLoading = (state: RootState) =>
  state.product.updateLoading;
export const selectUpdateError = (state: RootState) =>
  state.product.updateError;
export const selectTrlSelector = (state: RootState) => state.product.trl;
export const selectInitialConfig = (state: RootState) =>
  state.product.initialConfig;
export const selectConfigLoading = (state: RootState) =>
  state.product.configLoading;
export default product.reducer;

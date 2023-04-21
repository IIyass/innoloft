import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import {
  fetchProductDetails,
  setLoading,
  setProduct,
  updateProduct,
  setUpdateLoading,
  setUpdateError,
  setProductError,
  fetchTrl,
  setTrlSelector,
  setTrlError,
  fetchConfig,
  setInitialConfig,
  setConfigLoading,
} from './slice';
import Api from 'api/api';
import { InitialConfig, Product, Trl } from 'types';
import { RootState } from 'store/store';

const getProduct = (state: RootState) => state.product.product;

export function* getProductDetailsSaga(action: PayloadAction<string>) {
  try {
    yield put(setLoading(true));
    const response: Product = yield call(
      Api.fetchProductDetail,
      action.payload
    );
    yield put(setProduct(response));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setProductError(true));
  }
}

export function* updateProductSaga() {
  try {
    yield put(setUpdateLoading(true));
    const updatedProduct: Product = yield select(getProduct);
    yield call(Api.updateProduct, updatedProduct);
    yield put(setUpdateLoading(false));
  } catch (error) {
    yield put(setUpdateLoading(false));
    yield put(setUpdateError(true));
  }
}

export function* fetchTrlSaga() {
  try {
    const response: Trl[] = yield call(Api.fetchTrlSaga);
    yield put(setTrlSelector(response));
  } catch (error) {
    yield put(setTrlError(true));
  }
}

export function* fetchConfigSaga() {
  try {
    yield put(setConfigLoading(true));
    const response: InitialConfig = yield call(Api.getConfig);
    yield put(setInitialConfig(response));
    yield put(setConfigLoading(false));
  } catch (error) {
    yield put(setConfigLoading(false));
    console.error('Cannot load initial config');
  }
}

export function* watchProductSagas() {
  yield takeLatest(fetchProductDetails.type, getProductDetailsSaga);
  yield takeLatest(updateProduct.type, updateProductSaga);
  yield takeLatest(fetchTrl.type, fetchTrlSaga);
  yield takeLatest(fetchConfig.type, fetchConfigSaga);
}

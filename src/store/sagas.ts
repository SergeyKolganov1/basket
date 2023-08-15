import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { setSections } from './productReducers';

function* fetchSections(): any {
  try {
    const response = yield call(axios.get, 'https://datainlife.ru/junior_task/get_products.php');
    yield put(setSections(response.data));
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
}

export function* appSaga() {
  yield takeLatest('app/fetchSections', fetchSections);
}


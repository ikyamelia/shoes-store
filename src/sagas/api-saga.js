import { takeEvery, call, put } from "redux-saga/effects";
import { setProduct } from "../actions/action";
import { GET_PRODUCT } from "../constants/action-type";

export default function* watcherSaga() {
  yield takeEvery(GET_PRODUCT, getProduct);
}

function* getProduct() {
  try {
    const payload = yield call(getDataAPI);
    yield put(setProduct(payload.shoes));
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

function getDataAPI() {
  return fetch("https://my-json-server.typicode.com/megasuartika/fe-assignment/db").then(response =>
    response.json()
  );
}
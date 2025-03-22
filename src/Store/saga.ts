import { all } from "redux-saga/effects";
import { LayoutSaga } from "../Common/Layout/store/layout.store.saga";

export function* rootSaga() {
    yield all([
        LayoutSaga()
    ]);
}
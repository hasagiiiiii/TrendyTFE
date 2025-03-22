import { call, put, takeLatest } from "redux-saga/effects";
import layoutStoreReducer from "./layout.store.reducer";
import { Test } from "./layout.store.action";
import { fetchMessageFromAPI } from "./layout.store.service";

function* fetchTestSucces(action: any): Generator<any, void, any> {
    console.log('Action received in saga:', action);
    try {
        const message: string = yield call(fetchMessageFromAPI); // Gọi API và lấy dữ liệu
        console.log('message', message);
        yield put(layoutStoreReducer.actions.test(message)); // Dispatch action với giá trị lấy được từ API
    } catch (error) {
        console.error("Error fetching data:", error);  // Log lỗi nếu có
    }
}

// Saga để xử lý hành động fetchMessageRequest
export function* LayoutSaga() {

    yield takeLatest(
        Test, fetchTestSucces
    )

}

// Root Saga
// export default function* rootSaga() {
//   yield takeLatest(fetchMessageSaga.);
// }

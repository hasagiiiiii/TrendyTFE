import layoutStoreReducer from "./layout.store.reducer";
import { Test } from "./layout.store.action";
import { fetchMessageFromAPI } from "./layout.store.service";

function* fetchTestSucces(action: any): Generator<any, void, any> {
    console.log('Action received in saga:', action);
    try {
    } catch (error) {
        console.error("Error fetching data:", error);  // Log lỗi nếu có
    }
}

// Saga để xử lý hành động fetchMessageRequest
export function* LayoutSaga() {



}

// Root Saga
// export default function* rootSaga() {
//   yield takeLatest(fetchMessageSaga.);
// }

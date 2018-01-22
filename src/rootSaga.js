import { CREATE_USER_REQUEST } from "./types";
import { createUserSaga } from "./sagas/usersSagas";

export function* rootSaga() {
  yield takeLatest(CREATE_USER_REQUEST, createUserSaga) ;
}
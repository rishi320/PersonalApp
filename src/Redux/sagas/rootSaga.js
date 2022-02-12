import { put, takeEvery } from "redux-saga/effects";
import { addRemainder } from "../actions/actions";
import * as types from "../tasks";

function* getTodoList() {
  yield put({
    type: types.GET_TODO_LIST_SUCCESS,
  });
}

function* addTodoList(action) {
  yield put({
    type: types.ADD_TODO_LIST_SUCCESS,
    payload: action.payload,
  });
}

function* toggleRemainder(action) {
  yield put({
    type: types.TOGGLE_REMAINDER_SUCCESS,
    payload: action.payload,
  });
}

function* rootSaga() {
  yield takeEvery(types.GET_TODO_LIST, getTodoList);
  yield takeEvery(types.ADD_TODO_LIST, addTodoList);
  yield takeEvery(types.TOGGLE_REMAINDER, toggleRemainder);
}

export default rootSaga;

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import todoReducer from "./reducers/todoReducers";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = compose(applyMiddleware(sagaMiddleware))(createStore)(
  todoReducer
);

sagaMiddleware.run(rootSaga);

export default store;

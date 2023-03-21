import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import ThunkMiddleware  from "redux-thunk";

const composed = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composed(applyMiddleware(ThunkMiddleware))
);

export default store;
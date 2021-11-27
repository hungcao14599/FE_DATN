import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import appReducers from "../reducers";

const isProd = process.env.PROD;

const logger = createLogger({});

const middlewares = [thunk, !isProd && logger].filter(Boolean);

export default function configureStore() {
    const store = createStore(
        appReducers(),
        compose(applyMiddleware(...middlewares))
    );
    return store;
}
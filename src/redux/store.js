import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import {thunk} from "redux-thunk";
import { reducer } from "./product/reducer"






const rootReducer = combineReducers({ reducer});
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
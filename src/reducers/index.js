import { combineReducers } from "redux";
import accountReducers from "./account";

const reducers = combineReducers({ account: accountReducers });

export default reducers;

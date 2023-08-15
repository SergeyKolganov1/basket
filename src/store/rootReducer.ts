import { combineReducers } from "redux";

import productReducers from "./productReducers";

const rootReducer = combineReducers({
  product: productReducers,
});

export type AuthState = ReturnType<typeof rootReducer>;

export default rootReducer;
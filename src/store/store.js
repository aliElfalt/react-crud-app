import { combineReducers, createStore } from "redux";
import { customersReducer } from "./customersReducer";
import { searchReducer } from "./searchReducer";
import { sidebarReducer } from "./sidebarReducer";

const appReducer = combineReducers({
    search: searchReducer,
    customers: customersReducer,
    sidebar: sidebarReducer
})

export const store = createStore(appReducer);
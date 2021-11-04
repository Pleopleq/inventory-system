import { createStore } from "redux";
import { itemsReducer } from "./itemsReducer";

export const store = createStore(itemsReducer);

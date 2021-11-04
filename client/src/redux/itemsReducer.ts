import { ActionReducer } from "./actions";

export interface ItemsState {
  items: string[];
}

const initialState = {
  items: [],
};

export const itemsReducer = (
  state: ItemsState = initialState,
  action: ActionReducer
) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return { ...state, items: [...state.items, action.payload] };
    }
    default:
      return state;
  }
};

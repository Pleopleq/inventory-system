export type ActionReducer = { type: "ADD_ITEM"; payload: string };

export const addItem = (item: string): ActionReducer => ({
  type: "ADD_ITEM",
  payload: item,
});

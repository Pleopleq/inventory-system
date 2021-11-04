import React, { useEffect } from "react";
import IPage from "../interfaces/Page";
import logging from "../config/logging";
import AddItemInput from "../components/AddItemInput";
import { useDispatch, useSelector } from "react-redux";
import { ItemsState } from "../redux/itemsReducer";
import { addItem } from "../redux/actions";

const HomePage: React.FunctionComponent<IPage> = (props) => {
  const items = useSelector<ItemsState, ItemsState["items"]>(
    (state) => state.items
  );
  const dispatch = useDispatch();

  const addItemDispatch = (item: string) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
    <>
      <h1>Home page</h1>
      <AddItemInput addItem={addItemDispatch}></AddItemInput>
      <hr />
      <ul>
        {items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default HomePage;

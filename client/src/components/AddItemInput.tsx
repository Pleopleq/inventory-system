import React, { ChangeEvent } from "react";

interface IItemInputProps {
  addItem(item: string): void;
}

const AddItemInput: React.FC<IItemInputProps> = ({ addItem }) => {
  const [item, setItem] = React.useState("");

  const onUpdateItem = (event: ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value);
  };

  const onAddItem = () => {
    addItem(item);
    setItem("");
  };

  return (
    <div>
      <input
        onChange={onUpdateItem}
        value={item}
        type='text'
        name='item'
        placeholder='Item Name'
      />
      <button onClick={onAddItem}>Add item</button>
    </div>
  );
};

export default AddItemInput;

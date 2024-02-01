import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import  Stats  from "./Stats";
import  PackigingList  from "./PackigingList";

export default function App() {
  const [items, setItems] = useState([]);
  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all of this?"
    );
    if (confirmed) setItems([]);
  }
  function addItems(item) {
    setItems((items) => [...items, item]);
  }
  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function toggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form handleItems={addItems} />
      <PackigingList
        items={items}
        handleDeleteItem={deleteItem}
        handleToggle={toggle}
        clearAll={clearList}
      />
      <Stats items={items} />
    </div>
  );
}

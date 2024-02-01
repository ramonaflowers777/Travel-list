export default function Item({ item, handleDeleteItem, handleToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          handleToggle(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "Line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}

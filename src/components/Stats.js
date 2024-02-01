export  default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const length = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percantage = Math.round((numPacked / length) * 100);
  return (
    <footer className="stats">
      <em>
        {percantage === 100
          ? "You got everything!Ready to go ✈️"
          : `You have ${length} items on your list,and you already packed ${numPacked} (${percantage}%)`}
      </em>
    </footer>
  );
}

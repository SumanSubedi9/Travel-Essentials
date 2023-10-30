// STATS COMPONENT
export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list ✅ </em>
      </p>
    );
  const numOfItem = items.length;
  const numOfPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numOfPacked / numOfItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️ "
          : `You have ${numOfItem} items on your list, and you already packed
        ${numOfPacked} (${percentage}%) `}
      </em>
    </footer>
  );
}

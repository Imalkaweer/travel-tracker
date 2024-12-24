export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );
  }
  const numOfItems = items.length;
  const numOfPacked = items.filter((item) => item.packed === true).length;
  const completionPercentage = Math.round((numOfPacked / numOfItems) * 100);

  return (
    <footer className="stats">
      <em>
        {completionPercentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numOfItems} items on your list, and you already packed
        ${numOfPacked}(${completionPercentage}%) 🚀`}
      </em>
    </footer>
  );
}

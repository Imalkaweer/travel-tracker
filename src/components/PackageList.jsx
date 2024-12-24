import { useState } from "react";
import Item from "./Item";

export default function PackageList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItemList;

  if (sortBy === "input") sortedItemList = items;

  if (sortBy === "description")
    sortedItemList = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed") {
    console.log("hi");
    sortedItemList = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
    console.log(sortedItemList);
  }

  return (
    <div className="list">
      <ul>
        {sortedItemList.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}

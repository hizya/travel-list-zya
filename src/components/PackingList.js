import { useState } from 'react';
import Item from './Item';

export default function PackingList({
  itemLists,
  onDeleteItem,
  onUpdateItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState('input');

  let newItems;

  if (sortBy === 'input') newItems = itemLists;

  if (sortBy === 'description')
    newItems = itemLists
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    newItems = itemLists
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <section className="list">
      <ul>
        {newItems.map(item => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="status">sort by packed status</option>
        </select>
        <button onClick={onClearList}>clear list</button>
      </div>
    </section>
  );
}

import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

import '../index.css';

export default function App() {
  const [itemLists, setItemLists] = useState([]);

  function handleAddItem(item) {
    setItemLists(items => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItemLists(items => items.filter(item => item.id !== id));
  }

  function handleUpdateItem(id) {
    // console.log(!itemLists.find(item => item.id === id).packed);
    setItemLists(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm(
      'Are you sure you want to clear the list?'
    );

    if (confirmed) setItemLists([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        itemLists={itemLists}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onClearList={handleClearItems}
      />
      <Stats items={itemLists} />
    </div>
  );
}

// Start adding some items to your packing list 🚀

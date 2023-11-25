import { useState } from 'react';

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState('');

  const [quantity, setQuantity] = useState(1);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItem(newItem);

    setDescription('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleFormSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={e => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        placeholder="item..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

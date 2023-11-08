// src/components/ItemForm/ItemForm.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../reducers/cartReducer';
import { v4 as uuidv4 } from 'uuid'; // Import uuid
import { RootState } from '../store/store';

const ItemForm = () => {
  const [name, setName] = useState<string>('');
  const [selectedShop, setSelectedShop] = useState<string>('');

  const dispatch = useDispatch();
  const shops = useSelector((state: RootState) => state.shop.shops);

  const handleAddItem = () => {
    if (name && selectedShop) {
      dispatch(addItem({ id: uuidv4(), name, shop: selectedShop }));
      setName('');
      setSelectedShop('');
    }
  };

  useEffect(() => {
    console.log(shops);
  }, [shops]);

  return (
    <div className="item-form">
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={selectedShop} onChange={(e) => setSelectedShop(e.target.value)}>
        <option value="">Select a shop</option>
        {shops?.map((shop) => (
          <option key={shop.id} value={shop.id}>
            {shop.name}
          </option>
        ))}
      </select>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default ItemForm;

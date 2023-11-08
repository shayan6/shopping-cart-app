import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../reducers/cartReducer';
import { RootState } from '../store/store';

const ShoppingCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems?.map((item) => (
          <li key={item.id}>
            {item.name} (Shop: {item.shop})
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;

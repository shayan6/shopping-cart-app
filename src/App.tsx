import React, { useEffect } from 'react';
import { AppDispatch } from './store/store';
import ItemForm from './components/ItemForm';
import ShoppingCart from './components/ShoppingCart';
import ShopList from './components/ShopList';
import { useDispatch } from 'react-redux';
import { loadShops } from './actions/shopActions';

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action to load shops when the component mounts
    dispatch(loadShops());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Shopping Cart Application</h1>
      <div className="container">
        <div className="left-column">
          <ItemForm />
        </div>
        <div className="right-column">
          <ShoppingCart />
        </div>
      </div>
      <div className="shop-list-container">
        <ShopList />
      </div>
    </div>
  );
}

export default App;

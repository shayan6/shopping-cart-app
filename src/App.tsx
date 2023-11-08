import React, { useEffect } from 'react';
import { AppDispatch } from './store/store';
import ItemForm from './components/ItemForm';
import ShoppingCart from './components/ShoppingCart';
import ShopList from './components/ShopList';
import { useDispatch } from 'react-redux';
import { loadShops } from './actions/shopActions';
import { ConfigProvider, Layout } from "antd";
import Sidebar from './components/Sidebar';
import { HashRouter } from 'react-router-dom';

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action to load shops when the component mounts
    dispatch(loadShops());
  }, [dispatch]);

  return (
    <ConfigProvider direction="ltr">
      <HashRouter>
        <Layout>
          <Sidebar />
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
        </Layout>
      </HashRouter>
    </ConfigProvider>
  );
}

export default App;

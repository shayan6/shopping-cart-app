import React, { useEffect } from 'react';
import { AppDispatch } from './store/store';
import ItemForm from './components/ItemForm';
import ShoppingCart from './components/ShoppingCart';
import ShopList from './components/ShopList';
import { useDispatch } from 'react-redux';
import { loadShops } from './actions/shopActions';
import Sidebar from './components/Sidebar';
import { HashRouter } from 'react-router-dom';
import { Content } from "antd/es/layout/layout";
import { ConfigProvider, Col, Divider, Layout, Row } from "antd";
import Footer from './components/Footer';

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action to load shops when the component mounts
    dispatch(loadShops());
  }, [dispatch]);

  return (
    <ConfigProvider direction="ltr">
      <Layout>
        <HashRouter>
          <Layout className="site-layout">
            <Sidebar />
            <Content>
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
              <Row gutter={18}>
                <Col span={24}>
                  <Divider />
                </Col>
              </Row>
              <Footer/>
            </Content>
          </Layout>
        </HashRouter>
      </Layout>
    </ConfigProvider>
  );
}

export default App;

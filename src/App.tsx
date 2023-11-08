import React, { useEffect } from 'react';
import { AppDispatch } from './store/store';
import { useDispatch } from 'react-redux';
import { loadShops } from './actions/shopActions';
import Sidebar from './components/Sidebar';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import { ConfigProvider, Col, Divider, Layout, Row } from "antd";
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

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
              <Routes>
                <Route path="*" element={<Dashboard />} />
                <Route path="/Shop" element={<Shop />} />
                <Route path="/Settings" element={<Settings />} />
              </Routes>
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

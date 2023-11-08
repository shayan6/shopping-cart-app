import React from 'react';
import ItemForm from '../components/ItemForm';
import ShopList from '../components/ShopList';
import ShoppingCart from '../components/ShoppingCart';
import { Row, Col, Typography, Card } from "antd";
import PageHeader from "../components/PageHeader";

const Shop = () => {
  return (
    <Row className="shopping-cart">
      <Col span={24}>
        <PageHeader title="Shopping Cart Application" />
      </Col>
      <Col span={24}>
        <Card>
          <Typography.Title level={4}> Add to cart: </Typography.Title>
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
        </Card>
      </Col>
    </Row>
  );
};

export default Shop;

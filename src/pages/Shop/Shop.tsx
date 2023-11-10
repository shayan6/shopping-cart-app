import React from 'react';
import ItemForm from '../../components/Shop/ItemForm';
import ShopList from '../../components/Shop/ShopList';
import ShoppingCart from '../../components/Shop/ShoppingCart';
import { Row, Col, Card } from "antd";
import PageHeader from "../../components/PageHeader";

const Shop = () => {
  return (
    <Row className="shopping-cart" gutter={[16, 16]}>
      <Col span={24}>
        <PageHeader title="Shopping Cart Application" />
      </Col>
      <Col span={24}>
        <Card>
          <ItemForm />
          <ShoppingCart />
        </Card>
      </Col>
      <Col span={24}>
        <ShopList />
      </Col>
    </Row>
  );
};

export default Shop;

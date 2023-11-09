import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../reducers/cartReducer';
import { RootState } from '../../store/store';
import { Row, Col, Button } from "antd";

const ShoppingCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="shopping-cart" style={{ maxWidth: 600 }}>
      {cartItems?.map((item) => (
        <Row key={item.id} gutter={16}>
          <Col span={10}>
           {item.name}
          </Col>
          <Col span={10}>
            {item.shop}
          </Col>
          <Col span={2}>
            <Button type="link" danger onClick={() => handleRemoveItem(item.id)}>Remove</Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default ShoppingCart;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../reducers/cartReducer";
import { RootState } from "../../store/store";
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
        <Row key={item.id} gutter={16} style={{ marginBottom: 8 }}>
          <Col xs={24} sm={12} md={10}>
            {item.name}
          </Col>
          <Col xs={24} sm={12} md={10}>
            {item.shop}
          </Col>
          <Col xs={24} sm={12} md={4}>
            <Button
              type="link"
              danger
              onClick={() => handleRemoveItem(item.id)}
              style={{ width: "100%" }}
            >
              Remove
            </Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default ShoppingCart;

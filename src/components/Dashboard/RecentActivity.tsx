import React from "react";
import { useSelector } from "react-redux";
import { Col, Divider, Row } from "antd";

import avatar from "../../assets/images/avatar.jpg";
import { RootState } from "../../store/store";

export default function RecentActivity() {
  // Assuming your reducer has a slice named 'cart' with a 'cartItems' property
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <Row>
      <Col span={24}>
        <Divider orientation="left" orientationMargin="0%">
          Recent activities
        </Divider>
        <div className="activity-boxes-w">
          {cartItems.map((item) => (
            <div key={item.id} className="activity-box-w">
              <div className="activity-time">1 Item</div>
              <div className="activity-box">
                <div className="activity-avatar">
                  <img alt="" src={avatar} />
                </div>
                <div className="activity-info">
                  <div className="activity-role">{item.shop}</div>
                  <strong className="activity-title">{item.name}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
}

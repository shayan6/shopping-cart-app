import { Col, Row, Select, Space, Typography } from "antd";
import React from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
const { Option } = Select; // Add this line

export default function Filters() {
  const shops = useSelector((state: RootState) => state.shop.shops);

  return (
    <Row className="row-filters" style={{ marginBottom: 0, marginTop: 16 }}>
      <Col xs={24} sm={24} md={7}>
        <Space>
          <Typography.Text>Shop</Typography.Text>
          <Select
            size="middle"
            placeholder="Select Shop"
            style={{ width: "180px" }}
          >
            <Option value="">All shops</Option>
            {shops.map((shop) => (
              <Option key={shop.id} value={shop.id}>
                {shop.name}
              </Option>
            ))}
          </Select>
        </Space>
      </Col>
      <Col xs={24} sm={24} md={8}>
        <Space>
          <Typography.Text>Date</Typography.Text>
          <Select size="middle" placeholder="Date" style={{ width: "180px" }}>
            <Option>All time</Option>
          </Select>
        </Space>
      </Col>
    </Row>
  );
}

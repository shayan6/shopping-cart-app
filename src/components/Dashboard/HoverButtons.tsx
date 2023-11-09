import { Card, Col, Divider, Row, Space, Typography } from "antd";
import React from "react";
import { CalendarOutlined, DollarOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function HoverButtons() {
  const { shop, cart } = useSelector((state: RootState) => state);
  const { Text } = Typography;
  return (
    <Row gutter={18}>
      <Col span={24}>
        <Divider />
      </Col>
      <Col span={12}>
        <Card className="el-tablo">
          <Row>
            <Col span={12}>
              <span className="iconCircle">
                <CalendarOutlined />
              </span>
            </Col>
            <Col span={12} className="text-right">
              <Space direction="vertical" size={6}>
                <Text className="value">{shop.shops.length}</Text>
                <Text className="label">Shops</Text>
              </Space>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={12}>
        <Card className="el-tablo">
          <Row>
            <Col span={12}>
              <span className="iconCircle">
                <DollarOutlined />
              </span>
            </Col>
            <Col span={12} className="text-right">
              <Space direction="vertical" size={6}>
                <Text className="value">{cart.cartItems.length}</Text>
                <Text className="label">Sales</Text>
              </Space>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

import React from "react";
import { Col, Row, Divider } from "antd";
import BreadCumb from "../components/BreadCumb";

const Dashboard = () => {
  return (
    <Row>
      <Col span={24}>
        <BreadCumb path="Dashboard"></BreadCumb>
      </Col>
      <Col span={16}>
        filters
        <Row gutter={16}>
          <Col span={24}>
            <Divider orientation="left" orientationMargin="0">
              Key performance indicators
            </Divider>
          </Col>
        </Row>
      </Col>
      <Col span={1} style={{ textAlign: "center" }}>
        <Divider type="vertical" style={{ height: "100%" }} />
      </Col>
      <Col span={7}>"payments"</Col>
    </Row>
  );
};

export default Dashboard;

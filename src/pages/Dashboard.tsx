import React from "react";
import { Col, Row, Divider } from "antd";
import BreadCumb from "../components/BreadCumb";
import Filters from "../components/Dashboard/Filters";
import RecentActivity from "../components/Dashboard/RecentActivity";
import PaymentsChart from "../components/Dashboard/PaymentsChart";
import "../assets/styles/dashboard.scss";
import KpisCharts from "../components/Dashboard/KpisCharts";
import HoverButtons from "../components/Dashboard/HoverButtons";
import ShopsTable from "../components/Dashboard/ShopsTable";

const Dashboard = () => {
  return (
    <Row>
      <Col span={24}>
        <BreadCumb path="Dashboard"></BreadCumb>
      </Col>
      <Col span={16}>
        <Filters />
        <HoverButtons />
        <Row gutter={16}>
          <Col span={24}>
            <KpisCharts />
          </Col>
          <Col span={24}>
            <ShopsTable />
          </Col>
        </Row>
      </Col>
      <Col span={1} style={{ textAlign: "center" }}>
        <Divider type="vertical" style={{ height: "100%" }} />
      </Col>
      <Col span={7}>
        <PaymentsChart />
        <RecentActivity />
      </Col>
    </Row>
  );
};

export default Dashboard;

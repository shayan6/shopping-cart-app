import React from "react";
import { Col, Divider, Row, Tag, Table, Avatar } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ShopOutlined } from "@ant-design/icons";

export default function ShopsTable() {
  const { shops } = useSelector((state: RootState) => state.shop);
  const settings = useSelector((state: RootState) => state.common.settings);

  const columns = [
    {
      title: "Avatar",
      dataIndex: "id",
      key: "id",
      render: (id: string) => (
        <span className="nowrap">
          <Avatar
            className={`avatar${id}`}
            style={{
              backgroundColor: settings?.color.colorPrimary || "#7bc617",
            }}
            icon={<ShopOutlined />}
          />
        </span>
      ),
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Sort order",
      dataIndex: "sortOrder",
      key: "sortOrder",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span className="nowrap">
          <Tag color={status === "Open" ? "green" : "blue"}>{status}</Tag>
        </span>
      ),
    },
  ];

  const data = shops?.map((shop) => ({
    key: shop.id,
    id: shop.id,
    name: shop.name,
    sortOrder: shop.sortOrder,
    status: "Open",
  }));

  return (
    <Row>
      <Col span={24}>
        <Divider orientation="left" orientationMargin="0%">
          Shops
        </Divider>
        <div className="table-responsive">
          <Table columns={columns} dataSource={data} />
        </div>
      </Col>
    </Row>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Avatar, Card, Space, Typography } from "antd";
import { Shop } from "../../types";
import {
  ShopOutlined, // Import the outlined icon you want to use
} from "@ant-design/icons";

const ShopList = () => {
  const shops: Shop[] = useSelector((state: RootState) => state.shop.shops);
  const gridStyle: React.CSSProperties = {
    width: "33.33%",
    textAlign: "center",
  };

  return (
    <Card title="Shops">
      {shops?.map((shop) => (
        <Card.Grid key={shop.id} style={gridStyle}>
          <Space direction="vertical">
            <Avatar
              icon={<ShopOutlined />}
              style={{ backgroundColor: "#7bc617" }}
            />{" "}
            {/* Use the outlined icon here */}
            <Typography.Text>{shop.name}</Typography.Text>
          </Space>
        </Card.Grid>
      ))}
    </Card>
  );
};

export default ShopList;

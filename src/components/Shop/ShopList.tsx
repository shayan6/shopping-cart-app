import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Avatar, Card, Space, Typography } from "antd";
import { Shop } from "../../types";
import {
  ShopOutlined,
} from "@ant-design/icons";

const ShopList = () => {
  const shops: Shop[] = useSelector((state: RootState) => state.shop.shops);
  const settings = useSelector((state: RootState) => state.common.settings);
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
              style={{
                backgroundColor: settings?.color.colorPrimary || "#7bc617",
              }}
            />{" "}
            <Typography.Text>{shop.name}</Typography.Text>
          </Space>
        </Card.Grid>
      ))}
    </Card>
  );
};

export default ShopList;

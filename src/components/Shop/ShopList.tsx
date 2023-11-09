import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Card } from "antd";
import { Shop } from "../../types";

const ShopList = () => {
  const shops: Shop[] = useSelector((state: RootState) => state.shop.shops);
  const gridStyle: React.CSSProperties = {
    width: "33.33%",
    textAlign: "center",
  };

  return (
    <Card title="Shops">
      {shops
        ?.map((shop) => (
          <Card.Grid key={shop.id} style={gridStyle}>
            {shop.name}
          </Card.Grid>
        ))}
    </Card>
  );
};

export default ShopList;

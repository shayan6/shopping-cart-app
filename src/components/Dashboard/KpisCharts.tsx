import React from "react";
import { DualAxes } from "@ant-design/plots";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function KpisCharts() {
  const settings = useSelector((state: RootState) => state.common.settings);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const shopCountMap: Record<string, number> = {};
  cartItems.forEach((item) => {
    const { shop } = item;
    shopCountMap[shop] = (shopCountMap[shop] || 0) + 1;
  });

  const uvBillData = Object.keys(shopCountMap).map((shop) => ({
    shop,
    value: shopCountMap[shop],
    type: "Items",
  }));

  const transformData = uvBillData.map(({ shop, value }) => ({
    shop: shop,
    count: value,
  }));

  const config = {
    data: [uvBillData, transformData],
    xField: "shop",
    yField: ["value", "count"],
    geometryOptions: [
      {
        geometry: "column",
        isGroup: true,
        seriesField: "type",
        color: [settings?.color.colorPrimary || "#7bc617"],
      },
      {
        geometry: "line",
        lineStyle: {
          lineWidth: 2,
        },
        seriesField: "count",
        color: settings?.color.colorSuccess || "#7bc617",
      },
    ],
  };

  return (
    <Card>
      <DualAxes {...config} />
    </Card>
  );
}

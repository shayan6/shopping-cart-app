import React from "react";
import { DualAxes } from "@ant-design/plots";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function KpisCharts() {
  const settings = useSelector((state: RootState) => state.common.settings);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const shopCountMap: Record<string, any> = {};
  cartItems.forEach((item) => {
    const { shop } = item;
    shopCountMap[shop] = (shopCountMap[shop] || 0) + 1;
  });

  // Assuming your cartItems have the same structure as the provided data
  const uvBillData = Object.keys(shopCountMap).map((shop) => ({
    shop,
    value: shopCountMap[shop],
    type: "Items",
  }));

  const transformData = uvBillData.map(({ shop, value }) => ({
    shop: shop, // Assuming shop names as time for transformData
    count: value, // You can customize the count calculation based on your requirements
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

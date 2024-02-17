import React from "react";
import { Pie } from "@ant-design/plots";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Card, Col, Divider, Row } from "antd";

export default function DoughnutChart() {
  const settings = useSelector((state: RootState) => state.common.settings);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const colors = Object.values(settings?.color || {});
  const result = cartItems.reduce(
    (acc: { shop: string; sales: number; color: string }[], item, i) => {
      const existingShop = acc.find((x) => x.shop === item.shop);

      if (existingShop) {
        existingShop.sales += 1;
      } else {
        const color = colors?.[i];
        acc.push({ shop: item.shop, sales: 1, color });
      }

      return acc;
    },
    []
  );

  const totalSales = result.reduce((total, shop) => total + shop.sales, 0);

  const config = {
    width: 500,
    height: 220,
    data: result,
    angleField: "sales",
    colorField: "shop",
    radius: 0.8,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-30%",
      content: "{value}",
      style: {
        textAlign: "center",
      },
    },
    ...(settings?.color && { color: Object.values(settings.color) } ),
    statistic: {
      content: {
        formatter: () => `${totalSales}`,
        style: {
          fontSize: "2rem",
        },
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
  };

  return (
    <Row>
      <Col span={24}>
        <Divider orientation="left" orientationMargin="0%">
          Sales
        </Divider>
        <Card>
          <Pie {...config} />
        </Card>
      </Col>
    </Row>
  );
}

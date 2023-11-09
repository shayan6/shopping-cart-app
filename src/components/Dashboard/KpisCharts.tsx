import React from "react";
import { DualAxes } from "@ant-design/plots";
import { Card, Divider } from "antd";

export default function KpisCharts() {
  const uvBillData = [
    {
      time: "2019-03",
      value: 350,
      type: "Appintments",
    },
    {
      time: "2019-04",
      value: 900,
      type: "Appintments",
    },
    {
      time: "2019-05",
      value: 300,
      type: "Appintments",
    },
    {
      time: "2019-06",
      value: 450,
      type: "Appintments",
    },
    {
      time: "2019-07",
      value: 470,
      type: "Appintments",
    },
    {
      time: "2019-03",
      value: 220,
      type: "Payments",
    },
    {
      time: "2019-04",
      value: 300,
      type: "Payments",
    },
    {
      time: "2019-05",
      value: 250,
      type: "Payments",
    },
    {
      time: "2019-06",
      value: 220,
      type: "Payments",
    },
    {
      time: "2019-07",
      value: 362,
      type: "Payments",
    },
  ];
  const transformData = [
    {
      time: "2019-03",
      count: 800,
    },
    {
      time: "2019-04",
      count: 600,
    },
    {
      time: "2019-05",
      count: 400,
    },
    {
      time: "2019-06",
      count: 380,
    },
    {
      time: "2019-07",
      count: 220,
    },
  ];
  const config = {
    data: [uvBillData, transformData],
    xField: "time",
    yField: ["value", "count"],
    geometryOptions: [
      {
        geometry: "column",
        isGroup: true,
        seriesField: "type",
      },
      {
        geometry: "line",
        lineStyle: {
          lineWidth: 2,
        },
      },
    ],
  };
  return (
    <>
      <Divider orientation="left" orientationMargin="0">
        Key performance indicators
      </Divider>
      <Card>
        <DualAxes {...config} />
      </Card>
    </>
  );
}

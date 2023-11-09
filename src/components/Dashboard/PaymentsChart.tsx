import React from "react";
import { Pie, measureTextWidth, PieConfig } from "@ant-design/plots";
import { Card, Col, Divider, Row } from "antd";

interface Payment {
  type: string;
  value: number;
}

export default function PaymentsChart() {
  function renderStatistic(
    containerWidth: number,
    text: string,
    style: React.CSSProperties
  ): JSX.Element {
    const { width: textWidth, height: textHeight } = measureTextWidth(
      text,
      style
    );
    const R = containerWidth / 2;

    let scale = 1;

    if (containerWidth < textWidth) {
      scale = Math.min(
        Math.sqrt(
          Math.abs(
            Math.pow(R, 2) /
              (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2))
          )
        ),
        1
      );
    }

    const textStyleStr = `width:${containerWidth}px;`;
    return (
      <div
        style={{
          ...style,
          width: `${containerWidth}px`,
          fontSize: `${scale}em`,
          lineHeight: scale < 1 ? 1 : "inherit",
        }}
      >
        {text}
      </div>
    );
  }

  const data: Payment[] = [
    {
      type: "Cash",
      value: 270,
    },
    {
      type: "Bank",
      value: 250,
    },
    {
      type: "Credit card",
      value: 180,
    },
    {
      type: "Wise",
      value: 150,
    },
    {
      type: "LHV",
      value: 100,
    },
    {
      type: "Revolute",
      value: 500,
    },
  ];

  const config: PieConfig = {
    width: 500,
    height: 220,
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: (v) => `${v} ¥`,
      },
    },
    label: {
      type: "inner",
      offset: "-50%",
      style: {
        textAlign: "center",
      },
      autoRotate: false,
      content: "{value}",
    },
    statistic: {
      title: {
        offsetY: -4,
        customHtml: (container, view, datum) => {
          const { width, height } = container.getBoundingClientRect();
          const d = Math.sqrt(
            Math.pow(width / 21, 2) + Math.pow(height / 2, 2)
          );
          const text = datum ? datum.type : "Total";
          return renderStatistic(d, text, {
            fontSize: 28,
          }) as any;
        },
      },
      content: {
        offsetY: 4,
        style: {
          fontSize: "32px",
        },
        customHtml: (container, view, datum, data) => {
          const { width } = container.getBoundingClientRect();
          const text = datum
            ? `$ ${datum.value}`
            : `$ ${data?.reduce((r, d) => r + d.value, 0)}`;
          return renderStatistic(width, text, {
            fontSize: 32,
          }) as any;
        },
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
      {
        type: "pie-statistic-active",
      },
    ],
  };

  return (
    <Row>
      <Col span={24}>
        <Divider orientation="left" orientationMargin="0%">
          Payments
        </Divider>
        <Card>
          <Pie {...config} />
        </Card>
      </Col>
    </Row>
  );
}

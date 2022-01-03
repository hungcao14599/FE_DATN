import React from "react";
import { Line } from "@ant-design/charts";
import styled from "styled-components";

export default function UsersLineCharts({ data }) {
  const config = {
    data: data,
    xField: "month",
    yField: "value",
    color: "#ca0533",
    lineStyle: {
      stroke: "#ca0533",
      lineWidth: 2,
      cursor: "pointer",
    },
    point: {
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "#ca0533",
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: "#000",
          fill: "#ca0533",
        },
      },
    },
    interactions: [
      {
        type: "marker-active",
      },
    ],
    slider: {
      start: 0,
      end: 1,
    },
  };

  return (
    <Chart>
      <Lable></Lable>
      <Line {...config} />
      <Des>Line chart showing the number of subscribers by month</Des>
    </Chart>
  );
}

const Chart = styled.div`
  margin: 20px auto 50px;
`;
const Lable = styled.span`
  color: #ca0533;
`;
const Des = styled.p`
  color: #ca0533;
  text-align: center;
  font-size: 15px;
  margin: 20px auto;
`;

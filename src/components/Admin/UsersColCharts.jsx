import React from "react";
import { Column } from "@ant-design/charts";
import styled from "styled-components";

export default function UsersColCharts({ data }) {
  const config = {
    data,
    xField: "month",
    yField: "value",
    columnWidthRatio: 0.5,
    color: "#ca0533",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    slider: {
      start: 0,
      end: 1,
    },
  };

  return (
    <Chart>
      <Lable></Lable>
      <Column {...config} />
      <Des>Column chart showing the number of subscribers by month</Des>
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

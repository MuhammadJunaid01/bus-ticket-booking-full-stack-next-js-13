import React from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
const data = [{ value: 75 }];
const CircleChart = ({ percentage }: { percentage: number }) => {
  const data = [{ name: "Percentage", value: percentage }];
  return <div className="radialBarChart"></div>;
};

export default CircleChart;

import { CustomLineChartProps } from "@/lib/interfaces";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomLineChart = ({ data = [], color = "" }: CustomLineChartProps) => {
  return (
    <div style={{ height: "100px", width: "110px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={200} height={100} data={data}>
          <Line
            type="natural"
            dataKey="pv"
            stroke={color}
            strokeWidth={1}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;

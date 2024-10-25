import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "Laboghni ururs", uv: 2000, pv: 9800 },
  { name: "GLE", uv: 1890, pv: 4800 },
];

const MyAreaChart = () => {
  return (
    <div className="col-span-2">
    <div className="flex flex-col items-center flex-1">
      <section className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 w-full">
        <strong className="text-gray-700 font-medium">Transactions</strong>
        <div className="flex justify-center items-center">
          <AreaChart
            width={350}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 5, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
      </section>
    </div>
    </div>
  );
};

export default MyAreaChart;
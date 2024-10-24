import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';

const data = [
    { "name": "Venza", "uv": 4000, "pv": 2400},
    { "name": "Mercedes-CLA", "uv": 3000, "pv": 1398},
    { "name": "Laboghni ururs", "uv": 2000, "pv": 9800},
    { "name": "Toyota corrolla", "uv": 2780, "pv": 3908},
    { "name": "GLE 450", "uv": 1890, "pv": 4800},
    { "name": "GLK 350", "uv": 2390, "pv": 3800},
];

const MyAreaChart = () => {
    return (
        <section className='w-[20em] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col md:flex-1 justify-center items-center' >
            <strong className='text-gray-700 font-medium' > Transactions</strong>
<div className='flex justify-center items-center'>
        <AreaChart
            width={350}
            className='w-full'
            height={250}
            data={data}
            margin={{ top: 10, right: 50, left: 50, bottom: 0 }}
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
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
        </div>
        </section>
    );
};

export default MyAreaChart;
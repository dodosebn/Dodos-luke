import React from 'react';
import { PieChart, Pie } from 'recharts';

const data = [
{ name: 'male', value: 531 },
{ name: "female", value: 532 },
{ name: "other", value: 533 }
];

const BuyerProfileChart = () => {
return (
    <section className='h-[22rem] w-[18rem]  bg-white p-4 rounded-sm border border-gray-200 flex flex-col md:w-[20rem]'>
            <strong className='text-gray-700 font-medium' > Buyer Profile</strong>
<div className=" mt-3 text-xs">
<PieChart width={300} height={250}>
<Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label />
</PieChart>
</div>
</section>
);
}

export default BuyerProfileChart;

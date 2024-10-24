import React from 'react';
import { FcBriefcase, FcConferenceCall, FcElectronics } from "react-icons/fc";
import { HiOutlineShoppingCart } from "react-icons/hi";

const DivHolder = ({ children }) => {
    return (
        <div className='relative flex flex-col items-center justify-center bg-white w-full p-2 md:p-12 bg-white rounded-sm border border-gray-200 '>
            
            {children}
        </div>
    );
};

const dashData = [
    {
        id: 1,
        img: <FcBriefcase  className='text-2xl text-white'/>,
        title: "Total Sales",
        Funds: "$350.00",
        extra: "+5"
    },
    {
        id: 2,
        img: <FcConferenceCall  className='text-2xl text-white'/>,
        title: "Total Customers",
        Funds: "$350.00",
        extra: "+1"
    },
    {
        id: 3,
        img: <FcElectronics  className='text-2xl text-white'/>,
        title: "Total Enquiries",
        Funds: "$350.00",
        extra: "+1"
    },
    {
        id: 4,
        img: <HiOutlineShoppingCart  className='text-2xl text-white'/>,
        title: "Total Orders",
        Funds: "$350.00",
        extra: "+2"
    },
];

const Dashboardstatgrid = () => {
    return (
        <section className='z-10'>
        <div className="grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-3 relative md:w-[55rem] rounded-7"> 
            {dashData.map((item) => (
                <DivHolder key={item.id}>
                    <div className='flex justify-start mb-4'>
                        <div className='md:absolute left-6'>
                    <span className='rounded-full h-7 w-7 md:h-12 md:w-12 flex items-center justify-center bg-sky-500 '>{item.img}</span>
                    </div>
                    <strong className='text-sm text-gray-500 font-light pl-2 md:pl-11 whitespace-nowrap '>{item.title}</strong>
                    </div>
                    <div className="flex items-center md:absolute top-20 right-5 ml-10 md:ml-0">
                        <strong className="text-xl text-gray-700 md:font-semibold">{item.Funds}</strong>
                        <span className="text-sm text-green-500 pl-2">{item.extra}</span>
                    </div>
                </DivHolder>
            ))}
        </div>
        </section>
    );
};

export default Dashboardstatgrid;
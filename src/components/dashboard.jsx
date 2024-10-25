import React from 'react';
import MyAreaChart from './DASHB/areachart';
import BuyerProfileChart from './DASHB/buyerprofile';
import RecentOrders from './DASHB/recentOrders';
import PopularProducts from './DASHB/popularProducts';
import Dashboardstatgrid from './DASHB/dashboardstatgrid';

const Dashboard = () => {
    return (
        <div className='text-center relative p-3 z-0'>
            <section className='flex flex-col gap-4 h-screen justify-between'>
                <Dashboardstatgrid />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <MyAreaChart />
                    <BuyerProfileChart />
                </div>
                <div className='flex flex-col md:flex-row gap-4'>
                    <RecentOrders />
                    <PopularProducts />
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
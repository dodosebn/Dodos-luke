import React from 'react';
import MyAreaChart from './DASHB/areachart';
import BuyerProfileChart from './DASHB/buyerprofile';
import RecentOrders from './DASHB/recentOrders';
import PopularProducts from './DASHB/popularProducts';
import Dashboardstatgrid from './DASHB/dashboardstatgrid';
const Dashboard = () => {
    return (
        <section className='flex flex-col gap-4 h-screen justify-between'>
            <Dashboardstatgrid />
<div className='flex flex-col md:flex-row gap-4' >
<MyAreaChart />
< BuyerProfileChart />
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
<RecentOrders />
<PopularProducts />
            </div>
            </section>
    );
};

export default Dashboard;
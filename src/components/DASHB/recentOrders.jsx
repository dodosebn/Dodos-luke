import React from 'react';
import { Link } from 'react-router-dom';

const recentOrderDetails = [
    {
        id: '1',
        Current_order_status: 'PLACED',
        shipment_address: 'Cottage Oreve, 84 97424'
    },
    {
        id: '2',
        Current_order_status: 'GLACED',
        shipment_address: 'Dottage Oreve, 94 97424'
    },
    {
        id: '3',
        Current_order_status: 'PENDING',
        shipment_address: 'Arizona Oreve, 84 97424'
    },
    {
        id: '4',
        Current_order_status: 'DORMANT',
        shipment_address: 'Lattage Oreve, 84 97424'
    }
];

const getOrderStatus = (status) => {
    switch (status) {
        case 'PLACED':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xl text-sky-400 bg-sky-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            );
        case 'GLACED':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xl text-yellow-400 bg-yellow-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            );
        case 'PENDING':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xl text-orange-400 bg-orange-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            );
        case 'DORMANT':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xl text-gray-400 bg-gray-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            );
        default:
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xl text-gray-500 bg-gray-200">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            );
    }
};

const RecentOrders = () => {
  return (
    <div className='bg-white p-4 rounded-sm border border-gray-200 w-[20rem] h-[22rem] flex-1'>
      <strong className='text-gray-700 font-medium text-lg'>Recent Orders</strong>
      <div className='mt-4'>
        <table className='w-full text-gray-700 border-collapse'>
            <thead>
                <tr className='bg-gray-100'>
                    <th className='py-2'>ID</th>
                    <th className='py-2 whitespace-nowrap'>Shipment Address</th>
                    <th className='py-2 whitespace-nowrap'>Order Status</th>
                </tr>
            </thead>
            <tbody className='whitespace-nowrap'>
            {recentOrderDetails.map((order) => (
                <tr key={order.id} className='border-b border-gray-200'>
                    <td className='py-2'>
                      <Link to={`./order/${order.id}`} className='text-blue-600 hover:underline'>#{order.id}</Link>
                    </td>
                    <td className='py-2 whitespace-nowrap'>{order.shipment_address}</td>
                    <td className='py-2 whitespace-nowrap'>{getOrderStatus(order.Current_order_status)}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
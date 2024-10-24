import React, { useState } from 'react';
import { HiOutlineShoppingCart}  from "react-icons/hi";
const productsCars = [
    {
        key: 1,
        title: "VDM CARS",
        about: "One of the latest fastest cars in Nigeria",
        image: './IMGS/vdm.jpg',
        price: "1000"
    },
    {
        key: 2,
        title: "Mercedes-Benz CLA",
        about: "One of the most popular car brands",
        image: './IMGS/CLA.webp',
        price: "1000"
    },
    {
        key: 3,
        title: "Ferrari",
        about: "most trending cars in the globe with 100%HP",
        image: './IMGS/ferrarri.webp',
        price: '1500'
    },
    {
        key: 4,
        title: "Venza",
        about: "One of the most affordable cars in Nigeria",
        image: './IMGS/venza.png',
        price: '1000'
    },
    {
        key: 5,
        title: "Lamborghini Urus",
        about: "One of the most expensive cars in the globe",
        image: './IMGS/lambo.jpg',
        price: "1500"
    },
    {
        key: 6,
        title: "Mercedes-GLE",
        about: "One of the most classical cars in Nigeria",
        image: './IMGS/GLE.webp',
        price: "2000"
    },
];


const Products = () => {
    const [cars] = useState(productsCars);

    return (
        <section className='md:grid grid-cols-3 gap-4 items-center'>
            {cars.map((car) => (
                <article key={car.key}  className='bg-white mt-4 rounded overflow-hidden shadow-md'>
                   <div className='relative'>
                    <img src={car.image} alt={car.title} className='w-full h-32 sm:h-48 object-cover'/>
                 <button className='absolute border-none top-2 rounded flex bg-black text-orange-500 p-1 cursor-pointer overflow-hidden'>< HiOutlineShoppingCart fontSize={24} /><span className='text-white'>Add</span></button>
                    <span className='bg-sky-100 rounded w-16 texts-center texts-sm p-3'>${car.price}</span>
                          <div className='p-4'>
                        <span className='font-bold '>{car.title}</span>
                        <p className='text-gray-500 text-sm texts-center'>{car.about}</p>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
}

export default Products;
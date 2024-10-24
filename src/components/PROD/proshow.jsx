import React, { useState } from 'react';  
import prevIcon from '../PROD/IMGS/icon-angle-left.svg';
import nextIcon from '../PROD/IMGS/icon-angle-right.svg';
import mordern4 from "../PROD/IMGS/modern4.avif";
import modern2 from '../PROD/IMGS/modern2.avif';
import modern3 from '../PROD/IMGS/modern6.avif';
import modern5 from '../PROD/IMGS/modern5.avif';
import modern6 from '../PROD/IMGS/modern6.avif';
import old4 from '../PROD/IMGS/old4.avif';
import old6 from '../PROD/IMGS/old6.avif';
import { HiOutlineShoppingCart } from "react-icons/hi";

const mixedprodta = [
  {
    id: 1,
    title: "Rev Up Your Ride",
    about: "Discover the latest models and innovations that will take your driving experience to the next level.",
    img: <img src={modern2} alt="Rev Up Your Ride" className='w-full h-[20rem] object-cover' />
  },
  {
    id: 2,
    title: "Road Ready",
    about: "Explore our extensive inventory of vehicles that are primed and ready for any adventure.",
    img: <img src={mordern4} alt="Road Ready" className='w-full h-[20rem] object-cover' />
  },
  {
    id: 3,
    title: "Eco-Friendly Engines",
    about: "Dive into our collection of hybrid and electric vehicles that combine sustainability with performance.",
    img: <img src={modern3} alt="Eco-Friendly Engines" className='w-full h-[20rem] object-cover' />
  },
  {
    id: 4,
    title: "Luxury on Wheels",
    about: "Experience the epitome of elegance with our selection of high-end cars designed for those who demand the best..",
    img: <img src={modern5} alt="Eco-Friendly Engines" className='w-full h-[20rem] object-cover' />
  },
  {
    id: 5,
    title: "Certified Pre-Owned Deals",
    about: "Get the quality and reliability of a new car without the hefty price tag with our certified pre-owned options.",
    img: <img src={modern6} alt="Eco-Friendly Engines" className='w-full h-[20rem] object-cover' />
  },
  {
    id: 6,
    title: "Financing Made Easy",
    about: "Navigate the car buying process with ease using our flexible financing options tailored to fit your lifestyle",
    img: <img src={old6} alt="Eco-Friendly Engines" className='w-full h-[20rem] object-cover' />
  },
  {
    id: 7,
    title: "Testimonials from Happy Drivers",
    about: "Hear from satisfied customers about their experiences and find out why we’re the go-to choice for car buyers.",
    img: <img src={old4} alt="Eco-Friendly Engines" className='w-full h-[20rem] object-cover' />
  },
  
];

const Proshow = () => {
  const [items] = useState(mixedprodta);
  const [slide, setSlide] = useState(0);
  
  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div>
      <section>
        {items.map((item, index) => (
          <article key={item.id} className={slide === index ? "grid grid-cols-1 md:grid-cols-2 md:place-items-center" : "hidden"}>
            <div className='relative'>
              <picture>
                {item.img}
              </picture>
              <ul className='absolute bottom-7 right-0 flex'>
                <li>
                  <button onClick={prevSlide} className='bg-black hover:bg-neutral-700 transition-all duration-200 rounded-md p-2' aria-label="Previous Slide">
                    <img src={prevIcon} className='p-4' alt="Previous Slide" />
                  </button>
                </li>
                <li>
                  <button onClick={nextSlide} className='bg-black hover:bg-neutral-700 transition-all duration-200 rounded-md p-2' aria-label="Next Slide">
                    <img src={nextIcon} className='p-4' alt="Next Slide" />
                  </button>
                </li>
              </ul>
            </div>
            <div className='p-8 md:p-12'>
              <h1 className='text-slate-900 text-3xl md:text-5xl'>{item.title}</h1>
              <p className='text-slate-900 opacity-75 my-6'>
                {item.about}
              </p>
              <button className='flex items-center gap-4 uppercase hover:opacity-75 bg-black rounded-md text-white p-3'>
                Order Now <HiOutlineShoppingCart />
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Proshow;

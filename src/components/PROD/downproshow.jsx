import React from "react";
import aboutDark from "./IMGS/about-dark.avif";
import aboutLight from "./IMGS/about-light.avif";
const DownProShow = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-3">
        <article>
          <img
            src={aboutDark}
            alt="aboutDark"
            className="w-full h-full object-fit shadow-md rounded-sm pl-0.2"
          />
        </article>
        <article className="p-8 lg:p-12">
          <h2 className="font-semibold text-2xl lg:text-3xl uppercase">
            About Our Cars
          </h2>
          <p className="text-slate-900 opacity-75 mt-6">
            Our diverse collection of vehicles combines cutting-edge technology
            with superior performance to match your lifestyle. Whether you're
            looking for a sleek sedan, a rugged SUV, or an eco-friendly hybrid,
            we have options that cater to every taste. Discover the perfect
            balance of comfort and efficiency that will elevate your driving
            experience. Our knowledgeable team is here to assist you in finding
            the car of your dreams.
          </p>
        </article>

        <article>
          <img
            src={aboutLight}
            alt=""
            className="w-full h-full shadow-md object-fit rounded-sm"
          />
        </article>
      </section>
    </>
  );
};

export default DownProShow;

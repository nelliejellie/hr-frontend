import React from "react";
import images from "../Assets/img";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-sky-500 h-[400px] w-[100%] mt-8 pt-4 text-white flex flex-col justify-around"
    >
      <h2 className="font-bold text-3xl">Our Services</h2>
      <div className="flex flex-row justify-around items-center">
        <div className="flex flex-col items-center">
          <img src={images.service} alt="Description" />
          <p className="font-bold text-2xl mt-2">First Service</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores?
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={images.service1} alt="Description" />
          <p className="font-bold text-2xl mt-2">Second Service</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores?
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={images.service2} alt="Description" />
          <p className="font-bold text-2xl mt-2">Third Service</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

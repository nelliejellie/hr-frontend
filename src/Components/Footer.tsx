import React from "react";
import images from "../Assets/img";
import { IoMdCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center mb-8">
      <img src={images.logo} alt="Description" className="md:w-[20%] w-[40%]" />
      <div className="flex flex-row justify-center items-center gap-3">
        <IoMdCall size={20} />
        <p className="text-xl font-bold">08143291888</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-3">
        <TfiEmail size={20} />
        <p className="text-xl font-bold">emekaewelike@gmail.com</p>
      </div>
      <div className="mt-8 flex flex-row justify-center items-center gap-3">
        <FaCopyright />
        <p className="">2024 Human Resources. All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;

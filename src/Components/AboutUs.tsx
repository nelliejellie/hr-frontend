import React from "react";
import images from "../Assets/img";

const AboutUs = () => {
  return (
    <section className="mt-10" id="aboutus">
      <p className="text-sky-500 font-bold text-center mx-4 text-3xl">
        Our Vision and Mission
      </p>
      <section className="flex md:flex-row justify-around items-center mt-8 flex-col-reverse mx-4">
        <div className="md:w-[40%] w-[90%]">
          <h2 className="font-bold text-2xl md:text-left text-slate-500 text-center">
            Vision
          </h2>
          <p className="md:text-left text-lg text-sky-500 text-center">
            To become a premier organization dedicated to enhancing both
            personal and professional capacities of individuals and businesses,
            fostering efficiency, heightened productivity, and innovation.
          </p>
          <h2 className="font-bold text-2xl md:text-left text-slate-500 text-center mt-8">
            Misson
          </h2>
          <p className="md:text-left text-lg text-sky-500 text-center">
            Our mission is to cultivate an empowering atmosphere for skill
            acquisition and capacity enhancement that heralds a holistic growth
            and developent for individuals and organizations
          </p>
        </div>
        <div>
          <img src={images.aboutus} alt="Description" className="" />
        </div>
      </section>
    </section>
  );
};

export default AboutUs;

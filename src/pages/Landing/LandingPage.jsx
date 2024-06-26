import React, { useContext, useState } from "react";
import Hero from "../../components/specific/Hero.jsx";
import {
  EarthBackgorundWithoutColor,
  EarthBackground,
} from "../../assets/index.js";
import { BusinessData, NavItems } from "../../constants/constants.js";

import AboutUsHome from "../../components/specific/AboutUs.jsx";
import HomeContactUs from "../../components/specific/HomeContactUs.jsx";

import Header from "../../components/Header/header.jsx";
import NavItem from "../../components/Header/NavItem.jsx";

const LandingPage = () => {
  return ( 
    <div className="h-full w-screen overflow-hidden">
      <Header />
      <div
        className="h-[100vh] w-screen"
        style={{
          backgroundImage: `url(${EarthBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <nav className="h-14 w-full flex justify-center items-center bg-[rgba(49,17,24,0.4)]  ">
          <NavItem className={"left-0 top-7 px-2 py-2"} />
        </nav>

        <Hero />
      </div>
      <AboutUsHome />
      <section
        className="w-full h-[100%] px-10 py-10"
        style={{
          backgroundImage: `url(${EarthBackgorundWithoutColor})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3
          className="w-full md:max-w-[40%] text-2xl sm:text-5xl font-bold 
        text-[#ff9900] tracking-wider  md:ml-20"
        >
          Empowering Communities & T ransforming Lives{" "}
        </h3>
        <p className="my-10 w-full md:max-w-[40%] ml-0 md:ml-20  text-white font-bold text-xl sm:text-2xl">
          Explore our projects. get involved, and be part of the movement for
          positive change
        </p>
        <div className="my-24 grid grid-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:mx-10 md:ml-20 z-50">
          {BusinessData.map((data) => (
            <div
              key={data.id}
              className="bg-[rgba(162,91,165,0.3)] py-3 px-10 rounded-[20px] max-w-[480px] h-full md:h-[220px]"
            >
              <p className="font-semibold text-[#ff9900]">{data.title}</p>
              <p className="text-white font-semibold my-3 tracking-wider">
                {data.content}
              </p>
            </div>
          ))}
        </div>
      </section>
      <HomeContactUs />
      
    </div>
  );
};

export default LandingPage;

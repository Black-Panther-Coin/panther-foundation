import React, { useContext, useState } from "react";
import Hero from "../../components/specific/Hero.jsx";
import {
  EarthBackgorundWithoutColor,
  EarthBackground,
} from "../../assets/index.js";
import { BusinessData, NavItems } from "../../constants/constants.js";
import { Link } from "react-router-dom";
import AboutUsHome from "../../components/specific/AboutUs.jsx";
import HomeContactUs from "../../components/specific/HomeContactUs.jsx";
import { MenuBarContext } from "../../context/MenuBarContext.jsx";

const LandingPage = () => {
  const { isMobileNavOpen } = useContext(MenuBarContext);
  return (
    <div className="h-full w-[100%] ">
      <div
        className="h-[100vh] w-[100vw]"
        style={{
          backgroundImage: `url(${EarthBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <nav className="h-14 w-full flex justify-center items-center bg-[rgba(49,17,24,0.4)]  relative">
          <div className="hidden md:block">
            <ul className="flex items-center gap-10 opacity-100  ">
              {NavItems.map((nav) => (
                <li key={nav.id} className="opacity-100">
                  <Link
                    to={nav.slug}
                    className="text-white font-semibold cursor-pointer
                 hover:text-sky-600 transition-all opacity-100 
                 md:text-xl "
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={
              isMobileNavOpen ? "bg-[rgb(145,65,148)] absolute right-2 top-10 w-[200px] rounded-md py-2 transition-all duration-150 block " : " transition-all duration-150 hidden"
            }
          >
            <ul className="flex flex-col items-center gap-10 opacity-100  ">
              {NavItems.map((nav) => (
                <li key={nav.id} className="opacity-100">
                  <Link
                    to={nav.slug}
                    className="text-white font-semibold cursor-pointer
                 hover:text-sky-600 transition-all opacity-100 
                 md:text-xl "
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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

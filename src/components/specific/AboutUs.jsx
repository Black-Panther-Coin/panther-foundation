import React from "react";
import { StadningPanther } from "../../assets";

const AboutUsHome = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#ff9900]  to-[#f04928] h-full 
    w-[100vw] relative py-20 overflow-hidden"
    >
      <h3
        className="px-[7%] text-xl sm:text-4xl font-extrabold
       text-black my-10"
      >
        ABOUT US
      </h3>
      <div className="py-5 px-10 md:px-[10%] bg-[rgba(0,0,0,0.3)] mx-[6%] rounded-[20px] text-left z-0  ">
        <p className="text-xl sm:text-2xl font-semibold text-white my-10 tracking-widest">
          The Black Panther Non-Profit Foundation (BPNPF) is an extension of the
          Black Panther Project's mission and vision. We are a grant-giving
          organization dedicated to empowering African communities globally
          through targeted initiatives and strategic partnerships.
        </p>
        <p className="text-xl sm:text-2xl font-semibold text-white my-10 tracking-widest">
          He became active on Occupy Wall Street's public relations team in fall
          2011. in the UK and then moved to the United States. While in the U.S.
          Gaçuça worked on Wall
        </p>
      </div>
      <img
        className="absolute -right-36 md:-right-[15rem] top-[60%] md:top-[42%] h-[25%] md:h-[70%]"
        src={StadningPanther}
        alt="Standing panther"
      />
      <div className="mx-10 md:mx-[30%] my-24">
        <h4 className="text-xl md:text-3xl font-extrabold text-white tracking-widest  ">
          BANTER TOKEN
        </h4>
        <input
          type="text"
          className="bg-white h-14 w-full my-5 rounded-[30px]"
        />
      </div>
    </section>
  );
};

export default AboutUsHome;

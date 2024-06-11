import React from "react";
import { pantherImage } from "../../assets";
import { NewsData } from "../../constants/constants";

const HomeContactUs = () => {
  return (
    <div className="w-full h-full bg-[#561956] py-10">
      <h3
        className="font-bold text-center text-[#ff9900]  
         text-xl sm:text-4xl md:text-5xl mt-14 "
      >
        GET IN TOUCH
      </h3>
      <div
        className="flex flex-col-reverse sm:flex-row items-center
       justify-around px-0 md:px-[10%]  my-20 w-[100%]"
      >
        <div className="md:w-[20%]">
          <img src={pantherImage} className="h-[300px]" alt="Panther image" />
        </div>

        <form className="flex flex-col gap-10 w-[80%] md:w-[70%]">
          <div className="bg-white w flex items-center justify-around gap-2 py-1 md:py-2 px-3 w-[100%] rounded-2xl ">
            <div className="bg-[#ff9900] rounded-[10px] text-white py-2 px-4 w-36  md:w-[15%] text-center">
              <p>First Name</p>
            </div>
            <input
              type="text"
              className="bg-transparent w-[70%] h-full  py-2 outline-none text-black"
            />
          </div>
          <div className="bg-white flex items-center justify-around gap-2 md:py-2 px-3 w-[100%] rounded-2xl ">
            <div className="bg-[#ff9900] rounded-[10px] text-white py-2 px-4 w-36  md:w-[15%] text-center">
              <p>Last Name</p>
            </div>
            <input
              type="text"
              className="bg-transparent w-[70%] h-full  py-2 outline-none text-black"
            />
          </div>
          <div className="bg-white flex items-center justify-around gap-2 py-2 px-3 w-[100%] rounded-2xl ">
            <div className="bg-[#ff9900] rounded-[10px] text-white py-2 px-4 w-36  md:w-[15%] text-center">
              <p>Email</p>
            </div>
            <input
              type="email"
              className="bg-transparent w-[70%] h-full  py-2 outline-none text-black"
            />
          </div>
          <button
            type="submit"
            className="bg-white py-3 px-3  md:mx-[40%] rounded-[20px] "
          >
            <div className="bg-[#ff9900] rounded-[10px] text-white py-2 px-4">
              <p>Submit</p>
            </div>
          </button>
        </form>
      </div>
      <p className="uppercase text-white font-bold text-xl  text-center tracking-[15px] my-5">
        Latest News
      </p>
      <div className="flex md:flex-row flex-col justify-around gap-10 px-10 md:px-24 py-10">
        {NewsData.map((news) => (
          <div key={news.id} className="flex flex-col md:flex-row gap-10">
            <input className="bg-white rounded-2xl h-[100px] w-full md:w-[120px] outline-none border-none text-white" />
            <div>
              <p>
                {news.content}{" "}
                <span className="py-1 md: px-2 bg-[#ff9900] text-white">
                  Read more
                </span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContactUs;

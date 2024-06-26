import React from "react";

const Objective = () => {
  return (
    <div className="w-full bg-[#fef9e0] mt-[-40px] px-0 md:px-36 ">
      <h3
        className="py-3 md:py-7 text-3xl md:text-6xl text-center 
         text-[#331138] font-semibold uppercase"
      >
        OUR OBJECTIVES
      </h3>
      <div className=" flex flex-col gap-4  w-full md:max-w-[70%] my-10 px-5 md:px-0">
        <h5
          className="bg-[#9a0b9a] text-white
               uppercase text-center text-xl font-bold py-3 rounded-3xl w-full md:w-1/2 "
        >
          Overcome Institute
        </h5>
        <p
          className="text-xl md:text-2xl text-[#331138]
          font-semibold text-left py-4   rounded-xl"
        >
          The BPNPF will support the formation of the Overcome Institute,
          dedicated to establishing April 4th, the anniversary of Dr. Martin
          Luther King Jr.'s assassination, as a global day of recognition.
        </p>
        <p
          className="text-xl md:text-2xl text-[#331138]
          font-semibold text-left py-4  px rounded-xl"
        >
          This day will serve as a powerful reminder of African resilience and
          our boundless potential for overcoming adversity, drawing inspiration
          from Father Dr. Peter Bramble's book, "The Overcome.
        </p>
      </div>
      <div className=" flex flex-col gap-4 w-full md:max-w-[70%] my-10 px-5 md:px-0">
        <h5
          className="bg-[#9a0b9a] text-white
               uppercase text-center text-xl font-bold py-3 rounded-3xl w-full md:w-1/2 "
        >
          African Solutions Collective
        </h5>
        <p
          className="text-xl md:text-2xl text-[#331138]
          font-semibold text-left py-4   rounded-xl"
        >
          The BPNPF will collaborate with and be a grant giving Foundation to
          the African Solutions Collective, a network advocating for African
          ownership and self-determination. We will champion initiatives that
          promote:
        </p>
        <p
          className="text-xl md:text-2xl text-[#331138]
          font-semibold text-left py-4   rounded-xl"
        >
     Supporting African-led tech platforms, fostering ownership of digital properties in Web3 and Blockchain technology, and ensuring 
        </p>
      </div>
    </div>
  );
};

export default Objective;

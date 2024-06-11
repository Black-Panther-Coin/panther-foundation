import React,{useState} from "react";
import DonationPopup from "../Popups/donationPopup";
const Hero = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const handleCloseDonatePopup = () => {
    setPopupIsOpen(false);
  };
  return (
    <div className=" h-[80%] w-full flex items-center justify-center">
      <div className="w-full md:w-[30%]  flex flex-col justify-center ">
        <h1
          className="text-xl sm:text-4xl md:text-6xl text-center 
        font-bold text-[#ff9900] tracking-wider"
        >
          BLACK PANTHER <br className="hidden sm:block" /> FOUNDATION
        </h1>
        <p
          className="text-[16px] md:text-xl font-bold text-white  text-center w-full md:w-[60%]
        tracking-wide mx-3 sm:mx-24 my-5"
        >
          An International Organization Dedicated to our Health
        </p>
        <button
          className="bg-[#9a0b9a] py-3 px-0 md:px-8 mx-20 text-white w-[200px] md:w-[400px]
        text-[12px] md:text-xl cursor-pointer  rounded-[40px] font-bold hover:scale-105 
         transition-all duration-200 ease-in-out"
          type="submit"
          onClick={()=>setPopupIsOpen(true)}
        >
          CLICK HERE TO DONATE
        </button>
      </div>
      <DonationPopup isOpen={popupIsOpen} onClose={handleCloseDonatePopup} />
    </div>
  );
};

export default Hero;

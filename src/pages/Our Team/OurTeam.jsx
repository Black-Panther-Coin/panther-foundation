import React, { useState } from "react";
import HeaderWithLogo from "../../components/Header/Header2";
import { TeamData } from "../../constants/constants";
import DonationPopup from "../../components/Popups/donationPopup";
import DonateBtn from "../../components/Buttons/DonateBtn";

const OurTeam = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const handleCloseDonatePopup = () => {
    setPopupIsOpen(false);
  };
  const handleOpenDonatePopUp = () => {
    setPopupIsOpen(true);
  };
  return (
    <div className="w-full h-full mt-16   ">
      <HeaderWithLogo />
      <div className="w-full h-full bg-white px-3 md:px-20 z-0">
        <h3
          className="py-3 md:py-7 text-3xl md:text-6xl text-center 
         text-[#331138] font-bold uppercase"
        >
          Meet our team
        </h3>
        <div className="w-full h-full relative px-10 md:px-[2%] z-0">
          {TeamData &&
            TeamData.map((team, index) => (
              <div
                key={index}
                className={
                  index % 2 === 0
                    ? "flex w-full flex-col justify-center md:justify-start items-start my-10 "
                    : "flex w-full h-full flex-col justify-end items-end my-10"
                }
              >
                <div
                  className={`w-full md:w-[70%] my-10 flex flex-col justify-center md:justify-around gap-3 -z-0   ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }  `}
                >
                  <img
                    src={team.imageUrl}
                    className="h-24 w-28 md:w-36 mx-10 md:h-36 z-0"
                    alt="team image"
                  />
                  <div className="mt-2">
                    <p className="text-xl md:text-3xl text-[#331138] font-bold">
                      {team.teamName}
                    </p>
                    <p className="text-xl md:text-2xl  my-2 font-semibold text-[#331138]">
                      {team.content1}
                    </p>
                    <p className="text-xl md:text-2xl my-2 font-semibold text-[#331138]">
                      {team.content2}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <DonationPopup isOpen={popupIsOpen} onClose={handleCloseDonatePopup} />
        <DonateBtn onOpen={handleOpenDonatePopUp} />
      </div>
    </div>
  );
};

export default OurTeam;

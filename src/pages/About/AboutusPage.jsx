import React, { useState } from "react";
import HeaderWithLogo from "../../components/Header/Header2";
import { NewImage } from "../../assets";
import MissionAndvission from "../../components/Shared/AboutUs/MissionAndvission";
import Objective from "../../components/Shared/AboutUs/Objective";
import DonateBtn from "../../components/Buttons/DonateBtn";
import DonationPopup from "../../components/Popups/donationPopup";

const AboutusPage = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const handleCloseDonatePopup = () => {
    setPopupIsOpen(false);
  };
  const handleOpenDonatePopUp = () => {
    setPopupIsOpen(true);
  };
  return (
    <div className="w-full h-full mt-16">
      <HeaderWithLogo />
      <div className="w-full h-full bg-white px-3 md:px-20">
        <h3
          className="py-3 md:py-7 text-3xl md:text-6xl text-center 
         text-[#331138] font-bold uppercase"
        >
          About us
        </h3>
        <div className="w-full flex justify-center md:justify-around md:flex-row flex-col  my-10">
          <div className="w-full md:max-w-[60%]">
            <p
              className="text-xl md:text-2xl text-[#331138]
          font-semibold text-left py-2"
            >
              The Black Panther Non-Profit Foundation (BPNPF) is an extension of
              the Black Panther Project's mission and vision. We are a
              grant-giving organization dedicated to empowering African
              communities globally through targeted initiatives and strategic
              partnerships.
            </p>
            <p
              className="text-xl md:text-xl text-[#331138]
          font-semibold text-left py-2"
            >
              The BPNPF will support the formation of the Overcome Institute,
              dedicated to establishing April 4th, the anniversary of Dr. Martin
              Luther King Jr.'s assassination, as a global day of recognition.
              This day will serve as a powerful reminder of African resilience
              and our boundless potential for overcoming adversity, drawing
              inspiration from Father Dr. Peter Bramble's book, "The Overcome.
            </p>
            <p
              className="text-xl md:text-xl text-[#331138]
          font-semibold text-left py-2"
            >
              The BPNPF will collaborate with and be a grant giving Foundation
              to the African Solutions Collective, a network advocating for
              African ownership and self-determination. We will champion
              initiatives that promote:
            </p>
            <p
              className="text-xl md:text-xl text-[#331138]
          font-semibold text-left py-2"
            >
              Ensuring access to healthy, organic, agro-ecological agriculture
              to cultivate culturally-appropriate food produced and controlled
              by African communities.
            </p>
          </div>
          <div className="w-full h-full">
            <img src={NewImage} className="h-[550px] w-full" alt="image" />
          </div>
        </div>
        <MissionAndvission />
      </div>
      <DonationPopup isOpen={popupIsOpen} onClose={handleCloseDonatePopup} />
      <DonateBtn onOpen={handleOpenDonatePopUp} />
      <Objective />
    </div>
  );
};

export default AboutusPage;

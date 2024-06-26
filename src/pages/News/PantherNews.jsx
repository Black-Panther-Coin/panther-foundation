import React,{useState} from "react";
import HeaderWithLogo from "../../components/Header/Header2";
import { Banner, News1, News2 } from "../../assets";
import DonationPopup from "../../components/Popups/donationPopup";
import DonateBtn from "../../components/Buttons/DonateBtn";

const PantherNews = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const handleCloseDonatePopup = () => {
    setPopupIsOpen(false);
  };
  const handleOpenDonatePopUp = () => {
    setPopupIsOpen(true);
  };
  return (
    <div className="w-full h-full overflow-hidden">
      <HeaderWithLogo />
      <div className="w-full h-full bg-white mt-16  px-3 md:px-24 ">
        <h3
          className="py-3 md:py-7 text-3xl md:text-5xl text-center 
         text-[#331138] font-bold uppercase"
        >
          Latest update
        </h3>
        <div className="w-full  ">
          <img src={Banner} className="w-full" alt="banner image" />
        </div>
        <div className="flex px-3 md:px-20 flex-col items-start md:flex-row my-10">
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl w-full md:text-4xl font-bold text-[#331138]">
              BPNTHR COMPANY DONATED 50M TO CA HOSPITAL TO SUPPORT CANCER and
              SICKLE CELL PATIENTS
            </h3>
            <p className="text-xl text-[#331138] font-semibold">
              Karanja Gaçuça is an activist with Occupy Wall Street. Born in
              Kenya, Gaçuça attended Middlesex University in the UK and then
              moved to the United States. While in the U.S. Gaçuça worked on
              Wall Street and blogged about progressive issues.
            </p>
            <p className="text-xl text-[#331138] font-semibold">
              Karanja Gaçuça is an activist with Occupy Wall Street. Born in
              Kenya, Gaçuça attended Middlesex University in the UK and then
              moved to the United States. While in the U.S. Gaçuça worked on
              Wall Street and blogged about progressive issues.
            </p>
            <p className="text-xl text-[#331138] font-semibold">
              Karanja Gaçuça is an activist with Occupy Wall Street. Born in
              Kenya, Gaçuça attended Middlesex University in the UK and then
              moved to the United States. While in the U.S. Gaçuça worked on
              Wall Street and blogged about progressive issues.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <img src={News1} alt="new " />
            <img src={News2} alt="new " />
          </div>
        </div>
      </div>
      <DonationPopup isOpen={popupIsOpen} onClose={handleCloseDonatePopup} />
      <DonateBtn onOpen={handleOpenDonatePopUp} />
    </div>
  );
};

export default PantherNews;

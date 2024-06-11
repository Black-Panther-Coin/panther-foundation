import React, { useContext } from "react";
import { pantherImage } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { MenuBarContext } from "../../context/MenuBarContext";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const { toggle, isMobileNavOpen } = useContext(MenuBarContext);
  return (
    <div className=" bg-gradient-to-r from-[#ff9900]  to-[#f04928] h-12 px-14 py-1 flex items-center justify-between">
      <img src={pantherImage} alt="panhter image" className="h-10 " />
      <FontAwesomeIcon
        className="text-white text-xl block md:hidden transition-all duration-200"
        icon={isMobileNavOpen ? faTimes : faBars}
        onClick={toggle}
      />
    </div>
  );
};

export default Header;

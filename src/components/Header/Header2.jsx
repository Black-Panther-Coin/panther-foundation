import React,{useContext} from "react";
import NavItem from "./NavItem";
import { BPLOGO } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { MenuBarContext } from "../../context/MenuBarContext";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const HeaderWithLogo = () => {
    const { toggle, isMobileNavOpen } = useContext(MenuBarContext);
  return (
    <div className="w-screen sm:w-full h-16 px-2 flex justify-between 
     items-center bg-[#ff9900] fixed top-0 z-50">
      <div className="h-full w-20 relative">
        <img
          src={BPLOGO}
          className="h-24 absolute left-2 top-3"
          alt="bp-logo"
        />
      </div>
      <div className="px-10 md:px-36">
        <NavItem className={"-right-5 top-14"} style={"text-black  py-2  px-2 rounded duration-300"} />
        <FontAwesomeIcon
        className="text-black text-xl block md:hidden transition-all duration-200"
        icon={isMobileNavOpen ? faTimes : faBars}
        onClick={toggle}
      />
      </div>
    </div>
  );
};

export default HeaderWithLogo;

import React, { useContext } from "react";
import { NavItems } from "../../constants/constants";
import { Link, useNavigate } from "react-router-dom";
import { MenuBarContext } from "../../context/MenuBarContext";
const NavItem = ({ className, style = "" }) => {
  const { isMobileNavOpen, toggle } = useContext(MenuBarContext);
  function getCurentPath(href) {
    return window.location.pathname === href;
  }
  const navigate = useNavigate();
  const navigateFunction = (href) => {
    navigate(href);
    toggle();
    return;
  };
  return (
    <div className="relative">
      <div className="hidden md:block">
        <ul className="flex items-center gap-10 opacity-100  ">
          {NavItems.map((nav) => (
            <li key={nav.id} className="opacity-100">
              <Link
                to={nav.slug}
                className={`${style}  font-semibold cursor-pointer
                   transition-all opacity-100 
                 md:text-xl ${
                   getCurentPath(nav.slug)
                     ? "bg-white text-black"
                     : "text-white"
                 }`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={
          isMobileNavOpen
            ? `bg-[rgb(145,65,148)] absolute ${className} w-[200px] rounded-md py-2 transition-all duration-150 block `
            : " transition-all duration-150 hidden"
        }
      >
        <ul className="flex flex-col items-center gap-10 opacity-100  ">
          {NavItems.map((nav) => (
            <li key={nav.id} className="opacity-100">
              <p
                onClick={()=>navigateFunction(nav.slug)}
                className={`${style} font-semibold cursor-pointer text-white ${getCurentPath(
                  nav.slug
                )}? "bg-white":"" transition-all opacity-100 md:text-xl `}
              >
                {nav.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavItem;

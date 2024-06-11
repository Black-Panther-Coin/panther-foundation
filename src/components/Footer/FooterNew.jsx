import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterNew = () => {
  return (
    <div className="bg-black py-10 px-20  w-full  text-white flex flex-col md:flex-row justify-around items-center">
      <div className="flex gap-10 ">
        <p className="text-white font-bold text-xl cursor-pointer ">
          <FontAwesomeIcon icon={faInstagram} />
        </p>
        <p
          to={"www.facebook.com"}
          className="text-white font-bold text-xl sm:text-2xl cursor-pointer "
        >
          <FontAwesomeIcon icon={faFacebook} />
        </p>
        <p className="text-white font-bold text-xl sm:text-2xl cursor-pointer ">
          <FontAwesomeIcon icon={faTwitter} />
        </p>
        <p className="text-white font-bold text-xl sm:text-2xl cursor-pointer ">
          <FontAwesomeIcon icon={faPinterest} />
        </p>
        <p className="text-white font-bold text-xl sm:text-2xl cursor-pointer ">
          <FontAwesomeIcon icon={faYoutube} />
        </p>
        <p>
          <FontAwesomeIcon icon={faLinkedin} />
        </p>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="your@gmail.com"
          className="bg-white text-black  px-2 placeholder:text-slate-800 py-3"
        />
        <button
          type="submit"
          className="bg-[#ff9900] text-white md:my-0 my-10  py-3 px-5"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FooterNew;

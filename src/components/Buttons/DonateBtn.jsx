import { faDonate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DonateBtn = ({onOpen}) => {
  return (
    <button
      className="fixed bottom-10 right-10 bg-[rgb(51,17,56)] text-white 
    font-bold py-3 px-4 text-4xl rounded-full cursor-pointer
      hover:animate-bounce "
    onClick={onOpen}
    >
      <FontAwesomeIcon 
      icon={faDonate}
       />
    </button>
  );
};

export default DonateBtn;

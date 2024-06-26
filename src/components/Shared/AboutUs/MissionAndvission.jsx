import React from "react";
import { target } from "../../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHeartbeat,
  faGlobe,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";
const MissionAndvission = () => {
  return (
    <div className="">
      {/* <div className="container mx-auto">
        <h1 className="text-4xl  text-yellow-500 font-bold text-center mb-8">
          Our Mission and Vision
        </h1>
        <div className="flex flex-col sm:flex-row justify-between my-10 items-start gap-20">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-yellow-500">
              <FontAwesomeIcon icon={faHandsHelping} className="mr-2" /> Mission
            </h2>
            <p className="mb-4 text-xl">
              The Black Panther Project empowers Black communities globally by
              leveraging blockchain technology and media to:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li className="text-xl">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="mr-2 text-yellow-500"
                />
                <strong className="text-yellow-200">
                  Expand financial literacy:
                </strong>{" "}
                We bridge the digital divide by providing accessible education
                on cryptocurrency and its potential for economic empowerment.
              </li>
              <li className="text-[19px]">
                <FontAwesomeIcon
                  icon={faHeartbeat}
                  className="mr-2 text-yellow-500"
                />
                <strong className="text-yellow-200">
                  Combat health disparities:
                </strong>{" "}
                We address the disproportionate impact of illnesses like sickle
                cell disease on Black communities by:
                <ul className="list-disc list-inside ml-6 space-y-2 my-3">
                  <li>Funding research for improved treatment options.</li>
                  <li>
                    Supporting research into alternative therapies, with a focus
                    on food as medicine.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4 text-yellow-500">
              <FontAwesomeIcon icon={faGlobe} className="mr-2 " /> Vision
            </h2>
            <p className="mb-4 text-xl">We envision a future where:</p>
            <ul className="list-disc list-inside space-y-4">
              <li className="text-[19px]">
                Communities currently under-represented in the crypto space
                particularly across Africa, the Caribbean, and Latin America are
                equipped with the knowledge and tools to navigate the crypto
                landscape and build financial security.
              </li>
              <li className="text-[19px]">
                Health outcomes for Black communities improve through increased
                access to quality healthcare, advancements in treatment for
                sickle cell disease, and the exploration of holistic approaches
                to wellness.
              </li>
            </ul>
            <p className="mt-4 text-xl">
              By harnessing the power of blockchain technology and media, we
              create a global movement for personal empowerment, better health
              outcomes, and a brighter future.
            </p>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col justify-center md:flex-row gap-10 py-10 md:justify-around my-10 ">
        <div className=" flex flex-col gap-10">
          <h5
            className="bg-[#ff9900] text-[#331138]
               uppercase text-center text-xl font-bold py-3 rounded-3xl w-36 "
          >
            Vision
          </h5>
          <p
            className="text-xl md:text-2xl text-[#ff9900]
          font-semibold text-left py-10 bg-[#331138] px-10 rounded-xl"
          >
            Africans across the globe are equipped with the knowledge and tools
            to navigate the crypto space and build financial security for
            themselves and their communities.
          </p>
        </div>
        <div className=" flex flex-col gap-10">
          <h5
            className="bg-[#ff9900] text-[#331138]
               uppercase text-center text-xl font-bold py-3 rounded-3xl w-36 "
          >
            Mission
          </h5>
          <p
            className="text-xl md:text-2xl text-[#ff9900]
          font-semibold text-left py-10 bg-[#331138] px-10 rounded-xl"
          >
            Expand Financial Literacy: Bridge the digital divide by providing
            accessible education on cryptocurrency and its potential for
            economic empowerment across Africa, the Caribbean, and Latin
            America.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionAndvission;

import {
  FaAngleRight,
  FaCheck,
  FaCircleCheck,
  FaScaleBalanced,
} from "react-icons/fa6";
import slotImg from "../assets/slot.png";
import { MdOutlineShield } from "react-icons/md";

export default function Banner() {
  return (
    <div className="relative bg-white rounded-4xl p-6 w-full text-sm shadow-xl flex flex-col justify-between h-full">
      {/* Overlaid Free Case Review Box */}
      <div className="absolute top-4 left-4 border-r-2 border-gray-300 bottom-4 right-1/2 rounded-3xl py-6 ps-2 md:p-6 shadow-md z-10 bg-[#bc68cf13] backdrop-blur-lg flex flex-col justify-between">
        <h2 className="text-2xl md:text-4xl font-semibold text-black leading-tight">
          Free <br />
          <span className="text-gray-600">
            Case <br /> Review
          </span>
        </h2>

        <ul className="space-y-2 mt-3 text-gray-800 text-sm md:text-md font-semibold mb-5">
          <li className="flex items-center gap-2 mb-4">
            <span className="w-6 h-6 flex items-center justify-center rounded-full text-sm bg-[#E3E6EE] ">
              <MdOutlineShield />
            </span>
            100% Confidential
          </li>
          <li className="flex items-center gap-2 mb-4">
            <span className="w-6 h-6 flex items-center justify-center rounded-full text-sm bg-[#DED4DD] ">
              <FaCheck />
            </span>
            No Win, No Fee
          </li>
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center rounded-full text-sm bg-[#F3E1C5] ">
              <FaScaleBalanced />
            </span>
            Free Case Evaluation
          </li>
        </ul>
      </div>

      <div className="text-right font-semibold text-xl text-gray-600">
        We are here <br />
        to help!
      </div>

      <div className="flex items-center justify-center my-7">
        <span
          className="rounded-full p-2"
          style={{
            background:
              "linear-gradient(180deg, #4B2C5E 0%, #492E60 50%, #2E4A7D 100%)",
          }}
        >
          <img
            src={slotImg}
            alt="6 slots left"
            className="w-60 h-60 object-contain"
          />
        </span>
      </div>

      {/* CTA Button */}
      <div className="flex justify-end mt-5">
        <span
          className=" flex items-center gap-2 text-white rounded-3xl px-2 md:px-4 md:py-3 text-md  md:text-lg  "
          style={{ background: "#C49A6C" }}
        >
          Contact us
        </span>
        <FaAngleRight className="text-white bg-[#C49A6C] rounded-full text-2xl p-1 md:text-5xl md:p-3 " />
      </div>
    </div>
  );
}

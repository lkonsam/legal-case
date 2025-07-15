import { FaAngleRight, FaCircleCheck } from "react-icons/fa6";
import slotImg from "../assets/slot.png";

export default function Banner() {
  return (
    <div className="relative bg-white rounded-2xl p-6 w-full text-sm shadow-xl flex flex-col justify-between h-full">
      {/* Overlaid Free Case Review Box */}
      <div className="absolute top-4 left-4 bottom-4 right-1/2 rounded-xl p-4 shadow-md z-10 bg-[#bc68cf13] backdrop-blur-sm flex flex-col justify-between">
        <h2 className="text-xl font-bold text-black leading-tight">
          Free <br />
          <span className="text-gray-600">
            Case <br /> Review
          </span>
        </h2>

        <ul className="space-y-2 mt-3 text-gray-800 text-sm">
          <li className="flex items-center gap-2">
            <FaCircleCheck className="text-[#2E4A7D]" />
            100% Confidential
          </li>
          <li className="flex items-center gap-2">
            <FaCircleCheck className="text-[#2E4A7D]" />
            No Win, No Fee
          </li>
          <li className="flex items-center gap-2">
            <FaCircleCheck className="text-[#2E4A7D]" />
            Free Case Evaluation
          </li>
        </ul>
      </div>

      <div className="text-right font-semibold text-black/70">
        We are here <br />
        to help!
      </div>

      <div className="flex items-center justify-center my-7">
        <span className="rounded-full p-2 bg-[#2E4A7D]">
          <img
            src={slotImg}
            alt="6 slots left"
            className="w-40 h-40 object-contain"
          />
        </span>
      </div>

      {/* CTA Button */}
      <div className="flex justify-end mt-6">
        <span
          className="font-semibold flex items-center gap-2 text-white rounded-2xl py-2 px-4"
          style={{ background: "#C49A6C" }}
        >
          Contact Us
        </span>
        <FaAngleRight className="text-white bg-[#C49A6C] rounded-full text-4xl p-2" />
      </div>
    </div>
  );
}

import React from "react";

const CTAButton = () => {
  return (
    <button
      className="fixed bottom-6 left-6 bg-purple-700 hover:bg-purple-800 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-xs sm:text-sm md:text-base transition"
      aria-label="Contact us"
      onClick={() => alert("Contact us action")}
    >
      Contact
      <br />
      us
    </button>
  );
};

export default CTAButton;

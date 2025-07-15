import { useState } from "react";
import { MdOutlineCalendarToday } from "react-icons/md";

export default function Input({
  name,
  label,
  value,
  onChange,
  type = "text",
  error,
}) {
  const [isFocused, setIsFocused] = useState(false);

  // Dynamically switch input type to show placeholder for date
  const inputType = type === "date" && !value && !isFocused ? "text" : type;

  const isDateType = type === "date";

  return (
    <div className="relative">
      <input
        name={name}
        type={inputType}
        placeholder={label}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full border-0 border-b-2 placeholder:text-gray-300 border-gray-300 py-2 pr-10 mb-2 bg-transparent focus:outline-none focus:border-white text-white`}
      />

      {isDateType && (
        <MdOutlineCalendarToday className="absolute right-2 top-2 text-gray-400 pointer-events-none text-lg" />
      )}

      {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
    </div>
  );
}

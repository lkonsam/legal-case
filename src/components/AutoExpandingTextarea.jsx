import { useRef, useEffect } from "react";

export default function AutoExpandingTextarea({
  name,
  value,
  onChange,
  placeholder,
}) {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scrollHeight
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full resize-none overflow-hidden border-0 border-b-2 border-gray-300 px-3 py-2 focus:outline-none focus:border-b-4 focus:border-white"
      rows={1}
    />
  );
}

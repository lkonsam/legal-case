export default function Checkbox({ name, checked, onChange, label, error }) {
  return (
    <div className="mt-4 text-sm text-white">
      <label className="flex items-start gap-3 relative cursor-pointer">
        {/* Checkbox container */}
        <span className="relative inline-block w-4 h-4">
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
            className="appearance-none w-4 h-4 border-2 border-white rounded-sm bg-transparent cursor-pointer"
          />
          {/* Large colorful checkmark */}
          {checked && (
            <FaCheck className="absolute text-green-400 text-2xl -top-1  z-10 pointer-events-none drop-shadow-lg" />
          )}
        </span>

        {/* Label */}
        <span className="leading-snug">{label}</span>
      </label>

      {error && <div className="text-red-500 text-xs">{error}</div>}
    </div>
  );
}

function DestinationSearch({
  value,
  onChange,
}) {

  return (

    <div className="relative flex-1">

      <svg
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          w-5
          h-5
          text-slate-400
        "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
        />
      </svg>

      <input
        type="text"
        placeholder="Search destinations..."
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        className="
          w-full
          bg-white
          border
          border-slate-200
          rounded-2xl
          pl-12
          pr-4
          py-3
          focus:outline-none
          focus:ring-2
          focus:ring-emerald-500
          focus:border-transparent
        "
      />

    </div>

  );
}

export default DestinationSearch;
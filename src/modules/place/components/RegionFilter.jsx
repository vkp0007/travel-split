function RegionFilter({
  regions,
  value,
  onChange,
}) {

  return (

    <select
      value={value}
      onChange={(e) =>
        onChange(
          e.target.value
        )
      }
      className="
        bg-white
        border
        border-slate-200
        rounded-2xl
        px-5
        py-3
        text-slate-700
        focus:outline-none
        focus:ring-2
        focus:ring-emerald-500
        focus:border-transparent
      "
    >

      <option value="">
        🌍 All Regions
      </option>

      {regions.map(
        (region) => (

          <option
            key={region}
            value={region}
          >
            {region}
          </option>

        )
      )}

    </select>

  );
}

export default RegionFilter;
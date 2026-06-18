function TripDateSection({
  formData,
  handleChange,
}) {

  return (

    <div
      className="
        bg-slate-50
        rounded-2xl
        p-6
      "
    >

      <h3
        className="
          font-semibold
          text-lg
          mb-5
        "
      >
        Travel Dates
      </h3>

      <div
        className="
          grid
          md:grid-cols-2
          gap-6
        "
      >

        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="
            bg-white
            border
            border-slate-300
            rounded-xl
            px-4
            py-3
          "
        />

        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="
            bg-white
            border
            border-slate-300
            rounded-xl
            px-4
            py-3
          "
        />

      </div>

    </div>

  );
}

export default TripDateSection;
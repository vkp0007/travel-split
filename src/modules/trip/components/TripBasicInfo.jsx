function TripBasicInfo({
  formData,
  handleChange,
  places,
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
        Basic Information
      </h3>

      <div
        className="
          grid
          md:grid-cols-2
          gap-6
        "
      >

        <div>

          <label className="block mb-2 text-sm font-medium">
            Trip Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Goa Vacation"
            className="
              w-full
              bg-white
              border
              border-slate-300
              rounded-xl
              px-4
              py-3
            "
          />

        </div>

        <div>

          <label className="block mb-2 text-sm font-medium">
            Destination
          </label>

          <input
            list="destinations"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Search destination"
            className="
              w-full
              bg-white
              border
              border-slate-300
              rounded-xl
              px-4
              py-3
            "
          />

          <datalist id="destinations">

            {places.map((place) => (

              <option
                key={place.name}
                value={place.name}
              />

            ))}

          </datalist>

        </div>

      </div>

      <div className="mt-6">

        <label className="block mb-2 text-sm font-medium">
          Description
        </label>

        <textarea
          rows={4}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your trip..."
          className="
            w-full
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

export default TripBasicInfo;
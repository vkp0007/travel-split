function PlaceInsightsCard({
  place,
}) {

  return (

    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-linear-to-r
        from-emerald-600
        to-emerald-700
        text-white
        p-8
      "
    >

      <div
        className="
          absolute
          top-0
          right-0
          w-72
          h-72
          bg-white/10
          rounded-full
          blur-3xl
        "
      />

      <div className="relative">

        <span
          className="
            inline-flex
            bg-white/20
            px-4
            py-2
            rounded-full
            text-sm
            font-medium
            mb-5
          "
        >
          Destination Guide
        </span>

        <h1
          className="
            text-5xl
            font-bold
          "
        >
          {place.name}
        </h1>

        <p
          className="
            text-emerald-50
            mt-3
            text-lg
          "
        >
          📍 {place.state}
          {" • "}
          {place.region}
        </p>

      </div>

    </div>

  );
}

export default PlaceInsightsCard;
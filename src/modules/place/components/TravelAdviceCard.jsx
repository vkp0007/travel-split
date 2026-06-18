function TravelAdviceCard({
  place,
}) {

  const tips = [
    "Book hotels in advance",
    "Explore local cuisine",
    "Plan transport before arrival",
    "Visit major attractions early",
  ];

  return (

    <div
      className="
        h-full
        bg-white
        rounded-3xl
        border
        border-slate-200
        p-8
      "
    >

      <div className="mb-6">

        <span
          className="
            inline-flex
            bg-blue-100
            text-blue-700
            px-3
            py-1
            rounded-full
            text-sm
            font-medium
            mb-3
          "
        >
          Travel Guide
        </span>

        <h2
          className="
            text-3xl
            font-bold
            text-slate-900
          "
        >
          Travel Tips
        </h2>

        <p
          className="
            text-slate-500
            mt-2
          "
        >
          Helpful advice for visiting
          {place?.name
            ? ` ${place.name}`
            : " this destination"}.
        </p>

      </div>

      <div className="space-y-4">

        {tips.map((tip) => (

          <div
            key={tip}
            className="
              flex
              items-start
              gap-4
              p-4
              rounded-2xl
              bg-slate-50
            "
          >

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-emerald-100
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              ✓
            </div>

            <p
              className="
                text-slate-700
                font-medium
              "
            >
              {tip}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default TravelAdviceCard;
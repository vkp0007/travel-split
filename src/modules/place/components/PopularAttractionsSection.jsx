function PopularAttractionsSection({
  attractions,
}) {

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
            bg-emerald-100
            text-emerald-700
            px-3
            py-1
            rounded-full
            text-sm
            font-medium
            mb-3
          "
        >
          Must Visit
        </span>

        <h2
          className="
            text-3xl
            font-bold
            text-slate-900
          "
        >
          Popular Attractions
        </h2>

        <p
          className="
            text-slate-500
            mt-2
          "
        >
          Top places travelers love to explore.
        </p>

      </div>

      <div
        className="
          grid
          md:grid-cols-2
          gap-4
        "
      >

        {attractions.map(
          (attraction) => (

            <div
              key={attraction}
              className="
                flex
                items-center
                gap-4
                p-5
                rounded-2xl
                border
                border-slate-200
                hover:border-emerald-200
                hover:bg-emerald-50
                transition
              "
            >

              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-emerald-100
                  flex
                  items-center
                  justify-center
                  text-xl
                "
              >
                📍
              </div>

              <span
                className="
                  font-medium
                  text-slate-800
                "
              >
                {attraction}
              </span>

            </div>

          )
        )}

      </div>

    </div>

  );
}

export default PopularAttractionsSection;
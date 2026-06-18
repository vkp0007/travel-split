import { features }
from "../data/features";

function FeaturesSection() {

  return (

    <section
      className="
        bg-slate-50
        py-24
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
          px-6
        "
      >

        <div
          className="
            text-center
            mb-14
          "
        >

          <h2
            className="
              text-4xl
              font-bold
              text-slate-900
            "
          >
            Everything You Need
          </h2>

          <p
            className="
              mt-4
              text-slate-500
              max-w-2xl
              mx-auto
            "
          >
            TravelSplit provides all the tools
            required to plan trips, manage
            expenses and settle balances
            effortlessly.
          </p>

        </div>

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >

          {features.map(
            (feature) => {

              const Icon =
                feature.icon;

              return (

                <div
                  key={feature.title}
                  className="
                    bg-white
                    border
                    border-slate-200
                    rounded-3xl
                    p-8
                    hover:-translate-y-1
                    hover:shadow-xl
                    transition-all
                  "
                >

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-emerald-50
                      flex
                      items-center
                      justify-center
                      mb-5
                    "
                  >

                    <Icon
                      size={28}
                      className="
                        text-emerald-600
                      "
                    />

                  </div>

                  <h3
                    className="
                      text-lg
                      font-semibold
                      text-slate-900
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-slate-500
                      leading-relaxed
                    "
                  >
                    {feature.description}
                  </p>

                </div>

              );
            }
          )}

        </div>

      </div>

    </section>

  );
}

export default FeaturesSection;
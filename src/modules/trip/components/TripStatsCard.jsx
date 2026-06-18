import { Link } from "react-router";

function TripStatsCard({
  trip,
}) {

  const stats = [
    {
      label: "Participants",
      value:
        trip?.participants
          ?.length || 0,
      icon: "👥",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Budget",
      value: `${trip?.totalBudget} ${trip?.baseCurrency}`,
      icon: "💰",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      label: "Status",
      value: trip?.status,
      icon:
        trip?.status ===
        "completed"
          ? "✅"
          : "🚀",
      color:
        trip?.status ===
        "completed"
          ? "text-emerald-600"
          : "text-amber-600",
      bg:
        trip?.status ===
        "completed"
          ? "bg-emerald-50"
          : "bg-amber-50",
    },
  ];

  return (

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-8
        shadow-sm
      "
    >

      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          mb-8
        "
      >

        <div>

          <h2
            className="
              text-2xl
              font-bold
              text-slate-900
            "
          >
            Trip Summary
          </h2>

          <p
            className="
              text-slate-500
              mt-1
            "
          >
            Quick overview of your trip
          </p>

        </div>

        <div
          className="
            px-4
            py-2
            rounded-full
            bg-slate-100
            text-slate-700
            text-sm
            font-medium
            capitalize
          "
        >
          {trip?.status}
        </div>

      </div>

      {/* Stats */}

      <div
        className="
          grid
          md:grid-cols-3
          gap-5
          mb-8
        "
      >

        {stats.map(
          (stat) => (

            <div
              key={stat.label}
              className="
                bg-slate-50
                rounded-2xl
                p-5
              "
            >

              <div
                className={`
                  w-12
                  h-12
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  text-xl
                  mb-4
                  ${stat.bg}
                `}
              >
                {stat.icon}
              </div>

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                {stat.label}
              </p>

              <h3
                className={`
                  text-2xl
                  font-bold
                  mt-2
                  capitalize
                  ${stat.color}
                `}
              >
                {stat.value}
              </h3>

            </div>

          )
        )}

      </div>

      {/* Actions */}

      <div
        className="
          flex
          flex-wrap
          gap-4
        "
      >

        <Link
          to={`/trips/${trip._id}/expenses`}
          className="
            flex-1
            min-w-45
            text-center
            bg-emerald-600
            hover:bg-emerald-700
            text-white
            py-3
            rounded-2xl
            font-medium
            transition
          "
        >
          View Expenses
        </Link>

        <Link
          to={`/trips/${trip._id}/expenses/add`}
          className="
            flex-1
            min-w-45
            text-center
            border
            border-slate-300
            hover:bg-slate-50
            text-slate-700
            py-3
            rounded-2xl
            font-medium
            transition
          "
        >
          Add Expense
        </Link>

      </div>

    </div>

  );
}

export default TripStatsCard;
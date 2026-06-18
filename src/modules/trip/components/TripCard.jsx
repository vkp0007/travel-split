import { Link } from "react-router";

function TripCard({
  trip,
}) {

  const isCompleted =
    trip.status === "completed";

  return (

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-6
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >

      {/* Header */}

      <div
        className="
          flex
          justify-between
          items-start
          mb-6
        "
      >

        <div>

          <h3
            className="
              text-2xl
              font-bold
              text-slate-900
            "
          >
            {trip.title}
          </h3>

          <p
            className="
              text-slate-500
              mt-1
            "
          >
            📍 {trip.destination}
          </p>

        </div>

        <span
          className={`
            px-4
            py-2
            rounded-full
            text-xs
            font-semibold
            capitalize

            ${
              isCompleted
                ? `
                  bg-emerald-100
                  text-emerald-700
                `
                : `
                  bg-blue-100
                  text-blue-700
                `
            }
          `}
        >
          {trip.status}
        </span>

      </div>

      {/* Stats */}

      <div
        className="
          grid
          grid-cols-2
          gap-4
          mb-6
        "
      >

        <div
          className="
            bg-slate-50
            rounded-2xl
            p-4
          "
        >

          <p
            className="
              text-xs
              text-slate-500
              uppercase
              tracking-wide
            "
          >
            Budget
          </p>

          <h4
            className="
              mt-1
              text-lg
              font-bold
              text-emerald-600
            "
          >
            {trip.totalBudget}
            {" "}
            {trip.baseCurrency}
          </h4>

        </div>

        <div
          className="
            bg-slate-50
            rounded-2xl
            p-4
          "
        >

          <p
            className="
              text-xs
              text-slate-500
              uppercase
              tracking-wide
            "
          >
            Members
          </p>

          <h4
            className="
              mt-1
              text-lg
              font-bold
              text-slate-900
            "
          >
            {trip.participants?.length || 0}
          </h4>

        </div>

      </div>

      {/* Timeline */}

      <div
        className="
          bg-slate-50
          rounded-2xl
          p-4
          mb-6
        "
      >

        <div
          className="
            flex
            justify-between
            text-sm
          "
        >

          <div>

            <p className="text-slate-500">
              Start
            </p>

            <p className="font-medium">
              {new Date(
                trip.startDate
              ).toLocaleDateString()}
            </p>

          </div>

          <div className="text-right">

            <p className="text-slate-500">
              End
            </p>

            <p className="font-medium">
              {new Date(
                trip.endDate
              ).toLocaleDateString()}
            </p>

          </div>

        </div>

      </div>

      {/* Actions */}

      <div
        className="
          flex
          gap-3
        "
      >

        <Link
          to={`/trips/${trip._id}`}
          className="
            flex-1
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
          View Trip
        </Link>

        <Link
          to={`/trips/${trip._id}/expenses`}
          className="
            flex-1
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
          Expenses
        </Link>

      </div>

    </div>

  );
}

export default TripCard;
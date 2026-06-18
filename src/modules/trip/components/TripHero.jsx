import { Link } from "react-router";

import CompleteTripButton
  from "./CompleteTripButton";

function TripHero({
  trip,
  isSettled,
  onTripCompleted,
}) {

  const duration =
    trip?.startDate &&
    trip?.endDate
      ? Math.ceil(
          (
            new Date(
              trip.endDate
            ) -
            new Date(
              trip.startDate
            )
          ) /
          (
            1000 *
            60 *
            60 *
            24
          )
        )
      : 0;

  return (

    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-linear-to-r
        from-emerald-600
        via-emerald-700
        to-teal-700
        p-8
        lg:p-10
        text-white
      "
    >

      {/* Background Effects */}

      <div
        className="
          absolute
          -top-10
          -right-10
          w-72
          h-72
          bg-white/10
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-56
          h-56
          bg-white/5
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          relative
          flex
          flex-col
          xl:flex-row
          xl:justify-between
          gap-8
        "
      >

        <div className="flex-1">

          {/* Badges */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-3
              mb-5
            "
          >

            <span
              className="
                bg-white/15
                backdrop-blur-sm
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
              "
            >
              ✈️ TravelSplit Trip
            </span>

            <span
              className={`
                px-4
                py-2
                rounded-full
                text-sm
                font-semibold
                capitalize

                ${
                  trip?.status ===
                  "completed"
                    ? `
                      bg-emerald-100
                      text-emerald-700
                    `
                    : `
                      bg-amber-300
                      text-amber-900
                    `
                }
              `}
            >
              {trip?.status}
            </span>

          </div>

          {/* Title */}

          <h1
            className="
              text-4xl
              lg:text-5xl
              font-bold
              leading-tight
            "
          >
            {trip?.title}
          </h1>

          <p
            className="
              mt-4
              text-emerald-50
              text-lg
              max-w-3xl
            "
          >
            {trip?.description ||
              "Plan expenses, manage participants and settle balances effortlessly."}
          </p>

          {/* Stats */}

          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-5
              gap-4
              mt-8
            "
          >



            <div
              className="
                bg-white/10
                backdrop-blur-sm
                rounded-2xl
                p-4
              "
            >
              <p className="text-xs text-emerald-100">
                💰 Budget
              </p>

              <h3 className="font-semibold mt-1">
                {trip?.totalBudget}
                {" "}
                {trip?.baseCurrency}
              </h3>
            </div>

            <div
              className="
                bg-white/10
                backdrop-blur-sm
                rounded-2xl
                p-4
              "
            >
              <p className="text-xs text-emerald-100">
                👥 Participants
              </p>

              <h3 className="font-semibold mt-1">
                {trip?.participants?.length || 0}
              </h3>
            </div>

            <div
              className="
                bg-white/10
                backdrop-blur-sm
                rounded-2xl
                p-4
              "
            >
              <p className="text-xs text-emerald-100">
                📅 Start Date
              </p>

              <h3 className="font-semibold mt-1">
                {new Date(
                  trip?.startDate
                ).toLocaleDateString(
                  "en-GB",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }
                )}
              </h3>
            </div>

            <div
              className="
                bg-white/10
                backdrop-blur-sm
                rounded-2xl
                p-4
              "
            >
              <p className="text-xs text-emerald-100">
                🏁 End Date
              </p>

              <h3 className="font-semibold mt-1">
                {new Date(
                  trip?.endDate
                ).toLocaleDateString(
                  "en-GB",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }
                )}
              </h3>
            </div>

                     {/* Duration */}

          <div
            className="
              bg-white/10
                backdrop-blur-sm
                rounded-2xl
                p-4
            "
          >


             <p className="text-xs text-emerald-100">
                ⏳ Duration
              </p>

              <h3 className="font-semibold mt-1">
               {duration} Days
              </h3>
            

           

          </div>

          </div>

 

          {/* Actions */}

          <div
            className="
              flex
              flex-wrap
              gap-3
              mt-8
            "
          >

            <Link
              to={`/trips/${trip._id}/expenses`}
              className="
                bg-white
                text-emerald-700
                px-5
                py-3
                rounded-2xl
                font-semibold
                hover:bg-slate-100
                transition
              "
            >
              View Expenses
            </Link>

            <Link
              to={`/trips/${trip._id}/expenses/add`}
              className="
                bg-white/15
                backdrop-blur-sm
                hover:bg-white/20
                px-5
                py-3
                rounded-2xl
                font-medium
                transition
              "
            >
              Add Expense
            </Link>

            <Link
              to={`/trips/${trip._id}/budget`}
              className="
                bg-black/20
                hover:bg-black/30
                px-5
                py-3
                rounded-2xl
                font-medium
                transition
              "
            >
              Budget
            </Link>

            {trip?.status !==
              "completed" && (

              <CompleteTripButton
                tripId={trip._id}
                disabled={!isSettled}
                onComplete={
                  onTripCompleted
                }
              />

            )}

          </div>

          {!isSettled &&
            trip?.status !==
              "completed" && (

            <div
              className="
                mt-6
                bg-amber-100
                text-amber-800
                rounded-2xl
                px-5
                py-4
                font-medium
              "
            >
              ⚠️ Settle all balances
              before completing this trip.
            </div>

          )}

        </div>

      </div>

    </div>

  );
}

export default TripHero;
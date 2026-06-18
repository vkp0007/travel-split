import TripCard from "./TripCard";

function TripList({
  trips,
}) {

  if (
    !trips ||
    trips.length === 0
  ) {

    return (

      <div
        className="
          bg-white
          border
          border-slate-200
          rounded-3xl
          p-16
          text-center
        "
      >

        <div
          className="
            text-6xl
            mb-5
          "
        >
          ✈️
        </div>

        <h2
          className="
            text-2xl
            font-bold
            text-slate-900
          "
        >
          No Trips Found
        </h2>

        <p
          className="
            text-slate-500
            mt-3
            max-w-md
            mx-auto
          "
        >
          Start planning your next adventure.
          Create a trip, invite friends,
          track expenses and settle balances
          effortlessly.
        </p>

      </div>

    );
  }

  return (

    <div
      className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      "
    >

      {trips.map(
        (trip) => (

          <TripCard
            key={trip._id}
            trip={trip}
          />

        )
      )}

    </div>

  );
}

export default TripList;
import PlaceCard
from "./PlaceCard";

function PlaceList({
  places,
}) {

  if (
    places.length === 0
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

        <div className="text-6xl mb-4">
          🌍
        </div>

        <h2
          className="
            text-2xl
            font-bold
            text-slate-900
          "
        >
          No Destinations Found
        </h2>

        <p
          className="
            text-slate-500
            mt-3
          "
        >
          Try searching with another destination.
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

      {places.map(
        (place) => (

          <PlaceCard
            key={place.name}
            place={place}
          />

        )
      )}

    </div>

  );
}

export default PlaceList;
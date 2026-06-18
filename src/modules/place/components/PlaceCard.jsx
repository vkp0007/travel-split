import { Link }
from "react-router";

function PlaceCard({
  place,
}) {

  return (

    <div
      className="
        group
        bg-white
        rounded-3xl
        border
        border-slate-200
        p-6
        hover:border-emerald-200
        hover:shadow-xl
        transition-all
      "
    >

      <div
        className="
          w-14
          h-14
          rounded-2xl
          bg-emerald-100
          flex
          items-center
          justify-center
          text-2xl
          mb-5
        "
      >
        🌍
      </div>

      <h3
        className="
          text-xl
          font-bold
          text-slate-900
        "
      >
        {place.name}
      </h3>

      <p
        className="
          text-slate-500
          mt-2
        "
      >
        📍 {place.state}
      </p>

      <div className="mt-4">

        <span
          className="
            inline-flex
            bg-emerald-50
            text-emerald-700
            px-3
            py-1
            rounded-full
            text-xs
            font-medium
          "
        >
          {place.region}
        </span>

      </div>

      <Link
        to={`/places/${place.name}`}
        className="
          mt-6
          inline-flex
          items-center
          gap-2
          text-emerald-600
          font-medium
          hover:text-emerald-700
        "
      >
        Explore Destination →
      </Link>

    </div>

  );
}

export default PlaceCard;
import {
  useEffect,
  useState,
} from "react";

import { Link }
from "react-router";

import {
  ArrowRight,
} from "lucide-react";

import {
  useAuth,
} from "../../auth/context/AuthContext";

import {
  getRecentTrips,
} from "../services/dashboardApi";

function RecentTrips() {

  const { user } =
    useAuth();

  const [trips, setTrips] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    if (user?._id) {

      fetchTrips();
    }

  }, [user]);

  const fetchTrips =
    async () => {

      try {

        const tripList =
          await getRecentTrips(
            user._id
          );

        setTrips(
          tripList.slice(0, 2)
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    };
    const getTripStatus = (
  trip
) => {

  const today =
    new Date();

  const start =
    new Date(
      trip.startDate
    );

  const end =
    new Date(
      trip.endDate
    );

  if (today < start) {

    const daysLeft =
      Math.ceil(
        (start - today) /
        (1000 * 60 * 60 * 24)
      );

    return {
      label:
        `Starts in ${daysLeft} Days`,
      bg:
        "bg-emerald-50",
      text:
        "text-emerald-700",
    };
  }

  if (
    today >= start &&
    today <= end
  ) {

    return {
      label:
        "Ongoing",
      bg:
        "bg-amber-50",
      text:
        "text-amber-700",
    };
  }

  return {
    label:
      "Completed",
    bg:
      "bg-slate-100",
    text:
      "text-slate-600",
  };
};

const getDuration =
  (trip) => {

    return (
      Math.ceil(
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
      ) + 1
    );
  };

  return (

<div
  className="
    h-full
    bg-white
    rounded-3xl
    border
    border-slate-200
    p-6
    flex
    flex-col
  "
>

      {/* Header */}

      <div
        className="
       
          flex
          justify-between
          items-center
          mb-6
        "
      >

        <div>

          <h2
            className="
              text-xl
              font-bold
              text-slate-900
            "
          >
            Recent Trips
          </h2>

          <p
            className="
              text-sm
              text-slate-500
              mt-1
            "
          >
            Your latest travel plans
          </p>

        </div>

        <Link
          to="/trips"
          className="
            flex
            items-center
            gap-2
            text-emerald-600
            font-medium
            hover:text-emerald-700
          "
        >
          View All
          <ArrowRight size={16} />
        </Link>

      </div>

      {loading ? (

        <div
          className="
            text-center
            py-10
            text-slate-500
          "
        >
          Loading trips...
        </div>

      ) : trips.length === 0 ? (

        <div
          className="
          
            text-center
            py-12
            bg-slate-50
            rounded-2xl
          "
        >

          <div className="text-5xl mb-4">
            ✈️
          </div>

          <h3
            className="
              font-semibold
              text-lg
              mb-2
            "
          >
            No Trips Yet
          </h3>

          <p
            className="
              text-slate-500
              mb-6
            "
          >
            Start planning your first trip.
          </p>

          <Link
            to="/trips/create"
            className="
              inline-flex
              items-center
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              px-5
              py-3
              rounded-xl
            "
          >
            Create Trip
          </Link>

        </div>

      ) : (

        <div className="space-y-4">

          {trips.map((trip) => {

  const status =
    getTripStatus(trip);

  return (

    <Link
      key={trip._id}
      to={`/trips/${trip._id}`}
      className="
        block
        
        border
        border-slate-200
        rounded-2xl
        p-5
        hover:border-slate-300
        hover:shadow-md
        transition-all
      "
    >

      {/* Header */}

      <div
        className="
       
          flex
          justify-between
          items-start
          mb-4
        "
      >

        <div>

          <h3
            className="
              text-lg
              font-bold
              text-slate-900
            "
          >
            {trip.title}
          </h3>

          <p
            className="
              text-sm
              text-slate-500
              mt-1
            "
          >
            📍 {trip.destination}
          </p>

        </div>

        <span
          className={`
            px-3
            py-1
            rounded-full
            text-xs
            font-medium
            ${status.bg}
            ${status.text}
          `}
        >
          {status.label}
        </span>

      </div>

      {/* Travel Dates */}

      <div
        className="
          flex
          justify-between
          items-center
          bg-slate-50
          rounded-xl
          px-4
          py-3
          mb-4
        "
      >

        <div>

          <p
            className="
              text-sm
              font-medium
              text-slate-900
            "
          >
            {new Date(
              trip.startDate
            ).toLocaleDateString(
              "en-IN",
              {
                day: "numeric",
                month: "short",
              }
            )}

            {" → "}

            {new Date(
              trip.endDate
            ).toLocaleDateString(
              "en-IN",
              {
                day: "numeric",
                month: "short",
              }
            )}
          </p>

          <p
            className="
              text-xs
              text-slate-500
              mt-1
            "
          >
            Travel Dates
          </p>

        </div>

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-full
            px-3
            py-1
            text-xs
            font-semibold
            text-slate-700
          "
        >
          {getDuration(trip)}
          {" "}
          Days
        </div>

      </div>

      {/* Bottom Stats */}

      <div
        className="
          flex
          justify-between
          items-center
          text-sm
        "
      >

        <span
          className="
            text-slate-600
          "
        >
          💰 ₹
          {trip.totalBudget?.toLocaleString()}
        </span>

        <span
          className="
            text-slate-600
          "
        >
          👥
          {" "}
          {trip.participants?.length || 0}
          {" "}
          Members
        </span>

      </div>

    </Link>

  );
})}

        </div>

      )}

    </div>
  );
}

export default RecentTrips;
import {
  useEffect,
  useState,
} from "react";

import { Link }
from "react-router";

import DashboardLayout
  from "../../dashboard/layouts/DashboardLayout";

import TripList
  from "../components/TripList";

import {
  getMyTrips,
} from "../services/tripApi";

import Loader
  from "../../../shared/components/Loader";

function MyTrips() {

  const [trips, setTrips] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    fetchTrips();

  }, []);

  const fetchTrips =
    async () => {

      try {

        setLoading(true);

        const user =
          JSON.parse(
            localStorage.getItem(
              "user"
            )
          );

        const response =
          await getMyTrips(
            user?._id
          );

        setTrips(
          response.data || []
        );

      } catch (error) {

        setError(
          error.response?.data
            ?.message ||
            "Failed to load trips"
        );

      } finally {

        setLoading(false);

      }
    };

  const activeTrips =
    trips.filter(
      (trip) =>
        trip.status !==
        "completed"
    ).length;

  const completedTrips =
    trips.filter(
      (trip) =>
        trip.status ===
        "completed"
    ).length;

  return (

    <DashboardLayout>

      {/* Hero */}

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          bg-linear-to-r
          from-blue-600
          to-indigo-700
          text-white
          p-4
          mb-8
        "
      >

        <div
          className="
            absolute
            right-0
            top-0
            h-72
            w-72
            bg-white/10
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            relative
            flex
            flex-col
            lg:flex-row
            lg:justify-between
            lg:items-center
            gap-6
          "
        >

          <div>

            <span
              className="
                inline-flex
                bg-white/20
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                mb-4
              "
            >
              ✈️ Travel Dashboard
            </span>

            <h1
              className="
                text-4xl
                lg:text-5xl
                font-bold
              "
            >
              My Trips
            </h1>

            <p
              className="
                mt-3
                text-blue-100
                max-w-xl
              "
            >
              Organize destinations,
              manage participants,
              track expenses and
              settle trip balances.
            </p>

          </div>

          <Link
            to="/trips/create"
            className="
              bg-white
              text-blue-700
              px-6
              py-3
              rounded-2xl
              font-semibold
              hover:bg-slate-100
              transition
            "
          >
            + Create Trip
          </Link>

        </div>

      </div>

      {loading ? (

        <Loader />

      ) : error ? (

        <div
          className="
            bg-red-50
            border
            border-red-200
            text-red-600
            p-4
            rounded-2xl
          "
        >
          {error}
        </div>

      ) : (

        <>

          {/* Stats */}

          <div
            className="
              grid
              md:grid-cols-3
              gap-6
              mb-8
            "
          >

            <div
              className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-6
              "
            >

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Total Trips
              </p>

              <h2
                className="
                  text-4xl
                  font-bold
                  mt-2
                  text-slate-900
                "
              >
                {trips.length}
              </h2>

            </div>

            <div
              className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-6
              "
            >

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Active Trips
              </p>

              <h2
                className="
                  text-4xl
                  font-bold
                  mt-2
                  text-blue-600
                "
              >
                {activeTrips}
              </h2>

            </div>

            <div
              className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-6
              "
            >

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Completed Trips
              </p>

              <h2
                className="
                  text-4xl
                  font-bold
                  mt-2
                  text-emerald-600
                "
              >
                {completedTrips}
              </h2>

            </div>

          </div>

          {/* Empty State */}

          {trips.length === 0 ? (

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

              <div className="text-6xl mb-5">
                ✈️
              </div>

              <h2
                className="
                  text-2xl
                  font-bold
                  text-slate-900
                "
              >
                No Trips Yet
              </h2>

              <p
                className="
                  text-slate-500
                  mt-3
                  mb-8
                  max-w-md
                  mx-auto
                "
              >
                Create your first trip
                and start managing
                destinations, expenses,
                and participants.
              </p>

              <Link
                to="/trips/create"
                className="
                  inline-flex
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-6
                  py-3
                  rounded-2xl
                  font-medium
                "
              >
                Create First Trip
              </Link>

            </div>

          ) : (

            <TripList
              trips={trips}
            />

          )}

        </>

      )}

    </DashboardLayout>

  );
}

export default MyTrips;
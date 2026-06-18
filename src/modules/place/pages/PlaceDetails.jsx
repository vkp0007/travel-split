import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router";

import DashboardLayout
from "../../dashboard/layouts/DashboardLayout";

import {
  getPlaceInsights,
} from "../services/placeApi";

import PlaceInsightsCard
from "../components/PlaceInsightsCard";

import PopularAttractionsSection
from "../components/PopularAttractionsSection";

import TravelAdviceCard
from "../components/TravelAdviceCard";

function PlaceDetails() {

  const { destination } =
    useParams();

  const [place, setPlace] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    fetchPlace();

  }, [destination]);

  const fetchPlace =
    async () => {

      try {

        setLoading(true);

        const response =
          await getPlaceInsights(
            destination
          );

        setPlace(
          response.data
        );

      } catch (error) {

        console.error(error);

        setError(
          "Failed to load place details"
        );

      } finally {

        setLoading(false);

      }
    };

  if (loading) {

    return (

      <DashboardLayout>

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-12
            text-center
          "
        >
          Loading destination details...
        </div>

      </DashboardLayout>

    );
  }

  if (error || !place) {

    return (

      <DashboardLayout>

        <div
          className="
            bg-red-50
            border
            border-red-200
            text-red-600
            rounded-3xl
            p-6
          "
        >
          {error || "Destination not found"}
        </div>

      </DashboardLayout>

    );
  }

  return (

    <DashboardLayout>

      <div
        className="
          max-w-7xl
          mx-auto
          space-y-8
        "
      >

        {/* Back Button */}

        <Link
          to="/places"
          className="
            inline-flex
            items-center
            gap-2
            text-emerald-600
            hover:text-emerald-700
            font-medium
          "
        >
          ← Back to Destinations
        </Link>

        {/* Hero */}

        <PlaceInsightsCard
          place={place}
        />

        {/* Main Content */}

        <div
          className="
            grid
            xl:grid-cols-3
            gap-8
            items-stretch
          "
        >

          <div className="xl:col-span-2 h-full">

            <PopularAttractionsSection
              attractions={
                place?.popularAttractions || []
              }
            />

          </div>

          <TravelAdviceCard
            place={place}
          />

        </div>

        {/* CTA Card */}

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-linear-to-r
            from-emerald-600
            to-emerald-700
            p-8
            text-white
          "
        >

          <div
            className="
              absolute
              right-0
              top-0
              h-64
              w-64
              bg-white/10
              rounded-full
              blur-3xl
            "
          />

          <div className="relative">

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
              ✈️ Start Planning
            </span>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Ready to Visit {place.name}?
            </h2>

            <p
              className="
                mt-3
                text-emerald-50
                max-w-2xl
              "
            >
              Create a trip, invite friends,
              track expenses and split costs
              effortlessly with TravelSplit.
            </p>

            <Link
              to={`/trips/create?destination=${place.name}`}
              className="
                inline-flex
                mt-6
                bg-white
                text-emerald-700
                hover:bg-slate-100
                px-6
                py-3
                rounded-2xl
                font-semibold
                transition
              "
            >
              Create Trip To {place.name}
            </Link>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );
}

export default PlaceDetails;
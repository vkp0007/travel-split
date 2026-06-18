import {
  useEffect,
  useState,
} from "react";

import DashboardLayout
from "../../dashboard/layouts/DashboardLayout";

import {
  getDestinations,
  getRegions,
} from "../services/placeApi";

import PlaceList
from "../components/PlaceList";

import RegionFilter
from "../components/RegionFilter";

import DestinationSearch
from "../components/DestinationSearch";

function Places() {

  const [places, setPlaces] =
    useState([]);

  const [regions, setRegions] =
    useState([]);

  const [selectedRegion,
    setSelectedRegion] =
    useState("");

  const [search,
    setSearch] =
    useState("");

  const [loading,
    setLoading] =
    useState(true);

  const [error,
    setError] =
    useState("");

  useEffect(() => {

    fetchData();

  }, []);

  const fetchData =
    async () => {

      try {

        setLoading(true);

        const [
          placesRes,
          regionsRes
        ] = await Promise.all([

          getDestinations(),

          getRegions()

        ]);

        console.log(
          "placesRes",
          placesRes
        );

        console.log(
          "regionsRes",
          regionsRes
        );

        setPlaces(
          placesRes.data || []
        );

        setRegions(
          regionsRes.data || []
        );

      } catch (error) {

        console.error(error);

        setError(
          "Failed to load destinations"
        );

        setPlaces([]);

        setRegions([]);

      } finally {

        setLoading(false);
      }
    };

  const filteredPlaces =
    (places || []).filter(
      (place) => {

        const regionMatch =
          !selectedRegion ||
          place.region ===
          selectedRegion;

        const searchMatch =
          place.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        return (
          regionMatch &&
          searchMatch
        );
      }
    );

  return (
  
  <DashboardLayout>

    {/* Hero */}

    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-linear-to-r
        from-emerald-600
        to-emerald-700
        text-white
        p-8
        mb-8
      "
    >

      <div
        className="
          absolute
          top-0
          right-0
          w-72
          h-72
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
          🌍 Travel Explorer
        </span>

        <h1
          className="
            text-4xl
            lg:text-5xl
            font-bold
          "
        >
          Explore Destinations
        </h1>

        <p
          className="
            mt-3
            text-emerald-50
            max-w-2xl
          "
        >
          Discover amazing places across India,
          view travel insights and plan your next trip.
        </p>

      </div>

    </div>

    {loading ? (

      <div
        className="
          bg-white
          rounded-3xl
          border
          border-slate-200
          p-12
          text-center
        "
      >
        Loading destinations...
      </div>

    ) : error ? (

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
        {error}
      </div>

    ) : (

      <>

        {/* Filters */}

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-6
            mb-8
          "
        >

          <div
            className="
              flex
              flex-col
              md:flex-row
              gap-4
            "
          >

            <DestinationSearch
              value={search}
              onChange={setSearch}
            />

            <RegionFilter
              regions={regions}
              value={selectedRegion}
              onChange={setSelectedRegion}
            />

          </div>

        </div>

        {/* Stats */}

        <div
          className="
            mb-6
            flex
            items-center
            justify-between
          "
        >

          <h2
            className="
              text-xl
              font-semibold
            "
          >
            Available Destinations
          </h2>

          <span
            className="
              bg-emerald-100
              text-emerald-700
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
            "
          >
            {filteredPlaces.length} Places
          </span>

        </div>

        <PlaceList
          places={filteredPlaces}
        />

      </>

    )}

  </DashboardLayout>

  );
}

export default Places;
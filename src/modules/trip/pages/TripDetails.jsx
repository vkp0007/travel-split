import {
  useEffect,
  useState,
} from "react";

import { useParams }
from "react-router";

import DashboardLayout
from "../../dashboard/layouts/DashboardLayout";

import {
  getTripById,
  addParticipant,
} from "../services/tripApi";

import TripHero
from "../components/TripHero";

import ParticipantsSection
from "../components/ParticipantsSection";

import RecentExpensesSection
from "../../expense/components/RecentExpensesSection";

import Loader
from "../../../shared/components/Loader";

function TripDetails() {

  const { tripId } =
    useParams();

  const [trip, setTrip] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [
    participantLoading,
    setParticipantLoading,
  ] = useState(false);

  const [
    isTripSettled,
    setIsTripSettled,
  ] = useState(false);

  useEffect(() => {

    fetchTrip();

  }, [tripId]);

  const fetchTrip =
    async () => {

      try {

        setLoading(true);

        const response =
          await getTripById(
            tripId
          );

        setTrip(
          response.data
        );

      } catch (error) {

        setError(
          error.response?.data
            ?.message ||
            "Failed to load trip"
        );

      } finally {

        setLoading(false);

      }
    };

  const handleAddParticipant =
    async (email) => {

      try {

        setParticipantLoading(
          true
        );

        await addParticipant({
          tripId,
          email,
        });

        await fetchTrip();

      } catch (error) {

        alert(
          error.response?.data
            ?.message ||
            "Failed to add participant"
        );

      } finally {

        setParticipantLoading(
          false
        );

      }
    };

  if (loading) {

    return (
      <DashboardLayout>
        <Loader />
      </DashboardLayout>
    );
  }

  if (error) {

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
          {error}
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

      {/* Hero */}

      <TripHero
        trip={trip}
        isSettled={isTripSettled}
        onTripCompleted={
          fetchTrip
        }
      />

      {/* Recent Expenses */}

      <RecentExpensesSection
        tripId={tripId}
      />

      {/* Participants */}

      <ParticipantsSection
        trip={trip}
        loading={
          participantLoading
        }
        onAddParticipant={
          handleAddParticipant
        }
      />

      {/* Success Banner */}

      {trip?.status ===
      "completed" ? (

        <div
          className="
            bg-linear-to-r
            from-emerald-500
            to-green-600
            text-white
            rounded-3xl
            p-8
            text-center
          "
        >

          <div
            className="
              text-5xl
              mb-4
            "
          >
            🎉
          </div>

          <h2
            className="
              text-3xl
              font-bold
            "
          >
            Trip Completed
          </h2>

          <p
            className="
              mt-3
              text-emerald-100
            "
          >
            This trip has been
            successfully completed
            and archived.
          </p>

        </div>

      ) : isTripSettled && (

        <div
          className="
            bg-emerald-50
            border
            border-emerald-200
            rounded-3xl
            p-6
            flex
            items-center
            gap-4
          "
        >

          <div
            className="
              text-4xl
            "
          >
            ✅
          </div>

          <div>

            <h3
              className="
                text-lg
                font-bold
                text-emerald-700
              "
            >
              Ready To Complete
            </h3>

            <p
              className="
                text-emerald-600
                mt-1
              "
            >
              All balances have been
              settled. You can now
              complete this trip.
            </p>

          </div>

        </div>

      )}

    </div>

  </DashboardLayout>

);
}

export default TripDetails;
import {
  useEffect,
  useState,
} from "react";

import { useNavigate }
from "react-router";

import { createTrip }
from "../services/tripApi";

import { getDestinations }
from "../../place/services/placeApi";

import TripFormHeader
from "./TripFormHeader";

import TripBasicInfo
from "./TripBasicInfo";

import TripDateSection
from "./TripDateSection";

import TripBudgetSection
from "./TripBudgetSection";

import TripSubmitButton
from "./TripSubmitButton";

function TripForm() {

  const navigate =
    useNavigate();

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [places, setPlaces] =
    useState([]);

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      destination: "",
      startDate: "",
      endDate: "",
      baseCurrency: "INR",
      totalBudget: "",
    });

  useEffect(() => {

    fetchPlaces();

  }, []);

  const fetchPlaces =
    async () => {

      try {

        const response =
          await getDestinations();

        setPlaces(
          response.data || []
        );

      } catch (error) {

        console.error(error);

      }
    };

  const handleChange = (e) => {

    setFormData(
      (prev) => ({
        ...prev,
        [e.target.name]:
          e.target.value,
      })
    );
  };

  const validateForm =
    () => {

      if (
        !formData.title ||
        !formData.destination ||
        !formData.startDate ||
        !formData.endDate ||
        !formData.totalBudget
      ) {

        setError(
          "Please fill all required fields"
        );

        return false;
      }

      if (
        new Date(
          formData.endDate
        ) <
        new Date(
          formData.startDate
        )
      ) {

        setError(
          "End date cannot be before start date"
        );

        return false;
      }

      return true;
    };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setError("");

      if (
        !validateForm()
      ) {
        return;
      }

      try {

        setLoading(true);

        const response =
          await createTrip({

            ...formData,

            totalBudget:
              Number(
                formData.totalBudget
              ),

            createdBy:
              user._id,

          });

        navigate(
          `/trips/${response.data._id}`
        );

      } catch (error) {

        setError(
          error.response?.data
            ?.message ||
            "Failed to create trip"
        );

      } finally {

        setLoading(false);

      }
    };

  return (

    <form
      onSubmit={handleSubmit}
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-8
        shadow-sm
        space-y-4
      "
    >

      <TripFormHeader />

      {error && (

        <div
          className="
            bg-red-50
            border
            border-red-200
            text-red-600
            rounded-2xl
            p-4
          "
        >
          {error}
        </div>

      )}

      <TripBasicInfo
        formData={formData}
        handleChange={handleChange}
        places={places}
      />

      <TripDateSection
        formData={formData}
        handleChange={handleChange}
      />

      <TripBudgetSection
        formData={formData}
        handleChange={handleChange}
      />

      <TripSubmitButton
        loading={loading}
      />

    </form>

  );
}

export default TripForm;
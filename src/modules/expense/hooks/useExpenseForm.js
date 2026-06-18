import {
  useEffect,
  useState,
} from "react";

import {
  getTripById,
} from "../../trip/services/tripApi";

export function useExpenseForm(
  tripId
) {

  const [trip, setTrip] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [formData, setFormData] =
    useState({
      payerId: "",
      amount: "",
      currency: "INR",
      category: "food",
      description: "",
      splitType: "equal",
      participants: [],
      splits: [],
    });

  useEffect(() => {

    fetchTrip();

  }, [tripId]);

  const fetchTrip =
    async () => {

      try {

        const response =
          await getTripById(
            tripId
          );

        setTrip(
          response.data
        );

        setFormData(
          (prev) => ({
            ...prev,
            currency:
              response.data
                ?.baseCurrency ||
              "INR",
          })
        );

      } catch (error) {

        console.error(error);

      }
    };

  const handleChange =
    (e) => {

      setFormData(
        (prev) => ({
          ...prev,
          [e.target.name]:
            e.target.value,
        })
      );
    };

  const handleParticipantToggle =
    (userId) => {

      setFormData(
        (prev) => {

          const exists =
            prev.participants.includes(
              userId
            );

          return {
            ...prev,

            participants:
              exists
                ? prev.participants.filter(
                    (id) =>
                      id !== userId
                  )
                : [
                    ...prev.participants,
                    userId,
                  ],
          };
        }
      );
    };

  const handleSplitChange =
    (
      userId,
      field,
      value
    ) => {

      setFormData(
        (prev) => {

          const existing =
            prev.splits.find(
              (split) =>
                split.userId ===
                userId
            );

          let updatedSplits;

          if (existing) {

            updatedSplits =
              prev.splits.map(
                (split) =>
                  split.userId ===
                  userId
                    ? {
                        ...split,
                        [field]:
                          Number(value),
                      }
                    : split
              );

          } else {

            updatedSplits = [
              ...prev.splits,
              {
                userId,
                [field]:
                  Number(value),
              },
            ];
          }

          return {
            ...prev,
            splits:
              updatedSplits,
          };
        }
      );
    };

  return {

    trip,

    loading,
    setLoading,

    error,
    setError,

    formData,
    setFormData,

    handleChange,
    handleParticipantToggle,
    handleSplitChange,
  };
}
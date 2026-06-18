import axiosInstance from "../../../app/axios/axiosInstance";

export const createTrip = async (
  tripData
) => {
  const response =
    await axiosInstance.post(
      "/trips",
      tripData
    );

  return response.data;
};

export const getMyTrips =
  async (userId) => {

    const response =
      await axiosInstance.get(
        "/trips",
        {
          params: {
            userId,
          },
        }
      );

    return response.data;
  };

export const getTripById = async (
  tripId
) => {
  const response =
    await axiosInstance.get(
      `/trips/${tripId}`
    );

  return response.data;
};

export const addParticipant = async ({
  tripId,
  email,
}) => {
  const response =
    await axiosInstance.post(
      "/trips/participants",
      {
        tripId,
        email,
      }
    );

  return response.data;
};

export const completeTrip =
  async (tripId) => {

    const response =
      await axiosInstance.patch(
        `/trips/${tripId}/complete`
      );

    return response.data;
};
import axiosInstance
from "../../../app/axios/axiosInstance";

export const getBudgetSummary =
  async (tripId) => {

    const response =
      await axiosInstance.get(
        `/budget/${tripId}`
      );

    return response.data;
};
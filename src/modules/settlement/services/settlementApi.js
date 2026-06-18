import axiosInstance
from "../../../app/axios/axiosInstance";

export const getTripBalances =
  async (tripId) => {

    const response =
      await axiosInstance.get(
        `/settlements/${tripId}/balances`
      );

    return response.data;
};

export const createSettlement =
  async (data) => {

    const response =
      await axiosInstance.post(
        "/settlements",
        data
      );

    return response.data;
};
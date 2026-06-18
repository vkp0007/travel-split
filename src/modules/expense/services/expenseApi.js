import axiosInstance from "../../../app/axios/axiosInstance";

export const createExpense = async (
  expenseData
) => {
  const response =
    await axiosInstance.post(
      "/expenses",
      expenseData
    );

  return response.data;
};

export const getExpensesByTrip =
  async (tripId) => {
    const response =
      await axiosInstance.get(
        `/expenses/trip/${tripId}`
      );

    return response.data;
  };

  export const getTripAnalytics =
  async (tripId) => {

    const response =
      await axiosInstance.get(
        `/expenses/trip/${tripId}/analytics`
      );

    return response.data;
};
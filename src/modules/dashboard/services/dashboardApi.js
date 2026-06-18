import {
  getMyTrips,
} from "../../trip/services/tripApi";

export const getRecentTrips =
  async (userId) => {

    const response =
      await getMyTrips(
        userId
      );

    return response.data || [];
};
import axiosInstance
from "../../../app/axios/axiosInstance";

export const getDestinations =
  async () => {

    const response =
      await axiosInstance.get(
        "/places/destinations"
      );

    return response.data;
};

export const getRegions =
  async () => {

    const response =
      await axiosInstance.get(
        "/places/regions"
      );

    return response.data;
};

export const getRegionPlaces =
  async (region) => {

    const response =
      await axiosInstance.get(
        `/places/region/${region}`
      );

    return response.data;
};

export const searchPlaces =
  async (keyword) => {

    const response =
      await axiosInstance.get(
        `/places/search/${keyword}`
      );

    return response.data;
};

export const getPlaceInsights =
  async (destination) => {

    const response =
      await axiosInstance.get(
        `/places/insights/${destination}`
      );

    return response.data;
};

export const getTravelAdvice =
  async (data) => {

    const response =
      await axiosInstance.post(
        "/places/travel-advice",
        data
      );

    return response.data;
};
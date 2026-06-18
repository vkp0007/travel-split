import axiosInstance from "../../../app/axios/axiosInstance";

export const registerUser = async (userData) => {
  const response = await axiosInstance.post(
    "/users/register",
    userData
  );

  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axiosInstance.post(
    "/users/login",
    userData
  );

  return response.data;
};

export const getUserProfile = async () => {
  const token = localStorage.getItem("token");

  const response = await axiosInstance.get(
    "/users/profile",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
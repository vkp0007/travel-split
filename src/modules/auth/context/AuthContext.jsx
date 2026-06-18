import {
  createContext,
  useContext,
  useState,
} from "react";

import {
  getUserProfile,
}
from "../services/authApi";

const AuthContext =
  createContext();

export function AuthProvider({
  children,
}) {

  const [user, setUser] =
    useState(() => {

      const storedUser =
        localStorage.getItem(
          "user"
        );

      return storedUser
        ? JSON.parse(
            storedUser
          )
        : null;
    });

  const login = (
    userData
  ) => {

    localStorage.setItem(
      "user",
      JSON.stringify(
        userData
      )
    );

    localStorage.setItem(
      "token",
      userData.token
    );

    setUser(
      userData
    );
  };

  const refreshUser =
    async () => {

      try {

        const response =
          await getUserProfile();

        const updatedUser =
          response.data;

        localStorage.setItem(
          "user",
          JSON.stringify(
            updatedUser
          )
        );

        setUser(
          updatedUser
        );

      } catch (error) {

        console.error(
          "Failed to refresh user",
          error
        );
      }
    };

  const logout = () => {

    localStorage.removeItem(
      "user"
    );

    localStorage.removeItem(
      "token"
    );

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth =
  () =>
    useContext(
      AuthContext
    );
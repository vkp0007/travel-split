import {
  useEffect,
  useState,
} from "react";

import DashboardLayout
from "../layouts/DashboardLayout";

import DashboardHeader
from "../components/DashboardHeader";

import StatsGrid
from "../components/StatsGrid";

import RecentTrips
from "../components/RecentTrips";

import LoyaltyProgress
from "../components/LoyaltyProgress";

import {
  getUserProfile,
} from "../../auth/services/authApi";

function Dashboard() {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile =
    async () => {

      try {

        const response =
          await getUserProfile();

        setUser(
          response.data
        );

        localStorage.setItem(
          "user",
          JSON.stringify(
            response.data
          )
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    };

  if (loading) {

    return (

      <DashboardLayout>

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-12
            text-center
            text-slate-500
          "
        >
          Loading Dashboard...
        </div>

      </DashboardLayout>

    );
  }

  return (

    <DashboardLayout>

      <DashboardHeader
        user={user}
      />

      <StatsGrid
        user={user}
      />

  <div
  className="
    grid
    lg:grid-cols-3
    gap-6
    items-stretch
  "
>

  <div
    className="
      lg:col-span-2
      h-full
    "
  >
    <RecentTrips />
  </div>

  <div
    className="
      h-full
    "
  >
    <LoyaltyProgress
      user={user}
    />
  </div>

</div>
    </DashboardLayout>

  );
}

export default Dashboard;
import {
  useEffect,
  useState,
} from "react";

import DashboardLayout
from "../../dashboard/layouts/DashboardLayout";

import {
  getUserProfile,
} from "../services/authApi";

function Profile() {

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

        // keep localStorage updated

        localStorage.setItem(
          "user",
          JSON.stringify(
            response.data
          )
        );

      } catch (error) {

        console.error(
          error
        );

      } finally {

        setLoading(false);

      }
    };

  if (loading) {

    return (
      <DashboardLayout>
        <div className="p-8">
          Loading profile...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header */}

        <div
          className="
            bg-white
            rounded-2xl
            shadow-sm
            p-6
          "
        >

          <h1
            className="
              text-3xl
              font-bold
            "
          >
            Profile
          </h1>

          <p
            className="
              text-slate-500
              mt-2
            "
          >
            Manage your account
            and loyalty details
          </p>

        </div>

        {/* Personal Information */}

        <div
          className="
            bg-white
            rounded-2xl
            shadow-sm
            p-6
          "
        >

          <h2
            className="
              text-xl
              font-semibold
              mb-6
            "
          >
            Personal Information
          </h2>

          <div
            className="
              grid
              md:grid-cols-2
              gap-6
            "
          >

            <div>
              <p className="text-slate-500">
                Name
              </p>

              <p className="font-semibold mt-1">
                {user?.name}
              </p>
            </div>

            <div>
              <p className="text-slate-500">
                Email
              </p>

              <p className="font-semibold mt-1">
                {user?.email}
              </p>
            </div>

            <div>
              <p className="text-slate-500">
                Preferred Currency
              </p>

              <p className="font-semibold mt-1">
                {user?.preferredCurrency}
              </p>
            </div>

          </div>

        </div>

        {/* Loyalty */}

        <div
          className="
            bg-white
            rounded-2xl
            shadow-sm
            p-6
          "
        >

          <h2
            className="
              text-xl
              font-semibold
              mb-6
            "
          >
            Loyalty Overview
          </h2>

          <div
            className="
              grid
              md:grid-cols-4
              gap-5
            "
          >

            <div>
              <p className="text-slate-500">
                Tier
              </p>

              <p className="text-2xl font-bold">
                {
                  user?.loyalty
                    ?.tier
                }
              </p>
            </div>

            <div>
              <p className="text-slate-500">
                Score
              </p>

              <p className="text-2xl font-bold">
                {
                  user?.loyalty
                    ?.score
                }
              </p>
            </div>

            <div>
              <p className="text-slate-500">
                Total Trips
              </p>

              <p className="text-2xl font-bold">
                {
                  user?.loyalty
                    ?.totalTrips
                }
              </p>
            </div>

            <div>
              <p className="text-slate-500">
                Total Spend
              </p>

              <p className="text-2xl font-bold">
                ₹
                {
                  user?.loyalty
                    ?.totalSpend
                }
              </p>
            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Profile;
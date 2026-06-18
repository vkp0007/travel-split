import {
  Link,
} from "react-router";

import {
  Plane,
  Plus,
  ArrowRight,
} from "lucide-react";

function DashboardHeader({
  user,
}) {

  return (

    <div
      className="
        bg-white
        rounded-3xl
        border
        border-slate-200
        p-8
        mb-8
      "
    >

      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:justify-between
          lg:items-center
          gap-6
        "
      >

        <div>

          <div
            className="
              inline-flex
              items-center
              gap-2
              bg-emerald-50
              text-emerald-700
              px-3
              py-1
              rounded-full
              text-sm
              font-medium
              mb-4
            "
          >

            <Plane size={14} />

            Travel Dashboard

          </div>

          <h1
            className="
              text-4xl
              font-bold
              text-slate-900
              leading-tight
            "
          >
            Welcome back,
            {" "}
            {user?.name}
            {" "}
            👋
          </h1>

          <p
            className="
              text-slate-500
              mt-3
              max-w-2xl
            "
          >
            Manage trips, track expenses,
            monitor budgets and settle
            balances with your travel group.
          </p>

        </div>

        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-3
          "
        >

          <Link
            to="/trips/create"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              px-5
              py-3
              rounded-xl
              transition
            "
          >

            <Plus size={18} />

            Create Trip

          </Link>

          <Link
            to="/trips"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              bg-slate-100
              hover:bg-slate-200
              text-slate-700
              px-5
              py-3
              rounded-xl
              transition
            "
          >

            View Trips

            <ArrowRight size={16} />

          </Link>

        </div>

      </div>

    </div>

  );
}

export default DashboardHeader;
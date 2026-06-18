import {
  LayoutDashboard,
  MapPinned,
  PlusCircle,
  Plane,
  Heart,
} from "lucide-react";

import { NavLink }
from "react-router";

function AppSidebar() {

  const navLinkClass =
    ({ isActive }) =>
      `
        flex
        items-center
        gap-3
        px-4
        py-3
        rounded-xl
        transition-all
        duration-200
        font-medium

        ${
          isActive
            ? `
              bg-slate-900
              text-white
              shadow-sm
            `
            : `
              text-slate-600
              hover:bg-slate-100
              hover:text-slate-900
            `
        }
      `;

  return (

    <aside
      className="
        w-72
        min-h-[calc(100vh-64px)]
        bg-white
        border-r
        border-slate-200
        flex
        flex-col
      "
    >



      <div className="p-4 flex-1 mt-2">

        {/* Navigation */}

        <div className="mb-8">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-slate-400
              px-2
              mb-3
            "
          >
            Navigation
          </p>

          <nav className="space-y-2">

            <NavLink
              to="/dashboard"
              end
              className={navLinkClass}
            >
              <LayoutDashboard size={18} />
              Dashboard
            </NavLink>

            <NavLink
              to="/trips"
              end
              className={navLinkClass}
            >
              <Plane size={18} />
              My Trips
            </NavLink>

            <NavLink
              to="/trips/create"
              className={navLinkClass}
            >
              <PlusCircle size={18} />
              Create Trip
            </NavLink>

          </nav>

        </div>

        {/* Planning */}

        <div>

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-slate-400
              px-2
              mb-3
            "
          >
            Explore
          </p>

          <nav className="space-y-2">

            <NavLink
              to="/places"
              className={navLinkClass}
            >
              <MapPinned size={18} />
              Explore Places
            </NavLink>



          </nav>

        </div>

      </div>

      {/* Bottom Card */}

      <div className="p-4">

        <div
          className="
            rounded-2xl
            bg-linear-to-br
            from-emerald-50
            to-white
            border
            border-emerald-100
            p-4
          "
        >

          <p
            className="
              text-sm
              font-semibold
              text-slate-900
            "
          >
            Ready for your next trip?
          </p>

          <p
            className="
              text-xs
              text-slate-500
              mt-2
            "
          >
            Create a trip, invite
            participants and manage
            expenses effortlessly.
          </p>

        </div>

      </div>

    </aside>
  );
}

export default AppSidebar;
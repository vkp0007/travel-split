import {
  Compass,
} from "lucide-react";

import ProfileDropdown
from "../../../shared/components/ProfileDropdown";

function AppNavbar() {

  return (

    <header
      className="
        h-16
        bg-white/90
        backdrop-blur
        border-b
        border-slate-200
        px-6
        flex
        items-center
        justify-between
        sticky
        top-0
        z-40
      "
    >

      {/* Brand */}

      <div
        className="
          flex
          items-center
          gap-3
        "
      >

        <div
          className="
            h-10
            w-10
            rounded-xl
            bg-emerald-100
            flex
            items-center
            justify-center
          "
        >

          <Compass
            size={20}
            className="
              text-emerald-600
            "
          />

        </div>

        <div>

          <h1
            className="
              text-lg
              font-bold
              text-slate-900
            "
          >
            TravelSplit
          </h1>

          <p
            className="
              text-xs
              text-slate-500
            "
          >
            Smart Trip Management
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div
        className="
          flex
          items-center
          gap-4
        "
      >

        <div
          className="
            hidden
            md:flex
            items-center
            px-4
            py-2
            rounded-xl
            bg-slate-100
            text-sm
            text-slate-600
          "
        >
          Plan • Split • Travel
        </div>

        <ProfileDropdown />

      </div>

    </header>

  );
}

export default AppNavbar;
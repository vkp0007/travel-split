import { Link } from "react-router";

function Navbar() {

  return (

    <nav
      className="
        sticky
        top-0
        z-50
        bg-white/80
        backdrop-blur-xl
        border-b
        border-slate-200
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          justify-between
          items-center
        "
      >

        {/* Logo */}

        <Link
          to="/"
          className="
            flex
            items-center
            gap-3
          "
        >

          <div
            className="
              w-10
              h-10
              rounded-2xl
              bg-emerald-600
              text-white
              flex
              items-center
              justify-center
              font-bold
            "
          >
            T
          </div>

          <div>

            <h1
              className="
                text-xl
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

        </Link>

        {/* Navigation */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <Link
            to="/login"
            className="
              px-4
              py-2
              rounded-xl
              text-slate-600
              hover:bg-slate-100
              hover:text-slate-900
              transition
            "
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              px-5
              py-2.5
              rounded-xl
              font-medium
              transition
              shadow-sm
            "
          >
            Get Started
          </Link>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;
import { Link } from "react-router";

function Footer() {

  return (

    <footer
      className="
        mt-12
        border-t
        border-slate-200
        bg-white
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-16
        "
      >

        <div
          className="
            grid
            lg:grid-cols-4
            gap-10
          "
        >

          {/* Brand */}

          <div className="lg:col-span-2">

            <div
              className="
                flex
                items-center
                gap-3
                mb-5
              "
            >

              <div
                className="
                  h-12
                  w-12
                  rounded-2xl
                  bg-emerald-600
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xl
                "
              >
                ✈️
              </div>

              <div>

                <h2
                  className="
                    text-2xl
                    font-bold
                    text-slate-900
                  "
                >
                  TravelSplit
                </h2>

                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Smart Travel Expense Manager
                </p>

              </div>

            </div>

            <p
              className="
                text-slate-600
                leading-relaxed
                max-w-xl
              "
            >
              Plan trips, manage budgets,
              split expenses, track balances
              and settle payments with friends —
              all from one modern platform.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3
              className="
                font-bold
                text-slate-900
                mb-5
              "
            >
              Navigation
            </h3>

            <div
              className="
                flex
                flex-col
                gap-3
              "
            >

              <Link
                to="/"
                className="
                  text-slate-600
                  hover:text-emerald-600
                  transition
                "
              >
                Home
              </Link>

              <Link
                to="/places"
                className="
                  text-slate-600
                  hover:text-emerald-600
                  transition
                "
              >
                Explore Places
              </Link>

              <Link
                to="/trips"
                className="
                  text-slate-600
                  hover:text-emerald-600
                  transition
                "
              >
                My Trips
              </Link>

              <Link
                to="/trips/create"
                className="
                  text-slate-600
                  hover:text-emerald-600
                  transition
                "
              >
                Create Trip
              </Link>

            </div>

          </div>

          {/* Features */}

          <div>

            <h3
              className="
                font-bold
                text-slate-900
                mb-5
              "
            >
              Features
            </h3>

            <div
              className="
                space-y-4
              "
            >

              <div>

                <p className="font-medium text-slate-800">
                  Expense Splitting
                </p>

                <p className="text-sm text-slate-500">
                  Equal, Unequal & Percentage
                </p>

              </div>

              <div>

                <p className="font-medium text-slate-800">
                  Smart Settlements
                </p>

                <p className="text-sm text-slate-500">
                  Minimize transactions
                </p>

              </div>

              <div>

                <p className="font-medium text-slate-800">
                  Multi Currency
                </p>

                <p className="text-sm text-slate-500">
                  Automatic conversion support
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div
        className="
          border-t
          border-slate-200
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-5
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            © 2026 TravelSplit. All rights reserved.
          </p>

          <div
            className="
              flex
              items-center
              gap-6
              text-sm
            "
          >

            <button className="text-slate-500 hover:text-emerald-600">
              Privacy
            </button>

            <button className="text-slate-500 hover:text-emerald-600">
              Terms
            </button>

            <button className="text-slate-500 hover:text-emerald-600">
              Support
            </button>

          </div>

        </div>

      </div>

    </footer>

  );
}

export default Footer;
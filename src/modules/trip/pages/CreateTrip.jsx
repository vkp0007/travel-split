import DashboardLayout
  from "../../dashboard/layouts/DashboardLayout";

import TripForm
  from "../components/TripForm";

function CreateTrip() {

  return (

    <DashboardLayout>

      <div
        className="
          max-w-5xl
          mx-auto
          space-y-8
        "
      >

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-linear-to-r
            from-blue-600
          to-indigo-700
            p-4
            text-white
          "
        >

          <div
            className="
              absolute
              top-0
              right-0
              w-72
              h-72
              bg-white/10
              rounded-full
              blur-3xl
            "
          />

          <div className="relative">

            <span
              className="
                inline-flex
                bg-white/20
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                mb-4
              "
            >
              ✈️ Travel Planning
            </span>

            <h1
              className="
                text-4xl
                lg:text-5xl
                font-bold
              "
            >
              Create New Trip
            </h1>

            <p
              className="
                mt-3
                text-blue-100
                max-w-2xl
              "
            >
              Organize destinations,
              budgets, participants,
              and expenses from one place.
            </p>

          </div>

        </div>

        <TripForm />

      </div>

    </DashboardLayout>

  );
}

export default CreateTrip;
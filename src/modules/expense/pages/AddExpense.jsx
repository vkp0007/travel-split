import { useParams }
from "react-router";

import DashboardLayout
from "../../dashboard/layouts/DashboardLayout";

import ExpenseForm
from "../components/ExpenseForm";

function AddExpense() {

  const { tripId } =
    useParams();

  return (

    <DashboardLayout>

      <div
        className="
          max-w-6xl
          mx-auto
          space-y-8
        "
      >

        {/* Hero Section */}

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-linear-to-r
            from-emerald-600
            to-emerald-700
            text-white
            p-8
            lg:p-10
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
                items-center
                bg-white/20
                backdrop-blur-sm
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                mb-5
              "
            >
              💳 Expense Management
            </span>

            <h1
              className="
                text-4xl
                lg:text-5xl
                font-bold
                mb-4
              "
            >
              Add New Expense
            </h1>

            <p
              className="
                text-emerald-50
                max-w-2xl
                text-lg
              "
            >
              Record travel expenses, assign
              a payer, and automatically split
              costs among participants.
            </p>

          </div>

        </div>

        {/* Quick Info Cards */}

        <div
          className="
            grid
            md:grid-cols-3
            gap-5
          "
        >

          <div
            className="
              bg-white
              border
              border-slate-200
              rounded-3xl
              p-5
            "
          >
            <p className="text-slate-500 text-sm">
              Supported Splits
            </p>

            <h3
              className="
                text-lg
                font-semibold
                mt-2
              "
            >
              Equal, Unequal & %
            </h3>
          </div>

          <div
            className="
              bg-white
              border
              border-slate-200
              rounded-3xl
              p-5
            "
          >
            <p className="text-slate-500 text-sm">
              Currency Support
            </p>

            <h3
              className="
                text-lg
                font-semibold
                mt-2
              "
            >
              INR, USD & EUR
            </h3>
          </div>

          <div
            className="
              bg-white
              border
              border-slate-200
              rounded-3xl
              p-5
            "
          >
            <p className="text-slate-500 text-sm">
              Expense Tracking
            </p>

            <h3
              className="
                text-lg
                font-semibold
                mt-2
              "
            >
              Real-Time Updates
            </h3>
          </div>

        </div>

        {/* Form Section */}

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-3xl
            shadow-sm
            overflow-hidden
          "
        >

          <div
            className="
              px-8
              py-6
              border-b
              border-slate-200
            "
          >

            <h2
              className="
                text-xl
                font-semibold
                text-slate-900
              "
            >
              Expense Details
            </h2>

            <p
              className="
                text-slate-500
                mt-1
              "
            >
              Fill in the information below to
              create a new expense.
            </p>

          </div>

          <div className="p-8">

            <ExpenseForm
              tripId={tripId}
            />

          </div>

        </div>

      </div>

    </DashboardLayout>

  );
}

export default AddExpense;
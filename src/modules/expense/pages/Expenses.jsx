import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router";

import DashboardLayout
from "../../dashboard/layouts/DashboardLayout";

import {
  getExpensesByTrip,
} from "../services/expenseApi";

import ExpenseList
from "../components/ExpenseList";

import Loader
from "../../../shared/components/Loader";

import SettlementSummarySection
from "../../settlement/components/SettlementSummarySection";

function Expenses() {

  const { tripId } =
    useParams();

  const [expenses, setExpenses] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    fetchExpenses();

  }, []);

  const fetchExpenses =
    async () => {

      try {

        const response =
          await getExpensesByTrip(
            tripId
          );

        setExpenses(
          response.data || []
        );

      } catch (error) {

        setError(
          error.response?.data
            ?.message ||
            "Failed to load expenses"
        );

      } finally {

        setLoading(false);

      }
    };

  const totalSpent =
    expenses.reduce(
      (
        total,
        expense
      ) =>
        total +
        (expense.amount || 0),
      0
    );

  const averageExpense =
    expenses.length > 0
      ? Math.round(
          totalSpent /
            expenses.length
        )
      : 0;

  return (

    <DashboardLayout>

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
          mb-8
        "
      >

        <div
          className="
            absolute
            right-0
            top-0
            h-72
            w-72
            bg-white/10
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            relative
            flex
            flex-col
            lg:flex-row
            lg:justify-between
            lg:items-center
            gap-6
          "
        >

          <div>

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
              💳 Expense Tracking
            </span>

            <h1
              className="
                text-4xl
                lg:text-5xl
                font-bold
              "
            >
              Trip Expenses
            </h1>

            <p
              className="
                text-emerald-50
                mt-3
              "
            >
              Track spending,
              manage budgets,
              and settle balances
              with ease.
            </p>

          </div>

          <Link
            to={`/trips/${tripId}/expenses/add`}
            className="
              bg-white
              text-emerald-700
              hover:bg-slate-100
              px-6
              py-3
              rounded-2xl
              font-semibold
              transition
            "
          >
            + Add Expense
          </Link>

        </div>

      </div>

      {loading ? (

        <Loader />

      ) : error ? (

        <div
          className="
            bg-red-50
            border
            border-red-200
            text-red-600
            p-4
            rounded-2xl
          "
        >
          {error}
        </div>

      ) : (

        <>

          {/* Analytics */}

          <div
            className="
              grid
              md:grid-cols-3
              gap-6
              mb-8
            "
          >

            <div
              className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-6
              "
            >

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Total Expenses
              </p>

              <h2
                className="
                  text-4xl
                  font-bold
                  mt-2
                  text-slate-900
                "
              >
                {expenses.length}
              </h2>

            </div>

            <div
              className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-6
              "
            >

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Total Spent
              </p>

              <h2
                className="
                  text-4xl
                  font-bold
                  mt-2
                  text-emerald-600
                "
              >
                ₹
                {totalSpent.toLocaleString()}
              </h2>

            </div>

            <div
              className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-6
              "
            >

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Average Expense
              </p>

              <h2
                className="
                  text-4xl
                  font-bold
                  mt-2
                  text-blue-600
                "
              >
                ₹
                {averageExpense.toLocaleString()}
              </h2>

            </div>

          </div>

          {expenses.length === 0 ? (

            <div
              className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-16
                text-center
              "
            >

              <div
                className="
                  text-6xl
                  mb-5
                "
              >
                💳
              </div>

              <h2
                className="
                  text-2xl
                  font-bold
                  text-slate-900
                "
              >
                No Expenses Added
              </h2>

              <p
                className="
                  text-slate-500
                  mt-3
                  mb-8
                  max-w-md
                  mx-auto
                "
              >
                Start tracking expenses
                to keep budgets under
                control and split costs
                fairly among participants.
              </p>

              <Link
                to={`/trips/${tripId}/expenses/add`}
                className="
                  inline-flex
                  bg-emerald-600
                  hover:bg-emerald-700
                  text-white
                  px-6
                  py-3
                  rounded-2xl
                  font-medium
                "
              >
                Add First Expense
              </Link>

            </div>

          ) : (

            <div className="space-y-8">

              {/* Expense List */}

              <div
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-3xl
                  p-6
                "
              >

                <div className="mb-6">

                  <h2
                    className="
                      text-xl
                      font-bold
                      text-slate-900
                    "
                  >
                    All Expenses
                  </h2>

                  <p
                    className="
                      text-slate-500
                      mt-1
                    "
                  >
                    Complete expense
                    history for this trip.
                  </p>

                </div>

                <ExpenseList
                  expenses={expenses}
                />

              </div>

              {/* Settlement Section */}

              <div
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-3xl
                  p-6
                "
              >

                <div className="mb-6">

                  <span
                    className="
                      inline-flex
                      bg-emerald-100
                      text-emerald-700
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      font-medium
                      mb-3
                    "
                  >
                    💸 Settlements
                  </span>

                  <h2
                    className="
                      text-2xl
                      font-bold
                      text-slate-900
                    "
                  >
                    Trip Balances
                  </h2>

                  <p
                    className="
                      text-slate-500
                      mt-2
                    "
                  >
                    Review balances and settle
                    outstanding payments between
                    participants.
                  </p>

                </div>

                <SettlementSummarySection
                  tripId={tripId}
                />

              </div>

            </div>

          )}

        </>

      )}

    </DashboardLayout>

  );
}

export default Expenses;
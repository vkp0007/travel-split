import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router";

import {
  ArrowRight,
  Plus,
  Receipt,
} from "lucide-react";

import {
  getExpensesByTrip,
} from "../services/expenseApi";

import ExpenseItemCard
from "./ExpenseItemCard";

function RecentExpensesSection({
  tripId,
}) {

  const [expenses, setExpenses] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchExpenses();

  }, [tripId]);

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

        console.error(error);

      } finally {

        setLoading(false);

      }
    };

  return (

    <div
      className="
        bg-white
        rounded-3xl
        border
        border-slate-200
        shadow-sm
        p-6
      "
    >

      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          mb-8
        "
      >

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          <div
            className="
              h-12
              w-12
              rounded-2xl
              bg-emerald-50
              text-emerald-600
              flex
              items-center
              justify-center
            "
          >
            <Receipt size={22} />
          </div>

          <div>

            <h2
              className="
                text-xl
                font-bold
                text-slate-900
              "
            >
              Recent Expenses
            </h2>

            <p
              className="
                text-sm
                text-slate-500
                mt-1
              "
            >
              Latest spending activity
            </p>

          </div>

        </div>

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          {!loading &&
            expenses.length > 0 && (

            <span
              className="
                bg-slate-100
                text-slate-700
                px-3
                py-1
                rounded-full
                text-sm
                font-medium
              "
            >
              {expenses.length}
            </span>

          )}

          <Link
            to={`/trips/${tripId}/expenses`}
            className="
              flex
              items-center
              gap-2
              text-emerald-600
              font-medium
              hover:text-emerald-700
            "
          >
            View All
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>

      {/* Loading */}

      {loading ? (

        <div
          className="
            py-16
            text-center
            text-slate-500
          "
        >
          Loading expenses...
        </div>

      ) : expenses.length === 0 ? (

        <div
          className="
            py-16
            text-center
            bg-slate-50
            rounded-2xl
          "
        >

          <div className="text-5xl mb-4">
            💳
          </div>

          <h3
            className="
              text-lg
              font-semibold
              text-slate-900
            "
          >
            No Expenses Yet
          </h3>

          <p
            className="
              text-slate-500
              mt-2
              mb-6
            "
          >
            Start tracking trip spending
          </p>

          <Link
            to={`/trips/${tripId}/expenses/add`}
            className="
              inline-flex
              items-center
              gap-2
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              px-5
              py-3
              rounded-xl
              font-medium
            "
          >
            <Plus size={18} />
            Add Expense
          </Link>

        </div>

      ) : (

        <div
          className="
            grid
            lg:grid-cols-2
            gap-4
          "
        >

          {expenses
            .slice(0, 4)
            .map((expense) => (

              <ExpenseItemCard
                key={expense._id}
                expense={expense}
              />

            ))}

        </div>

      )}

      {/* Footer */}

      {!loading &&
        expenses.length > 0 && (

        <div
          className="
            mt-8
            pt-6
            border-t
            border-slate-200
            flex
            justify-end
          "
        >

          <Link
            to={`/trips/${tripId}/expenses/add`}
            className="
              inline-flex
              items-center
              gap-2
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              px-5
              py-3
              rounded-2xl
              font-medium
              transition-all
            "
          >
            <Plus size={18} />
            Add Expense
          </Link>

        </div>

      )}

    </div>

  );
}

export default RecentExpensesSection;
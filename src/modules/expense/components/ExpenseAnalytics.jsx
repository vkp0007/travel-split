import {
  useEffect,
  useState,
} from "react";

import {
  Wallet,
  PiggyBank,
  TrendingUp,
} from "lucide-react";

import {
  getTripAnalytics,
} from "../services/expenseApi";

import AnalyticsCard
from "./AnalyticsCard";

import CategoryBreakdown
from "./CategoryBreakdown";

function ExpenseAnalytics({
  tripId,
}) {

  const [
    analytics,
    setAnalytics,
  ] = useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchAnalytics();

  }, [tripId]);

  const fetchAnalytics =
    async () => {

      try {

        const response =
          await getTripAnalytics(
            tripId
          );

        setAnalytics(
          response.data
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

      <div
        className="
          bg-white
          border
          border-slate-200
          rounded-3xl
          p-8
          text-center
          text-slate-500
        "
      >
        Loading Analytics...
      </div>

    );
  }

  return (

    <div className="space-y-6">

      {/* Header */}

      <div
        className="
          bg-white
          border
          border-slate-200
          rounded-3xl
          p-6
        "
      >

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
          Expense Insights
        </span>

        <h2
          className="
            text-3xl
            font-bold
            text-slate-900
          "
        >
          Trip Analytics
        </h2>

        <p
          className="
            text-slate-500
            mt-2
          "
        >
          Monitor spending, budget usage
          and category breakdowns.
        </p>

      </div>

      {/* Stats */}

      <div
        className="
          grid
          lg:grid-cols-3
          gap-6
        "
      >

        <AnalyticsCard
          title="Total Expenses"
          value={`₹${analytics.totalExpenses?.toLocaleString()}`}
          valueClassName="text-slate-900"
          icon={
            <Wallet
              size={22}
              className="text-slate-700"
            />
          }
        />

        <AnalyticsCard
          title="Remaining Budget"
          value={`₹${analytics.remainingBudget?.toLocaleString()}`}
          valueClassName="text-emerald-600"
          icon={
            <PiggyBank
              size={22}
              className="text-emerald-600"
            />
          }
        />

        <AnalyticsCard
          title="Budget Used"
          value={`${analytics.budgetUsedPercentage}%`}
          valueClassName="text-amber-600"
          icon={
            <TrendingUp
              size={22}
              className="text-amber-600"
            />
          }
        />

      </div>

      {/* Categories */}

      <CategoryBreakdown
        categories={
          analytics.categories
        }
      />

    </div>

  );
}

export default ExpenseAnalytics;
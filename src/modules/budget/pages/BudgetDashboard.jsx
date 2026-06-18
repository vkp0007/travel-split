import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router";

import DashboardLayout
from "../../dashboard/layouts/DashboardLayout";

import {
  getBudgetSummary,
} from "../services/budgetApi";

import BudgetSummaryCards
from "../components/BudgetSummaryCards";

import BudgetProgress
from "../components/BudgetProgress";

import BudgetCategoryTable
from "../components/BudgetCategoryTable";

import BudgetAlerts
from "../components/BudgetAlerts";

function BudgetDashboard() {

  const { tripId } =
    useParams();

  const [budget, setBudget] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchBudget();

  }, []);

  const fetchBudget =
    async () => {

      try {

        const response =
          await getBudgetSummary(
            tripId
          );

        setBudget(
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
      <DashboardLayout>
        Loading...
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="space-y-6">

        <h1
          className="
            text-3xl
            font-bold
          "
        >
          Budget Dashboard
        </h1>

        <BudgetSummaryCards
          budget={budget}
        />

        <BudgetProgress
          budget={budget}
        />

        <BudgetCategoryTable
          budget={budget}
        />

        <BudgetAlerts
          alerts={
            budget.alerts
          }
        />

      </div>

    </DashboardLayout>
  );
}

export default BudgetDashboard;
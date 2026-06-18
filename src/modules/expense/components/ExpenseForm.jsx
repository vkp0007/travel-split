import {
  useNavigate,
} from "react-router";

import {
  createExpense,
} from "../services/expenseApi";

import {
  useExpenseForm,
} from "../hooks/useExpenseForm";

import {
  validateExpenseForm,
} from "../utils/expenseValidation";

import {
  buildExpensePayload,
} from "../utils/expensePayload";

import ExpenseError
  from "./ExpenseError";

import ExpenseBasicFields
  from "./ExpenseBasicFields";

import ExpenseParticipants
  from "./ExpenseParticipants";

import UnequalSplitSection
  from "./UnequalSplitSection";

import PercentageSplitSection
  from "./PercentageSplitSection";

import ExpenseSubmitButton
  from "./ExpenseSubmitButton";



function ExpenseForm({
  tripId,
}) {

  const navigate =
    useNavigate();

  const {

    trip,

    loading,
    setLoading,

    error,
    setError,

    formData,

    handleChange,
    handleParticipantToggle,
    handleSplitChange,

  } =
    useExpenseForm(
      tripId
    );

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setError("");

      if (
        !validateExpenseForm(
          formData,
          setError
        )
      ) {
        return;
      }

      try {

        setLoading(true);

        await createExpense(
          buildExpensePayload(
            tripId,
            formData
          )
        );

        navigate(
          `/trips/${tripId}/expenses`
        );

      } catch (error) {

        setError(
          error.response?.data
            ?.message ||
          "Failed to create expense"
        );

      } finally {

        setLoading(false);

      }
    };

  return (

    <form
      onSubmit={
        handleSubmit
      }
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-6
        space-y-6
      "
    >

      <ExpenseError
        error={error}
      />

      <ExpenseBasicFields
        trip={trip}
        formData={
          formData
        }
        handleChange={
          handleChange
        }
      />

      <ExpenseParticipants
        trip={trip}
        participants={
          formData.participants
        }
        onToggle={
          handleParticipantToggle
        }
      />

      {formData.splitType ===
        "unequal" && (
          <UnequalSplitSection
            trip={trip}
            participants={
              formData.participants
            }
            handleSplitChange={
              handleSplitChange
            }
          />
        )}

      {formData.splitType ===
        "percentage" && (
          <PercentageSplitSection
            trip={trip}
            participants={
              formData.participants
            }
            handleSplitChange={
              handleSplitChange
            }
          />
        )}


      <ExpenseSubmitButton
        loading={loading}
      />

    </form>

  );
}

export default ExpenseForm;
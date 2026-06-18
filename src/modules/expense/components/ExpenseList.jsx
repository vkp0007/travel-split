import ExpenseItemCard
from "./ExpenseItemCard";

function ExpenseList({
  expenses,
}) {

  if (
    !expenses ||
    expenses.length === 0
  ) {

    return (

      <div
        className="
          bg-white
          border
          border-slate-200
          rounded-3xl
          p-12
          text-center
        "
      >

        <div className="text-5xl mb-4">
          💳
        </div>

        <h3
          className="
            text-xl
            font-semibold
            text-slate-900
            mb-2
          "
        >
          No Expenses Found
        </h3>

        <p
          className="
            text-slate-500
          "
        >
          Start tracking trip expenses
          by adding your first expense.
        </p>

      </div>

    );
  }

  return (

    <div className="space-y-6">

      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        <div>

          <h2
            className="
              text-xl
              font-bold
              text-slate-900
            "
          >
            Expense History
          </h2>

          <p
            className="
              text-sm
              text-slate-500
              mt-1
            "
          >
            All recorded expenses
            for this trip
          </p>

        </div>

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            px-4
            py-2
          "
        >

          <p
            className="
              text-xs
              text-slate-500
            "
          >
            Total Expenses
          </p>

          <p
            className="
              font-bold
              text-slate-900
            "
          >
            {expenses.length}
          </p>

        </div>

      </div>

      {/* Expense Cards */}

      <div
        className="
          grid
          lg:grid-cols-2
          gap-5
        "
      >

        {expenses.map(
          (expense) => (

            <ExpenseItemCard
              key={expense._id}
              expense={expense}
            />

          )
        )}

      </div>

    </div>

  );
}

export default ExpenseList;
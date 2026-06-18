function ExpenseItemCard({
  expense,
}) {

  return (

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-5
        hover:shadow-lg
        hover:border-emerald-200
        transition-all
      "
    >

      {/* Top Row */}

      <div
        className="
          flex
          justify-between
          items-start
          mb-5
        "
      >

        <div>

          <span
            className="
              inline-flex
              px-3
              py-1
              rounded-full
              bg-emerald-50
              text-emerald-700
              text-xs
              font-semibold
              capitalize
            "
          >
            {expense.category}
          </span>

          <h3
            className="
              text-lg
              font-semibold
              text-slate-900
              mt-3
            "
          >
            {expense.description ||
              "Expense"}
          </h3>

        </div>

        <div className="text-right">

          <p
            className="
              text-2xl
              font-bold
              text-emerald-600
            "
          >
            ₹{expense.amount}
          </p>

          <p
            className="
              text-xs
              text-slate-400
              mt-1
            "
          >
            {expense.currency}
          </p>

        </div>

      </div>

      {/* Details */}

      <div
        className="
          grid
          grid-cols-2
          gap-4
          mb-4
        "
      >

        <div
          className="
            bg-slate-50
            rounded-2xl
            p-3
          "
        >

          <p
            className="
              text-xs
              text-slate-400
              mb-1
            "
          >
            Paid By
          </p>

          <p
            className="
              font-medium
              text-slate-800
            "
          >
            {expense.payerId?.name}
          </p>

        </div>

        <div
          className="
            bg-slate-50
            rounded-2xl
            p-3
          "
        >

          <p
            className="
              text-xs
              text-slate-400
              mb-1
            "
          >
            Split Type
          </p>

          <p
            className="
              font-medium
              text-slate-800
              capitalize
            "
          >
            {expense.splitType}
          </p>

        </div>

      </div>

      {/* Footer */}

      <div
        className="
          pt-4
          border-t
          border-slate-100
          flex
          justify-between
          items-center
        "
      >

        <span
          className="
            text-sm
            text-slate-500
          "
        >
          {new Date(
            expense.createdAt
          ).toLocaleDateString(
            "en-IN",
            {
              day: "numeric",
              month: "short",
              year: "numeric",
            }
          )}
        </span>

        <span
          className="
            text-sm
            text-slate-400
          "
        >
          {new Date(
            expense.createdAt
          ).toLocaleTimeString(
            [],
            {
              hour: "2-digit",
              minute: "2-digit",
            }
          )}
        </span>

      </div>

    </div>

  );
}

export default ExpenseItemCard;
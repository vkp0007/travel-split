function BudgetCategoryTable({
  budget,
}) {

  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow
        p-6
      "
    >

      <h2
        className="
          text-xl
          font-semibold
          mb-6
        "
      >
        Category Budgets
      </h2>

      <div className="space-y-4">

        {Object.entries(
          budget.categoryBudgets
        ).map(
          ([
            category,
            amount,
          ]) => (

            <div
              key={category}
              className="
                flex
                justify-between
                border-b
                pb-3
              "
            >

              <span
                className="
                  capitalize
                "
              >
                {category}
              </span>

              <span
                className="
                  font-semibold
                "
              >
                ₹{amount}
              </span>

            </div>
          )
        )}

      </div>

    </div>
  );
}

export default BudgetCategoryTable;
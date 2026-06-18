function BudgetProgress({
  budget,
}) {

  const percentage =
    Math.min(
      (
        budget.totalSpent /
        budget.totalBudget
      ) * 100,
      100
    );

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
          mb-4
        "
      >
        Budget Usage
      </h2>

      <div
        className="
          w-full
          h-4
          bg-slate-200
          rounded-full
        "
      >

        <div
          className="
            h-4
            rounded-full
            bg-emerald-500
          "
          style={{
            width:
              `${percentage}%`,
          }}
        />

      </div>

      <p
        className="
          mt-3
          text-sm
          text-slate-500
        "
      >
        {percentage.toFixed(1)}%
        used
      </p>

    </div>
  );
}

export default BudgetProgress;
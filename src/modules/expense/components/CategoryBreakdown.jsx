function CategoryBreakdown({
  categories,
}) {

  if (
    !categories ||
    categories.length === 0
  ) {

    return (

      <div
        className="
          bg-white
          border
          border-slate-200
          rounded-3xl
          p-8
        "
      >
        No expenses yet
      </div>

    );
  }

  const total =
    categories.reduce(
      (
        sum,
        item
      ) =>
        sum + item.amount,
      0
    );

  return (

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-8
      "
    >

      <h2
        className="
          text-xl
          font-bold
          mb-8
        "
      >
        Expense Categories
      </h2>

      <div className="space-y-5">

        {categories.map(
          (category) => {

            const percentage =
              (
                category.amount /
                total
              ) * 100;

            return (

              <div
                key={
                  category.category
                }
              >

                <div
                  className="
                    flex
                    justify-between
                    mb-2
                  "
                >

                  <span
                    className="
                      capitalize
                      font-medium
                    "
                  >
                    {
                      category.category
                    }
                  </span>

                  <span>
                    ₹
                    {
                      category.amount
                    }
                  </span>

                </div>

                <div
                  className="
                    w-full
                    bg-slate-100
                    rounded-full
                    h-2
                  "
                >

                  <div
                    className="
                      bg-emerald-500
                      h-2
                      rounded-full
                    "
                    style={{
                      width:
                        `${percentage}%`,
                    }}
                  />

                </div>

              </div>

            );
          }
        )}

      </div>

    </div>

  );
}

export default CategoryBreakdown;
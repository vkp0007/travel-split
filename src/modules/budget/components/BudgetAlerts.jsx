function BudgetAlerts({
  alerts,
}) {

  if (
    !alerts ||
    alerts.length === 0
  ) {

    return (
      <div
        className="
          bg-emerald-50
          border
          border-emerald-200
          rounded-xl
          p-4
        "
      >
        No budget alerts 🎉
      </div>
    );
  }

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
        Budget Alerts
      </h2>

      <div className="space-y-3">

        {alerts.map(
          (
            alert,
            index
          ) => (

            <div
              key={index}
              className={`
                p-4
                rounded-lg

                ${
                  alert.status ===
                  "OVER_BUDGET"
                    ? "bg-red-50 border border-red-200"
                    : "bg-emerald-50 border border-emerald-200"
                }
              `}
            >

              <p
                className="
                  font-medium
                "
              >
                {
                  alert.category
                }
              </p>

              <p
                className="
                  text-sm
                  mt-1
                "
              >
                Allocated:
                {" "}
                ₹
                {
                  alert.allocated
                }

                {" | "}

                Spent:
                {" "}
                ₹
                {
                  alert.spent
                }
              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}

export default BudgetAlerts;
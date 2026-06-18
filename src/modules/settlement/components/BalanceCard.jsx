function BalanceCard({
  balance,
}) {

  const isPositive =
    balance.balance > 0;

  const isZero =
    balance.balance === 0;

  return (

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-6
        hover:shadow-md
        transition-all
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
          className={`
            h-12
            w-12
            rounded-2xl
            flex
            items-center
            justify-center
            text-lg

            ${
              isPositive
                ? "bg-emerald-100"
                : isZero
                ? "bg-slate-100"
                : "bg-red-100"
            }
          `}
        >
          {isPositive
            ? "💰"
            : isZero
            ? "✓"
            : "💸"}
        </div>

        <div>

          <h3
            className="
              font-semibold
              text-slate-900
            "
          >
            {balance.name}
          </h3>

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            Current Balance
          </p>

        </div>

      </div>

      <div className="mt-5">

        <p
          className={`
            text-3xl
            font-bold

            ${
              isPositive
                ? "text-emerald-600"
                : isZero
                ? "text-slate-500"
                : "text-red-500"
            }
          `}
        >
          {isPositive ? "+" : ""}
          ₹
          {Math.abs(
            balance.balance
          ).toLocaleString()}
        </p>

      </div>

    </div>

  );
}

export default BalanceCard;
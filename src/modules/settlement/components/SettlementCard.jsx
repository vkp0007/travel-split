function SettlementCard({
  settlement,
  onSettle,
}) {

  return (

    <div
      className="
        bg-slate-50
        border
        border-slate-200
        rounded-3xl
        p-5
        flex
        flex-col
        md:flex-row
        md:items-center
        md:justify-between
        gap-5
      "
    >

      <div>

        <div
          className="
            flex
            items-center
            gap-2
            text-lg
            font-semibold
            text-slate-900
          "
        >

          <span>
            {settlement.fromName}
          </span>

          <span className="text-slate-400">
            →
          </span>

          <span>
            {settlement.toName}
          </span>

        </div>

        <p
          className="
            text-sm
            text-slate-500
            mt-2
          "
        >
          Suggested settlement amount
        </p>

      </div>

      <div
        className="
          flex
          items-center
          gap-4
        "
      >

        <span
          className="
            text-2xl
            font-bold
            text-emerald-600
          "
        >
          ₹
          {settlement.amount.toLocaleString()}
        </span>

        <button
          onClick={() =>
            onSettle(
              settlement
            )
          }
          className="
            bg-emerald-600
            hover:bg-emerald-700
            text-white
            px-5
            py-3
            rounded-2xl
            font-medium
            transition
          "
        >
          Settle Now
        </button>

      </div>

    </div>

  );
}

export default SettlementCard;
import {
  useEffect,
  useState,
} from "react";

import {
  getTripBalances,
  createSettlement,
} from "../services/settlementApi";

import BalanceCard
from "./BalanceCard";

import SettlementCard
from "./SettlementCard";

function SettlementSummarySection({
  tripId,
  onSettlementStatusChange,
}) {

  const [balances, setBalances] =
    useState([]);

  const [
    settlements,
    setSettlements,
  ] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [isSettled, setIsSettled] =
    useState(false);

  useEffect(() => {

    fetchBalances();

  }, [tripId]);

  const fetchBalances =
    async () => {

      try {

        const response =
          await getTripBalances(
            tripId
          );

        setBalances(
          response.data.balances
        );

        setSettlements(
          response.data
            .suggestedSettlements
        );

        setIsSettled(
          response.data
            .isSettled
        );

        onSettlementStatusChange?.(
          response.data
            .isSettled
        );

      } catch (error) {

        console.error(
          error
        );

      } finally {

        setLoading(false);

      }
    };

  const handleSettlement =
    async (
      settlement
    ) => {

      try {

        await createSettlement({

          tripId,

          fromUserId:
            settlement.fromUserId,

          toUserId:
            settlement.toUserId,

          amount:
            settlement.amount,

          currency: "INR",
        });

        await fetchBalances();

      } catch (error) {

        alert(
          error.response?.data
            ?.message ||
            "Failed to settle"
        );
      }
    };

  if (loading) {

  return (

  <div
    className="
      bg-white
      border
      border-slate-200
      rounded-3xl
      shadow-sm
      overflow-hidden
    "
  >

    {/* Header */}

    <div
      className="
        px-8
        py-6
        border-b
        border-slate-200
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        <div>

          <span
            className="
              inline-flex
              bg-emerald-100
              text-emerald-700
              px-3
              py-1
              rounded-full
              text-sm
              font-medium
              mb-3
            "
          >
            Settlement Center
          </span>

          <h2
            className="
              text-2xl
              font-bold
              text-slate-900
            "
          >
            Balances & Settlements
          </h2>

          <p
            className="
              text-slate-500
              mt-1
            "
          >
            See who owes whom and
            settle balances instantly.
          </p>

        </div>

        <div
          className="
            bg-slate-100
            px-4
            py-2
            rounded-2xl
          "
        >

          <span
            className="
              text-sm
              text-slate-500
            "
          >
            Participants
          </span>

          <p
            className="
              text-xl
              font-bold
              text-slate-900
            "
          >
            {balances.length}
          </p>

        </div>

      </div>

    </div>

    {/* Content */}

    <div className="p-8">

      <h3
        className="
          text-lg
          font-semibold
          mb-5
        "
      >
        Current Balances
      </h3>

      <div
        className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-5
          mb-10
        "
      >

        {balances.map(
          (balance) => (

            <BalanceCard
              key={balance.userId}
              balance={balance}
            />

          )
        )}

      </div>

      {isSettled ? (

        <div
          className="
            bg-emerald-50
            border
            border-emerald-200
            rounded-3xl
            p-8
            text-center
          "
        >

          <div className="text-5xl mb-4">
            🎉
          </div>

          <h3
            className="
              text-2xl
              font-bold
              text-emerald-700
            "
          >
            Trip Fully Settled
          </h3>

          <p
            className="
              text-emerald-600
              mt-2
            "
          >
            No outstanding balances remain.
          </p>

        </div>

      ) : (

        <div>

          <h3
            className="
              text-xl
              font-semibold
              mb-5
            "
          >
            Suggested Settlements
          </h3>

          <div className="space-y-4">

            {settlements.map(
              (settlement) => (

                <SettlementCard
                  key={`${settlement.fromUserId}-${settlement.toUserId}`}
                  settlement={settlement}
                  onSettle={handleSettlement}
                />

              )
            )}

          </div>

        </div>

      )}

    </div>

  </div>

);
  }

  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow
        p-6
      "
    >

      <div
        className="
          flex
          justify-between
          items-center
          mb-6
        "
      >

        <div>

          <h2
            className="
              text-xl
              font-semibold
            "
          >
            Settlements
          </h2>

          <p
            className="
              text-slate-500
              text-sm
              mt-1
            "
          >
            Balance overview
            and settlement
            suggestions
          </p>

        </div>

      </div>

      {/* Balances */}

      <div
        className="
          grid
          md:grid-cols-3
          gap-4
          mb-8
        "
      >

        {balances.map(
          (balance) => (

            <BalanceCard
              key={
                balance.userId
              }
              balance={
                balance
              }
            />

          )
        )}

      </div>

      {/* Settlements */}

      {isSettled ? (

        <div
          className="
            bg-emerald-50
            text-emerald-700
            p-4
            rounded-xl
          "
        >
          🎉 All balances
          are settled.
        </div>

      ) : (

        <div>

          <h3
            className="
              font-semibold
              mb-4
            "
          >
            Suggested
            Settlements
          </h3>

          <div className="space-y-4">

            {settlements.map(
              (
                settlement
              ) => (

                <SettlementCard
                  key={`${settlement.fromUserId}-${settlement.toUserId}`}
                  settlement={
                    settlement
                  }
                  onSettle={
                    handleSettlement
                  }
                />

              )
            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default SettlementSummarySection;
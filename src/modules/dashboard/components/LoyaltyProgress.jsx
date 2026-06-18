import {
  Award,
  TrendingUp,
  Star,
} from "lucide-react";

function LoyaltyProgress({
  user,
}) {

  const score =
    user?.loyalty?.score || 0;

  const tier =
    user?.loyalty?.tier ||
    "Bronze";

  const totalTrips =
    user?.loyalty?.totalTrips || 0;

  const progress =
    Math.min(score, 100);

  const pointsRemaining =
    Math.max(
      100 - score,
      0
    );

  return (

    <div
      className="
        h-full
        bg-white
        rounded-3xl
        border
        border-slate-200
        p-6
        flex
        flex-col
      "
    >

      {/* Header */}

      <div
        className="
          flex
          justify-between
          items-start
          mb-6
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
            Loyalty Rewards
          </h2>

          <p
            className="
              text-slate-500
              text-sm
              mt-1
            "
          >
            Earn rewards as you travel
          </p>

        </div>

        <div
          className="
            flex
            items-center
            gap-2
            bg-emerald-50
            text-emerald-700
            px-3
            py-1.5
            rounded-full
            text-sm
            font-medium
          "
        >

          <Award size={16} />

          {tier}

        </div>

      </div>

      {/* Score */}

      <div className="mb-6">

        <div
          className="
            flex
            justify-between
            items-center
            mb-2
          "
        >

          <span
            className="
              text-sm
              text-slate-500
            "
          >
            Loyalty Score
          </span>

          <span
            className="
              text-lg
              font-bold
              text-slate-900
            "
          >
            {score}/100
          </span>

        </div>

        <div
          className="
            w-full
            bg-slate-100
            rounded-full
            h-3
            overflow-hidden
          "
        >

          <div
            className="
              h-full
              bg-emerald-500
              rounded-full
            "
            style={{
              width:
                `${progress}%`,
            }}
          />

        </div>

        <div
          className="
            flex
            justify-between
            mt-2
            text-xs
            text-slate-400
          "
        >

          <span>Bronze</span>

          <span>Silver</span>

          <span>Gold</span>

        </div>

      </div>

      {/* Milestone */}

      <div
        className="
          bg-slate-50
          rounded-2xl
          p-4
          mb-5
        "
      >

        <div
          className="
            flex
            items-center
            gap-2
            mb-2
          "
        >

          <TrendingUp
            size={16}
            className="
              text-emerald-600
            "
          />

          <span
            className="
              font-medium
              text-slate-900
            "
          >
            Next Milestone
          </span>

        </div>

        <p
          className="
            text-sm
            text-slate-500
          "
        >
          Earn
          {" "}
          <span
            className="
              font-semibold
              text-slate-900
            "
          >
            {pointsRemaining}
          </span>
          {" "}
          more points to unlock
          the next loyalty tier.
        </p>

      </div>



      {/* Activity */}

      <div
        className="
          bg-slate-50
          rounded-2xl
          p-4
          mb-5
        "
      >

        <p
          className="
            text-sm
            text-slate-500
          "
        >
          Travel Activity
        </p>

        <h3
          className="
            text-2xl
            font-bold
            text-slate-900
            mt-2
          "
        >
          {totalTrips}
        </h3>

        <p
          className="
            text-sm
            text-slate-500
            mt-1
          "
        >
          Trips completed so far
        </p>

      </div>

      {/* Bottom Stats */}

      <div
        className="
          mt-auto
          grid
          grid-cols-2
          gap-4
        "
      >

        <div
          className="
            bg-slate-50
            rounded-2xl
            p-4
          "
        >

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            Trips
          </p>

          <h3
            className="
              text-2xl
              font-bold
              mt-2
            "
          >
            {totalTrips}
          </h3>

        </div>

        <div
          className="
            bg-slate-50
            rounded-2xl
            p-4
          "
        >

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            Tier
          </p>

          <h3
            className="
              text-2xl
              font-bold
              mt-2
            "
          >
            {tier}
          </h3>

        </div>

      </div>

    </div>

  );
}

export default LoyaltyProgress;
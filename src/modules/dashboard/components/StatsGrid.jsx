import {
  Plane,
  Wallet,
  Receipt,
  Award,
} from "lucide-react";

import StatCard
from "../../../shared/components/StatCard";

function StatsGrid({
  user,
}) {

  return (

    <div
      className="
        grid
        sm:grid-cols-2
        xl:grid-cols-4
        gap-5
        mb-8
      "
    >

      <StatCard
        title="Trips"
        value={
          user?.loyalty
            ?.totalTrips || 0
        }
        subtitle="Trips completed"
        icon={
          <Plane size={20} />
        }
      />

      <StatCard
        title="Total Spend"
        value={`₹${
          user?.loyalty
            ?.totalSpend || 0
        }`}
        subtitle="Across all trips"
        icon={
          <Wallet size={20} />
        }
      />

      <StatCard
        title="Settlements"
        value={
          user?.loyalty
            ?.successfulSettlements || 0
        }
        subtitle="Successfully settled"
        icon={
          <Receipt size={20} />
        }
      />

      <StatCard
        title="Loyalty Score"
        value={
          user?.loyalty
            ?.score || 0
        }
        subtitle={
          user?.loyalty
            ?.tier || "Bronze"
        }
        icon={
          <Award size={20} />
        }
      />

    </div>

  );
}

export default StatsGrid;
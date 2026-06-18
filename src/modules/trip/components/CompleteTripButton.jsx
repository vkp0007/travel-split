import { useState } from "react";

import {
  completeTrip,
} from "../services/tripApi";

function CompleteTripButton({
  tripId,
  disabled,
  onComplete,
}) {

  const [loading, setLoading] =
    useState(false);

  const handleComplete =
    async () => {

      const confirmed =
        window.confirm(
          "Are you sure you want to complete this trip?"
        );

      if (!confirmed) {
        return;
      }

      try {

        setLoading(true);

        await completeTrip(
          tripId
        );

        onComplete?.();

      } catch (error) {

        alert(
          error.response?.data?.message ||
          "Failed to complete trip"
        );

      } finally {

        setLoading(false);

      }
    };

  return (

    <button
      onClick={handleComplete}
      disabled={
        disabled ||
        loading
      }
      className="
        inline-flex
        items-center
        gap-2
        bg-emerald-600
        hover:bg-emerald-700
        disabled:bg-slate-300
        disabled:cursor-not-allowed
        text-white
        px-6
        py-3
        rounded-2xl
        font-semibold
        transition
        shadow-sm
      "
    >

      {loading
        ? "Completing..."
        : (
          <>
            <span>✓</span>
            <span>Complete Trip</span>
          </>
        )}

    </button>

  );
}

export default CompleteTripButton;
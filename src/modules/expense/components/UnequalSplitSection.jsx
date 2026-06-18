function UnequalSplitSection({
  trip,
  participants,
  handleSplitChange,
}) {

  return (

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-6
      "
    >

      <div className="mb-6">

        <h3
          className="
            text-xl
            font-bold
            text-slate-900
          "
        >
          Unequal Split
        </h3>

        <p
          className="
            text-sm
            text-slate-500
            mt-1
          "
        >
          Enter the amount owed by each participant
        </p>

      </div>

      <div className="space-y-4">

        {participants.map(
          (userId) => {

            const participant =
              trip?.participants.find(
                (p) =>
                  p.user._id ===
                  userId
              );

            return (

              <div
                key={userId}
                className="
                  flex
                  items-center
                  gap-4
                  bg-slate-50
                  rounded-2xl
                  p-4
                "
              >

                <div
                  className="
                    h-10
                    w-10
                    rounded-full
                    bg-emerald-100
                    text-emerald-700
                    flex
                    items-center
                    justify-center
                    font-semibold
                  "
                >
                  {participant?.user.name
                    ?.charAt(0)
                    ?.toUpperCase()}
                </div>

                <div className="flex-1">

                  <p className="font-medium">
                    {participant?.user.name}
                  </p>

                  <p
                    className="
                      text-xs
                      text-slate-500
                    "
                  >
                    Amount Owed
                  </p>

                </div>

                <input
                  type="number"
                  placeholder="₹ 0"
                  onChange={(e) =>
                    handleSplitChange(
                      userId,
                      "amountOwed",
                      e.target.value
                    )
                  }
                  className="
                    w-32
                    border
                    border-slate-200
                    rounded-xl
                    px-4
                    py-2
                    focus:outline-none
                    focus:ring-2
                    focus:ring-emerald-500
                  "
                />

              </div>

            );
          }
        )}

      </div>

    </div>

  );
}

export default UnequalSplitSection;
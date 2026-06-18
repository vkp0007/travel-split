function PercentageSplitSection({
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
          Percentage Split
        </h3>

        <p
          className="
            text-sm
            text-slate-500
            mt-1
          "
        >
          Define the percentage share for each participant
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
                    bg-blue-100
                    text-blue-700
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
                    Percentage Share
                  </p>

                </div>

                <div className="relative">

                  <input
                    type="number"
                    placeholder="0"
                    onChange={(e) =>
                      handleSplitChange(
                        userId,
                        "percentage",
                        e.target.value
                      )
                    }
                    className="
                      w-24
                      border
                      border-slate-200
                      rounded-xl
                      px-4
                      py-2
                      pr-8
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-500
                    "
                  />

                  <span
                    className="
                      absolute
                      right-3
                      top-1/2
                      -translate-y-1/2
                      text-slate-400
                    "
                  >
                    %
                  </span>

                </div>

              </div>

            );
          }
        )}

      </div>

    </div>

  );
}

export default PercentageSplitSection;
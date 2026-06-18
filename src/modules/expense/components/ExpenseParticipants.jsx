function ExpenseParticipants({
  trip,
  participants,
  onToggle,
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

      {/* Header */}

      <div className="mb-6">

        <h3
          className="
            text-xl
            font-bold
            text-slate-900
          "
        >
          Expense Participants
        </h3>

        <p
          className="
            text-sm
            text-slate-500
            mt-1
          "
        >
          Choose who will share this expense
        </p>

      </div>

      {/* Selected Count */}

      <div
        className="
          mb-5
          flex
          justify-between
          items-center
          bg-slate-50
          rounded-2xl
          px-4
          py-3
        "
      >

        <span
          className="
            text-sm
            text-slate-500
          "
        >
          Selected Members
        </span>

        <span
          className="
            text-sm
            font-semibold
            text-emerald-600
          "
        >
          {participants.length}
        </span>

      </div>

      {/* Participants Grid */}

      <div
        className="
          grid
          md:grid-cols-2
          gap-4
        "
      >

        {trip?.participants?.map(
          (participant) => {

            const selected =
              participants.includes(
                participant.user._id
              );

            return (

              <label
                key={
                  participant.user._id
                }
                className={`
                  relative
                  cursor-pointer
                  rounded-2xl
                  border
                  p-4
                  transition-all

                  ${
                    selected
                      ? `
                        border-emerald-500
                        bg-emerald-50
                        shadow-sm
                      `
                      : `
                        border-slate-200
                        hover:border-slate-300
                        hover:bg-slate-50
                      `
                  }
                `}
              >

                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() =>
                    onToggle(
                      participant.user._id
                    )
                  }
                  className="hidden"
                />

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    {/* Avatar */}

                    <div
                      className="
                        h-11
                        w-11
                        rounded-full
                        bg-emerald-100
                        text-emerald-700
                        font-semibold
                        flex
                        items-center
                        justify-center
                      "
                    >
                      {participant.user.name
                        ?.charAt(0)
                        ?.toUpperCase()}
                    </div>

                    <div>

                      <p
                        className="
                          font-semibold
                          text-slate-900
                        "
                      >
                        {
                          participant.user.name
                        }
                      </p>

                      <p
                        className="
                          text-xs
                          text-slate-500
                        "
                      >
                        {
                          participant.user.email
                        }
                      </p>

                    </div>

                  </div>

                  {/* Selected Indicator */}

                  <div
                    className={`
                      h-6
                      w-6
                      rounded-full
                      border-2
                      flex
                      items-center
                      justify-center

                      ${
                        selected
                          ? `
                            border-emerald-500
                            bg-emerald-500
                            text-white
                          `
                          : `
                            border-slate-300
                          `
                      }
                    `}
                  >

                    {selected && "✓"}

                  </div>

                </div>

              </label>

            );
          }
        )}

      </div>

    </div>

  );
}

export default ExpenseParticipants;
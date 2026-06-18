function ParticipantCard({
  participant,
}) {

  const isOwner =
    participant.role ===
    "owner";

  return (

    <div
      className="
        group
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-5
        hover:border-emerald-200
        hover:shadow-lg
        transition-all
      "
    >

      <div
        className="
          flex
          justify-between
          items-start
        "
      >

        <div
          className="
            flex
            gap-4
            items-center
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-emerald-100
              text-emerald-700
              flex
              items-center
              justify-center
              font-bold
              text-lg
            "
          >
            {participant.user.name
              ?.charAt(0)
              ?.toUpperCase()}
          </div>

          <div>

            <h3
              className="
                font-semibold
                text-slate-900
              "
            >
              {participant.user.name}
            </h3>

            <p
              className="
                text-sm
                text-slate-500
                mt-1
              "
            >
              {participant.user.email}
            </p>

          </div>

        </div>

        <span
          className={`
            px-3
            py-1
            rounded-full
            text-xs
            font-medium

            ${
              isOwner
                ? `
                  bg-blue-100
                  text-blue-700
                `
                : `
                  bg-emerald-100
                  text-emerald-700
                `
            }
          `}
        >
          {isOwner
            ? "Owner"
            : "Member"}
        </span>

      </div>

    </div>

  );
}

export default ParticipantCard;
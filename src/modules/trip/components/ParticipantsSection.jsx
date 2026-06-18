import AddParticipantForm
  from "./AddParticipantForm";

import ParticipantCard
  from "./ParticipantCard";

function ParticipantsSection({
  trip,
  loading,
  onAddParticipant,
}) {

  return (

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-8
      "
    >

      {/* Header */}

      <div
        className="
          flex
          flex-col
          md:flex-row
          md:justify-between
          md:items-center
          gap-4
          mb-8
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
            👥 Trip Members
          </span>

          <h2
            className="
              text-3xl
              font-bold
              text-slate-900
            "
          >
            Participants
          </h2>

          <p
            className="
              text-slate-500
              mt-2
            "
          >
            Invite and manage people
            joining this trip.
          </p>

        </div>

        <div
          className="
            bg-slate-100
            text-slate-700
            px-5
            py-3
            rounded-2xl
            font-semibold
          "
        >
          👥 {trip?.participants?.length || 0} Members
        </div>

      </div>

      {/* Add Form */}

      <div
        className="
          mb-8
        "
      >

        <AddParticipantForm
          onAddParticipant={
            onAddParticipant
          }
          loading={loading}
        />

      </div>

      {/* Participants */}

      {
      

      trip?.participants?.length >
      0 ? (

        <div
          className="
            grid
            md:grid-cols-2
            gap-5
          "
        >

          {trip.participants.map(
            (participant) => (

              <ParticipantCard
                key={
                  participant.user._id
                }
                participant={
                  participant
                }
              />

            )
          )}

        </div>

      ) : (

        <div
          className="
            border
            border-dashed
            border-slate-300
            rounded-3xl
            p-12
            text-center
          "
        >

          <div
            className="
              text-6xl
              mb-4
            "
          >
            👥
          </div>

          <h3
            className="
              text-xl
              font-semibold
              text-slate-900
            "
          >
            No Participants Yet
          </h3>

          <p
            className="
              text-slate-500
              mt-2
            "
          >
            Invite friends and family
            to start sharing expenses.
          </p>

        </div>

      )}

    </div>

  );
}

export default ParticipantsSection;
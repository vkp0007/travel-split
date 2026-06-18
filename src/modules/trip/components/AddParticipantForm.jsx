import { useState } from "react";

function AddParticipantForm({
  onAddParticipant,
  loading,
}) {

  const [email, setEmail] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!email.trim()) return;

    onAddParticipant(email);

    setEmail("");

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-5
      "
    >

      <div className="mb-4">

        <h3
          className="
            text-lg
            font-semibold
            text-slate-900
          "
        >
          Add Participant
        </h3>

        <p
          className="
            text-sm
            text-slate-500
            mt-1
          "
        >
          Invite members to join this trip.
        </p>

      </div>

      <div
        className="
          flex
          flex-col
          md:flex-row
          gap-3
        "
      >

        <input
          type="email"
          placeholder="Enter participant email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          className="
            flex-1
            border
            border-slate-200
            rounded-2xl
            px-4
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-emerald-500
            focus:border-transparent
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
            bg-emerald-600
            hover:bg-emerald-700
            disabled:bg-slate-300
            disabled:cursor-not-allowed
            text-white
            px-6
            py-3
            rounded-2xl
            font-medium
            transition
          "
        >
          {loading
            ? "Adding..."
            : "+ Add Member"}
        </button>

      </div>

    </form>

  );
}

export default AddParticipantForm;
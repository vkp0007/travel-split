function TripSubmitButton({
  loading,
}) {

  return (

    <button
      type="submit"
      disabled={loading}
      className="
        w-full
        py-4
        rounded-2xl
        bg-linear-to-r
        from-emerald-600
        to-emerald-700
        hover:from-emerald-700
        hover:to-emerald-800
        text-white
        font-semibold
        shadow-lg
        transition
      "
    >
      {loading
        ? "Creating Trip..."
        : "Create Trip"}
    </button>

  );
}

export default TripSubmitButton;
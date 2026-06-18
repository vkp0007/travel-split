function ExpenseSubmitButton({
  loading,
}) {

  return (

    <button
      type="submit"
      disabled={loading}
      className="
        w-full
        flex
        items-center
        justify-center
        gap-2
        bg-emerald-600
        hover:bg-emerald-700
        disabled:bg-emerald-400
        disabled:cursor-not-allowed
        text-white
        font-semibold
        py-4
        rounded-2xl
        shadow-sm
        hover:shadow-md
        transition-all
      "
    >

      {loading && (

        <div
          className="
            h-4
            w-4
            border-2
            border-white/30
            border-t-white
            rounded-full
            animate-spin
          "
        />

      )}

      {loading
        ? "Creating Expense..."
        : "Create Expense"}

    </button>

  );
}

export default ExpenseSubmitButton;
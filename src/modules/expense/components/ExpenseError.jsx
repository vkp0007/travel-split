function ExpenseError({
  error,
}) {

  if (!error)
    return null;

  return (

    <div
      className="
        bg-red-50
        border
        border-red-200
        text-red-600
        p-4
        rounded-2xl
      "
    >
      {error}
    </div>

  );
}

export default ExpenseError;
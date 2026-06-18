function Button({
  children,
  loading = false,
  type = "button",
  variant = "primary",
  className = "",
}) {

  const variants = {
    primary: `
      bg-emerald-600
      hover:bg-emerald-700
      text-white
      shadow-lg
      shadow-emerald-200
    `,
    secondary: `
      bg-white
      border
      border-slate-300
      text-slate-700
      hover:bg-slate-50
    `,
    danger: `
      bg-red-600
      hover:bg-red-700
      text-white
    `,
  };

  return (
    <button
      type={type}
      disabled={loading}
      className={`
        w-full
        h-12
        rounded-2xl
        font-semibold
        transition-all
        duration-200
        disabled:opacity-60
        disabled:cursor-not-allowed
        flex
        items-center
        justify-center
        gap-2
        ${variants[variant]}
        ${className}
      `}
    >
      {loading ? (
        <>
          <div
            className="
              h-4
              w-4
              border-2
              border-white
              border-t-transparent
              rounded-full
              animate-spin
            "
          />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
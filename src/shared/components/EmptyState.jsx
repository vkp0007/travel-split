function EmptyState({
  icon = "📭",
  title,
  description,
  action,
}) {

  return (
    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-12
        text-center
      "
    >

      <div
        className="
          text-6xl
          mb-5
        "
      >
        {icon}
      </div>

      <h2
        className="
          text-2xl
          font-bold
          text-slate-900
        "
      >
        {title}
      </h2>

      <p
        className="
          text-slate-500
          mt-3
          max-w-md
          mx-auto
        "
      >
        {description}
      </p>

      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}

    </div>
  );
}

export default EmptyState;
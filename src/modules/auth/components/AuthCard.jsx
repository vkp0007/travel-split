function AuthCard({
  title,
  subtitle,
  children,
}) {

  return (

    <div className="w-full">

      <div className="mb-6">

        <h2
          className="
            text-3xl
            lg:text-4xl
            font-bold
            text-slate-900
            mb-2
          "
        >
          {title}
        </h2>

        <p
          className="
            text-slate-500
            text-base
          "
        >
          {subtitle}
        </p>

      </div>

      <div
        className="
          bg-white
          border
          border-emerald-100
          rounded-3xl
          p-6
          lg:p-8
          shadow-sm
        "
      >

        {children}

      </div>

    </div>

  );
}

export default AuthCard;
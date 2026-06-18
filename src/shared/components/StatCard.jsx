function StatCard({
  title,
  value,
  subtitle,
  icon,
}) {

  return (

    <div
      className="
        group
        relative
        overflow-hidden
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-6
        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-xl
        hover:border-emerald-200
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          top-0
          right-0
          h-24
          w-24
          bg-emerald-50
          rounded-full
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition
        "
      />

      <div className="relative">

        <div
          className="
            flex
            justify-between
            items-start
            mb-6
          "
        >

          <div>

            <p
              className="
                text-sm
                font-medium
                text-slate-500
                uppercase
                tracking-wide
              "
            >
              {title}
            </p>

            <h3
              className="
                text-4xl
                font-bold
                text-slate-900
                mt-3
                leading-none
              "
            >
              {value}
            </h3>

          </div>

          <div
            className="
              h-14
              w-14
              rounded-2xl
              bg-emerald-50
              text-emerald-600
              flex
              items-center
              justify-center
              group-hover:scale-110
              transition-transform
            "
          >
            {icon}
          </div>

        </div>

        {subtitle && (

          <div
            className="
              pt-4
              border-t
              border-slate-100
            "
          >

            <p
              className="
                text-sm
                text-slate-500
              "
            >
              {subtitle}
            </p>

          </div>

        )}

      </div>

    </div>

  );
}

export default StatCard;
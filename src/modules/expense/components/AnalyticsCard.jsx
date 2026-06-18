function AnalyticsCard({
  title,
  value,
  icon,
  valueClassName = "",
}) {

  return (

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-6
        hover:shadow-lg
        transition
      "
    >

      <div
        className="
          flex
          justify-between
          items-start
        "
      >

        <div>

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            {title}
          </p>

          <h3
            className={`
              text-4xl
              font-bold
              mt-3
              ${valueClassName}
            `}
          >
            {value}
          </h3>

        </div>

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-slate-100
            flex
            items-center
            justify-center
          "
        >
          {icon}
        </div>

      </div>

    </div>

  );
}

export default AnalyticsCard;
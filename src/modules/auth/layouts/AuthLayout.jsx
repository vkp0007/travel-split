function AuthLayout({
  children,
}) {

  return (

    <div
      className="
        min-h-screen
        bg-slate-50
        lg:grid
        lg:grid-cols-2
      "
    >

      {/* Left Branding Panel */}

      <div
        className="
          hidden
          lg:flex
          flex-col
          min-h-screen
          bg-emerald-900
          text-white
          p-10
        "
      >

        {/* Top */}

        <div>

          <h1
            className="
              text-5xl
              font-bold
              mb-4
            "
          >
            TravelSplit
          </h1>

          <p
            className="
              text-emerald-100
              text-lg
              max-w-md
            "
          >
            Plan trips, split expenses,
            manage budgets and travel
            smarter with friends.
          </p>

        </div>

        {/* Features */}

        <div
          className="
            mt-12
            space-y-5
          "
        >

          <div
            className="
              bg-emerald-800/40
              border
              border-emerald-700
              rounded-2xl
              p-5
            "
          >
            ✈️ Plan group trips effortlessly
          </div>

          <div
            className="
              bg-emerald-800/40
              border
              border-emerald-700
              rounded-2xl
              p-5
            "
          >
            💰 Track shared expenses
          </div>

          <div
            className="
              bg-emerald-800/40
              border
              border-emerald-700
              rounded-2xl
              p-5
            "
          >
            📊 Monitor budgets in real-time
          </div>

          <div
            className="
              bg-emerald-800/40
              border
              border-emerald-700
              rounded-2xl
              p-5
            "
          >
            🏆 Earn loyalty rewards
          </div>

        </div>

        {/* Bottom */}

        <div className="mt-auto pt-10">

          <p
            className="
              text-sm
              text-emerald-200
            "
          >
            Trusted by travelers across India
          </p>

        </div>

      </div>

      {/* Right Form Section */}

      <div
        className="
          flex
          items-center
          justify-center
          min-h-screen
          px-6
          py-10
        "
      >

        <div
          className="
            w-full
            max-w-lg
          "
        >
          {children}
        </div>

      </div>

    </div>

  );
}

export default AuthLayout;
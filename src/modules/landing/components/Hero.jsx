import { Link } from "react-router";

function Hero() {

  return (

    <section
      className="
        bg-linear-to-b
        from-emerald-50
        to-white
        py-15
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
          px-6
          text-center
        "
      >

        {/* Badge */}

        <div
          className="
            inline-flex
            items-center
            gap-2
            bg-emerald-100
            text-emerald-700
            px-4
            py-2
            rounded-full
            text-sm
            font-medium
            mb-8
          "
        >
          ✈️ Smart Travel Expense Management
        </div>

        {/* Heading */}

        <h1
          className="
            text-5xl
            md:text-7xl
            font-bold
            text-slate-900
            leading-tight
          "
        >

          Travel Together.

          <br />

          Split Expenses

          <span
            className="
              text-emerald-600
            "
          >
            {" "}
            Effortlessly
          </span>

        </h1>

        {/* Description */}

        <p
          className="
            text-slate-600
            text-xl
            max-w-3xl
            mx-auto
            mt-8
            leading-relaxed
          "
        >
          Create trips, invite friends,
          track shared expenses, manage
          budgets and settle balances
          without spreadsheets or confusion.
        </p>



      </div>

    </section>

  );
}

export default Hero;
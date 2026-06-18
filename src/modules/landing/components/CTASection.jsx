import { Link }
from "react-router";

function CTASection() {

  return (

    <section
      className="
        py-15
        px-7
        
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
        "
      >

        <div
          className="
            relative
            overflow-hidden
            bg-linear-to-r
            from-emerald-700
            via-emerald-600
            to-emerald-500
            rounded-4xl
            p-10
            md:p-16
            text-center
            text-white
            shadow-2xl
          "
        >

          {/* Decorative circles */}

          <div
            className="
              absolute
              -top-24
              -right-24
              w-72
              h-72
              rounded-full
              bg-white/10
            "
          />

          <div
            className="
              absolute
              -bottom-24
              -left-24
              w-72
              h-72
              rounded-full
              bg-white/10
            "
          />

          <div className="relative z-10">

            <span
              className="
                inline-flex
                px-4
                py-2
                rounded-full
                bg-white/20
                text-sm
                font-medium
                mb-6
              "
            >
              ✈️ Join Thousands of Travelers
            </span>

            <h2
              className="
                text-4xl
                md:text-6xl
                font-bold
                leading-tight
              "
            >
              Ready For Your
              <br />
              Next Adventure?
            </h2>

            <p
              className="
                mt-6
                text-lg
                md:text-xl
                text-emerald-50
                max-w-2xl
                mx-auto
              "
            >
              Create trips, track expenses,
              split costs fairly and settle
              balances effortlessly with
              TravelSplit.
            </p>

            <div
              className="
                mt-10
                flex
                flex-col
                sm:flex-row
                justify-center
                gap-4
              "
            >

              <Link
                to="/register"
                className="
                  bg-white
                  text-emerald-700
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  hover:scale-105
                  transition
                "
              >
                Get Started Free
              </Link>

              <Link
                to="/login"
                className="
                  border
                  border-white/30
                  bg-white/10
                  backdrop-blur-sm
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  hover:bg-white/20
                  transition
                "
              >
                Login
              </Link>

            </div>

            <div
              className="
                mt-10
                flex
                flex-wrap
                justify-center
                gap-8
                text-sm
                text-emerald-100
              "
            >

              <span>
                ✓ Free to Start
              </span>

              <span>
                ✓ Smart Expense Splitting
              </span>

              <span>
                ✓ Secure & Reliable
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default CTASection;
import AppNavbar
from "../components/AppNavbar";

import AppSidebar
from "../components/AppSidebar";


function DashboardLayout({
  children,
}) {

  return (

    <div
      className="
        min-h-screen
        bg-slate-50
        flex
        flex-col
      "
    >

      {/* Navbar */}

      <AppNavbar />

      {/* Body */}

      <div
        className="
          flex
          flex-1
        "
      >

        {/* Sidebar */}

        <AppSidebar />

        {/* Content */}

        <div
          className="
            flex-1
            overflow-x-hidden
          "
        >

          <main
            className="
              max-w-7xl
              mx-auto
              px-6
              py-8
            "
          >

            {children}

          </main>

          {/* FAQ Section */}

          <section
            className="
              max-w-7xl
              mx-auto
              px-6
              pb-10
            "
          >

            <div
              className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                overflow-hidden
              "
            >

             

            </div>

          </section>

        </div>

      </div>

      {/* Footer */}


    </div>

  );
}

export default DashboardLayout;
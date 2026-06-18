import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router";

import {
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";

import {
  useAuth,
} from "../../modules/auth/context/AuthContext";

function ProfileDropdown() {

  const [open, setOpen] =
    useState(false);

  const navigate =
    useNavigate();

  const {
    user,
    logout,
  } = useAuth();

  const handleLogout =
    () => {

      logout();

      navigate("/login");

    };

  return (

    <div className="relative">

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          flex
          items-center
          gap-3
          bg-white
          border
          border-slate-200
          hover:border-emerald-300
          px-3
          py-2
          rounded-2xl
          transition
        "
      >

        <div
          className="
            h-10
            w-10
            rounded-xl
            bg-emerald-600
            text-white
            flex
            items-center
            justify-center
            font-semibold
          "
        >
          {user?.name
            ?.charAt(0)
            ?.toUpperCase()}
        </div>

        <div
          className="
            hidden
            md:block
            text-left
          "
        >

          <p
            className="
              text-sm
              font-semibold
              text-slate-900
            "
          >
            {user?.name}
          </p>

          <p
            className="
              text-xs
              text-slate-500
            "
          >
            Account
          </p>

        </div>

        <ChevronDown
          size={16}
          className="
            text-slate-400
          "
        />

      </button>

      {open && (

        <div
          className="
            absolute
            right-0
            mt-3
            w-72
            bg-white
            border
            border-slate-200
            rounded-3xl
            shadow-xl
            overflow-hidden
            z-50
          "
        >

          {/* Header */}

          <div
            className="
              p-5
              border-b
              border-slate-100
            "
          >

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  h-12
                  w-12
                  rounded-2xl
                  bg-emerald-100
                  text-emerald-700
                  flex
                  items-center
                  justify-center
                  font-bold
                "
              >
                {user?.name
                  ?.charAt(0)
                  ?.toUpperCase()}
              </div>

              <div>

                <p
                  className="
                    font-semibold
                    text-slate-900
                  "
                >
                  {user?.name}
                </p>

                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  {user?.email}
                </p>

              </div>

            </div>

          </div>

          {/* Menu */}

          <div className="p-2">

            <Link
              to="/profile"
              className="
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                hover:bg-slate-50
                transition
              "
            >

              <User size={18} />

              <span>
                Profile
              </span>

            </Link>

            <button
              onClick={handleLogout}
              className="
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                text-red-600
                hover:bg-red-50
                transition
              "
            >

              <LogOut size={18} />

              <span>
                Logout
              </span>

            </button>

          </div>

        </div>

      )}

    </div>

  );
}

export default ProfileDropdown;
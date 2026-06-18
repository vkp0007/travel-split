import {
  Routes,
  Route,
  useLocation,
} from "react-router";

import Home from "./modules/landing/pages/Home";

import Login from "./modules/auth/pages/Login";
import Register from "./modules/auth/pages/Register";
import Profile from "./modules/auth/pages/Profile";

import Dashboard from "./modules/dashboard/pages/Dashboard";

import CreateTrip from "./modules/trip/pages/CreateTrip";
import TripDetails from "./modules/trip/pages/TripDetails";
import MyTrips from "./modules/trip/pages/MyTrips";

import Expenses from "./modules/expense/pages/Expenses";
import AddExpense from "./modules/expense/pages/AddExpense";

import BudgetDashboard from "./modules/budget/pages/BudgetDashboard";

import Places from "./modules/place/pages/Places";
import PlaceDetails from "./modules/place/pages/PlaceDetails";

import ProtectedRoute
from "./shared/components/ProtectedRoute";

import Footer
from "./shared/components/Footer";

function App() {

  const location =
    useLocation();

  const hideFooter =
    [
      "/login",
      "/register",
    ].includes(
      location.pathname
    );

  return (

    <div
      className="
        min-h-screen
        bg-slate-50
        flex
        flex-col
      "
    >

      <main className="flex-1">

        <Routes>

          {/* Public */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          {/* Protected */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Trips */}

          <Route
            path="/trips"
            element={
              <ProtectedRoute>
                <MyTrips />
              </ProtectedRoute>
            }
          />

          <Route
            path="/trips/create"
            element={
              <ProtectedRoute>
                <CreateTrip />
              </ProtectedRoute>
            }
          />

          <Route
            path="/trips/:tripId"
            element={
              <ProtectedRoute>
                <TripDetails />
              </ProtectedRoute>
            }
          />

          {/* Expenses */}

          <Route
            path="/trips/:tripId/expenses"
            element={
              <ProtectedRoute>
                <Expenses />
              </ProtectedRoute>
            }
          />

          <Route
            path="/trips/:tripId/expenses/add"
            element={
              <ProtectedRoute>
                <AddExpense />
              </ProtectedRoute>
            }
          />

          {/* Budget */}

          <Route
            path="/trips/:tripId/budget"
            element={
              <ProtectedRoute>
                <BudgetDashboard />
              </ProtectedRoute>
            }
          />

          {/* Places */}

          <Route
            path="/places"
            element={
              <ProtectedRoute>
                <Places />
              </ProtectedRoute>
            }
          />

          <Route
            path="/places/:destination"
            element={
              <ProtectedRoute>
                <PlaceDetails />
              </ProtectedRoute>
            }
          />

          {/* 404 */}

          <Route
            path="*"
            element={

              <div
                className="
                  min-h-[70vh]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >

                <h1
                  className="
                    text-7xl
                    font-bold
                    text-emerald-600
                  "
                >
                  404
                </h1>

                <h2
                  className="
                    text-2xl
                    font-semibold
                    mt-4
                  "
                >
                  Page Not Found
                </h2>

                <p
                  className="
                    text-slate-500
                    mt-2
                  "
                >
                  The page you are looking
                  for does not exist.
                </p>

              </div>

            }
          />

        </Routes>

      </main>

      {!hideFooter && (
        <Footer />
      )}

    </div>

  );
}

export default App;
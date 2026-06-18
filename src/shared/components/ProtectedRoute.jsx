import { Navigate } from "react-router";
import { useAuth } from "../../modules/auth/context/AuthContext";

function ProtectedRoute({
  children,
}) {
  const { user } = useAuth();

  if (!user) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;
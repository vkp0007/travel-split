import {
  useState,
  useEffect,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router";

import {
  Mail,
  ArrowRight,
} from "lucide-react";

import { loginUser } from "../services/authApi";
import { useAuth } from "../context/AuthContext";

import Input from "../../../shared/components/Input";
import Button from "../../../shared/components/Button";
import PasswordInput from "../../../shared/components/PasswordInput";

import AuthCard from "../components/AuthCard";
import AuthLayout from "../layouts/AuthLayout";

function Login() {

  const navigate =
    useNavigate();

  const {
    user,
    login,
  } = useAuth();

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  useEffect(() => {

    if (user) {
      navigate("/dashboard");
    }

  }, [user, navigate]);

  const handleChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));

  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setError("");

      if (
        !formData.email ||
        !formData.password
      ) {

        setError(
          "All fields are required"
        );

        return;
      }

      try {

        setLoading(true);

        const response =
          await loginUser(
            formData
          );

        login(
          response.data
        );

      } catch (error) {

        setError(
          error.response?.data
            ?.message ||
            "Login failed"
        );

      } finally {

        setLoading(false);

      }
    };

  return (

    <AuthLayout>

      <AuthCard
        title="Welcome Back 👋"
        subtitle="Sign in to continue managing your trips and expenses."
      >

        {error && (

          <div
            className="
              bg-red-50
              border
              border-red-200
              text-red-600
              px-4
              py-3
              rounded-xl
              mb-5
              text-sm
            "
          >
            {error}
          </div>

        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label
              className="
                block
                text-sm
                font-medium
                mb-2
              "
            >
              Email Address
            </label>

            <div className="relative">



              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="pl-11"
              />

            </div>

          </div>

          <div>

            <div
              className="
                flex
                justify-between
                items-center
                mb-2
              "
            >

              <label
                className="
                  text-sm
                  font-medium
                "
              >
                Password
              </label>



            </div>

            <PasswordInput
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />

          </div>

          <Button
            type="submit"
            loading={loading}
          >
            <span
              className="
                flex
                items-center
                justify-center
                gap-2
              "
            >
              Login
              <ArrowRight size={16} />
            </span>
          </Button>

        </form>

        <div
          className="
            mt-8
            pt-6
            border-t
            border-slate-100
          "
        >

          <p
            className="
              text-center
              text-sm
              text-slate-500
            "
          >
            Trusted by travelers across India
          </p>

          <p
            className="
              text-center
              mt-5
              text-sm
              text-slate-600
            "
          >
            Don't have an account?{" "}

            <Link
              to="/register"
              className="
                font-semibold
                text-emerald-600
                hover:text-emerald-700
              "
            >
              Create Account
            </Link>

          </p>

        </div>

      </AuthCard>

    </AuthLayout>

  );
}

export default Login;
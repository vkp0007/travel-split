import {
  useState,
  useEffect,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router";

import { registerUser } from "../services/authApi";
import { useAuth } from "../context/AuthContext";

import Input from "../../../shared/components/Input";
import Button from "../../../shared/components/Button";
import PasswordInput from "../../../shared/components/PasswordInput"

import AuthCard from "../components/AuthCard";
import AuthLayout from "../layouts/AuthLayout";

function Register() {
  const navigate = useNavigate();

  const { user } = useAuth();

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      preferredCurrency: "INR",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {
      setError(
        "All fields are required"
      );
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError(
        "Passwords do not match"
      );
      return;
    }

    try {
      setLoading(true);

      await registerUser({
        name: formData.name,
        email: formData.email,
        password:
          formData.password,
        preferredCurrency:
          formData.preferredCurrency,
      });

      navigate("/login");

    } catch (error) {

      setError(
        error.response?.data
          ?.message ||
          "Registration failed"
      );

    } finally {

      setLoading(false);

    }
  };

return (

  <AuthLayout>

    <AuthCard
      title="Create Account 🚀"
      subtitle="Start planning trips, managing expenses and earning rewards."
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
            Full Name
          </label>

          <Input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
          />

        </div>

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

          <Input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />

        </div>

        <div
          className="
            grid
            md:grid-cols-2
            gap-4
          "
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
              Password
            </label>

            <PasswordInput
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
            />

          </div>

          <div>

            <label
              className="
                block
                text-sm
                font-medium
                mb-2
              "
            >
              Confirm Password
            </label>

            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

          </div>

        </div>

        <div>

          <label
            className="
              block
              text-sm
              font-medium
              mb-2
            "
          >
            Preferred Currency
          </label>

          <select
            name="preferredCurrency"
            value={
              formData.preferredCurrency
            }
            onChange={handleChange}
            className="
              w-full
              border
              border-slate-300
              rounded-xl
              px-4
              py-3
              bg-white
              focus:outline-none
              focus:ring-2
              focus:ring-emerald-500
            "
          >

            <option value="INR">
              INR ₹
            </option>

            <option value="USD">
              USD $
            </option>

            <option value="EUR">
              EUR €
            </option>

          </select>

        </div>

        <Button
          type="submit"
          loading={loading}
        >
          Create Account
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
          Join thousands of travelers managing trips smarter.
        </p>

        <p
          className="
            text-center
            mt-5
            text-sm
            text-slate-600
          "
        >

          Already have an account?{" "}

          <Link
            to="/login"
            className="
              font-semibold
              text-emerald-600
              hover:text-emerald-700
            "
          >
            Sign In
          </Link>

        </p>

      </div>

    </AuthCard>

  </AuthLayout>

);
}

export default Register;
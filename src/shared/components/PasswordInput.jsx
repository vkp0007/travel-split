import { useState } from "react";

import {
  Eye,
  EyeOff,
  Lock,
} from "lucide-react";

function PasswordInput({
  name,
  value,
  onChange,
  placeholder,
}) {

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  return (

    <div className="relative">

      <Lock
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-400
        "
      />

      <input
        type={
          showPassword
            ? "text"
            : "password"
        }
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          h-12
          pl-11
          pr-12
          rounded-2xl
          border
          border-slate-300
          bg-white
          text-slate-900
          placeholder:text-slate-400

          focus:outline-none
          focus:border-emerald-500
          focus:ring-4
          focus:ring-emerald-100

          transition-all
        "
      />

      <button
        type="button"
        onClick={() =>
          setShowPassword(
            !showPassword
          )
        }
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-slate-400
          hover:text-emerald-600
          transition
        "
      >

        {showPassword
          ? <EyeOff size={18} />
          : <Eye size={18} />
        }

      </button>

    </div>

  );
}

export default PasswordInput;
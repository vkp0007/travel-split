function Input({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  label,
}) {

  return (

    <div className="space-y-2">

      {label && (

        <label
          className="
            text-sm
            font-medium
            text-slate-700
          "
        >
          {label}
        </label>

      )}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          h-12
          px-4
          rounded-2xl
          border
          border-slate-300
          bg-white
          text-slate-900
          placeholder:text-slate-400
          transition-all
          duration-200

          focus:outline-none
          focus:border-emerald-500
          focus:ring-4
          focus:ring-emerald-100

          hover:border-slate-400
        "
      />

    </div>

  );
}

export default Input;
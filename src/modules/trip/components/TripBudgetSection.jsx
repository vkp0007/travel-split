function TripBudgetSection({
  formData,
  handleChange,
}) {

  return (

    <div
      className="
        bg-slate-50
        rounded-2xl
        p-6
      "
    >

      <h3
        className="
          font-semibold
          text-lg
          mb-5
        "
      >
        Budget Planning
      </h3>

      <div
        className="
          grid
          md:grid-cols-2
          gap-6
        "
      >

        <input
          type="number"
          name="totalBudget"
          value={formData.totalBudget}
          onChange={handleChange}
          placeholder="10000"
          className="
            bg-white
            border
            border-slate-300
            rounded-xl
            px-4
            py-3
          "
        />

        <select
          name="baseCurrency"
          value={formData.baseCurrency}
          onChange={handleChange}
          className="
            bg-white
            border
            border-slate-300
            rounded-xl
            px-4
            py-3
          "
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

      </div>

    </div>

  );
}

export default TripBudgetSection;
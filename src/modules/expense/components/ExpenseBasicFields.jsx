function ExpenseBasicFields({
  trip,
  formData,
  handleChange,
}) {

  const inputClass =
    `
      w-full
      bg-white
      border
      border-slate-200
      rounded-2xl
      px-4
      py-3
      focus:outline-none
      focus:ring-2
      focus:ring-emerald-500
      focus:border-emerald-500
      transition
    `;

  return (

    <div
      className="
        bg-slate-50
        rounded-3xl
        p-6
        border
        border-slate-200
      "
    >

      <div className="mb-6">

        <h2
          className="
            text-xl
            font-bold
            text-slate-900
          "
        >
          Expense Details
        </h2>

        <p
          className="
            text-sm
            text-slate-500
            mt-1
          "
        >
          Enter basic information
          about this expense.
        </p>

      </div>

      <div className="space-y-5">

        {/* Payer */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Paid By
          </label>

          <select
            name="payerId"
            value={formData.payerId}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">
              Select Payer
            </option>

            {trip?.participants?.map(
              (participant) => (

                <option
                  key={
                    participant.user._id
                  }
                  value={
                    participant.user._id
                  }
                >
                  {
                    participant.user.name
                  }
                </option>

              )
            )}
          </select>

        </div>

        {/* Amount + Currency */}

        <div
          className="
            grid
            md:grid-cols-3
            gap-4
          "
        >

          <div className="md:col-span-2">

            <label className="block text-sm font-medium mb-2">
              Amount
            </label>

            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
              className={inputClass}
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Currency
            </label>

            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="INR">
                ₹ INR
              </option>

              <option value="USD">
                $ USD
              </option>

              <option value="EUR">
                € EUR
              </option>

            </select>

          </div>

        </div>

        {/* Category */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="food">
              🍔 Food
            </option>

            <option value="hotel">
              🏨 Hotel
            </option>

            <option value="transport">
              🚕 Transport
            </option>

            <option value="shopping">
              🛍 Shopping
            </option>

            <option value="activities">
              🎯 Activities
            </option>

            <option value="other">
              📦 Other
            </option>
          </select>

        </div>

        {/* Description */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Description
          </label>

          <textarea
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Dinner at restaurant, hotel booking, taxi fare..."
            className={inputClass}
          />

        </div>

        {/* Split Type */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Split Method
          </label>

          <select
            name="splitType"
            value={formData.splitType}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="equal">
              Equal Split
            </option>

            <option value="unequal">
              Custom Amount Split
            </option>

            <option value="percentage">
              Percentage Split
            </option>
          </select>

        </div>

      </div>

    </div>

  );
}

export default ExpenseBasicFields;
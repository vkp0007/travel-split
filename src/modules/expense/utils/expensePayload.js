export const buildExpensePayload =
  (
    tripId,
    formData
  ) => ({

    tripId,

    payerId:
      formData.payerId,

    amount:
      Number(
        formData.amount
      ),

    currency:
      formData.currency,

    category:
      formData.category,

    description:
      formData.description,

    splitType:
      formData.splitType,

    participants:
      formData.participants,

    splits:
      formData.splits,
  });
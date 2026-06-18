export const validateExpenseForm =
  (
    formData,
    setError
  ) => {

    if (
      !formData.payerId
    ) {

      setError(
        "Please select a payer"
      );

      return false;
    }

    if (
      !formData.amount
    ) {

      setError(
        "Please enter amount"
      );

      return false;
    }

    if (
      formData.participants
        .length === 0
    ) {

      setError(
        "Select at least one participant"
      );

      return false;
    }

    return true;
  };
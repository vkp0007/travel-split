import { useCallback }
from "react";

export function useExpenseSplits(
  setFormData
) {

  const handleSplitChange =
    useCallback(
      (
        userId,
        field,
        value
      ) => {

        setFormData(
          (prev) => {

            const existing =
              prev.splits.find(
                (split) =>
                  split.userId ===
                  userId
              );

            let updatedSplits;

            if (existing) {

              updatedSplits =
                prev.splits.map(
                  (split) =>
                    split.userId ===
                    userId
                      ? {
                          ...split,
                          [field]:
                            Number(value),
                        }
                      : split
                );

            } else {

              updatedSplits = [
                ...prev.splits,
                {
                  userId,
                  [field]:
                    Number(value),
                },
              ];
            }

            return {
              ...prev,
              splits:
                updatedSplits,
            };
          }
        );
      },

      [setFormData]
    );

  return {
    handleSplitChange,
  };
}
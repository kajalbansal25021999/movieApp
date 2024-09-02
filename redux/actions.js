export const completeOnboarding = () => ({
  type: "COMPLETE_ONBOARDING",
});

export const addToFavorite = (item) => ({
  type: "ADD_TO_FAVORITE",
  payload: item,
});

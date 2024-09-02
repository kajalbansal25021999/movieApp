const initialState = {
  completed: false,
};

const onboardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COMPLETE_ONBOARDING":
      return {
        ...state,
        completed: true,
      };
    default:
      return state;
  }
};

export default onboardingReducer;

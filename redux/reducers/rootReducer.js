import { combineReducers } from "redux";
import onboardingReducer from "./onboardingReducer";
import favoriteReducer from "./favoriteReducer";

const rootReducer = combineReducers({
  onboarding: onboardingReducer,
  favorite: favoriteReducer,
});

export default rootReducer;

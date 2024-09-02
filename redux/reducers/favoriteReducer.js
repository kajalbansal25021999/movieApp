const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((item) => item.id !== action.payload.id),
          action.payload,
        ],
      };
    default:
      return state;
  }
};

export default favoriteReducer;

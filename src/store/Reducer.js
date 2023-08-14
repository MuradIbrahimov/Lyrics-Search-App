const initialState = {
  tracks: [],
  headings: "Top 10 Tracks",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        tracks: action.payload,
        error: null,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
export default reducer;

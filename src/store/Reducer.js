const initialState = {
  tracks: [],
  headings: "Top 10 Tracks",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH":
      if (state.tracks.length > 0) return { ...state };
      else
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
    case "SEARCH":
      return {
        ...state,
        tracks: action.payload,
        headings:"Search Results"
      };
    default:
      return state;
  }
};
export default reducer;

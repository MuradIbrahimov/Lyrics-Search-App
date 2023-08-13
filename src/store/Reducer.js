import axios from "axios";
const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/chart");
    const data = response.data;
    return data.message.body.track_list;
  } catch (error) {
    console.log(error);
  }
};

const tracks = await fetchData();

const initialState = {
  tracks: tracks || [],
  headings: "Top 10 Tracks",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
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

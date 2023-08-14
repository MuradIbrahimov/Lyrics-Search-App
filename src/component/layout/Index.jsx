import Tracks from "../tracks/Tracks";
import axios from "axios";
import { connect } from "react-redux";
function Index({ dispatch }) {
  console.log(dispatch);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/chart");
      const data = response.data;

      dispatch({
        type: "FETCH",
        payload: data.message.body.track_list,
      });
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
  return (
    <>
      <Tracks />
    </>
  );
}

export default connect()(Index);

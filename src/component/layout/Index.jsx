import Tracks from "../tracks/Tracks";
import Search from "../tracks/SearchBar";
import axios from "axios";
import { connect } from "react-redux";
import { useEffect } from "react";
function Index({ dispatch }) {
  
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
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Search />
      <Tracks />
    </div>
  );
}

export default connect()(Index);

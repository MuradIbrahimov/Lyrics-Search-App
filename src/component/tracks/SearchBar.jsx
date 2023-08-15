import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
function Search({ tracks, dispatch }) {
  const [state, setState] = useState({
    trackTitle: "",
  });
  const changeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const findTrack = async (e) => {
    console.log("slm");
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3000/api/search.track:${state.trackTitle}`
      );
      const data = response.data;
      console.log(data);
      dispatch({
        type: "SEARCH",
        payload: data.message.body.track_list,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-5 text-center">
        <i className="fas fa-music" /> Search For A Song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
      <form onSubmit={findTrack}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Song title..."
            name="trackTitle"
            value={state.trackTitle}
            onChange={changeHandler}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block w-100 mb-4 mt-4"
        >
          Get Track List
        </button>
      </form>
    </div>
  );
}
const t = (a) => a;
export default connect(t)(Search);

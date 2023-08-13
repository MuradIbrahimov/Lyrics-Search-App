import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import Track from "./Track";

function Tracks({ tracks, dispatch, headings }) {
  console.log(headings);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (tracks.length > 0) {
      setLoading(false);
    }
  }, [tracks]);
  console.log(tracks);
  return (
    <div className="row">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="text-center mb-4">{headings}</h3>
          {tracks.map(({ track }) => {
            return <Track track={track} />;
          })}
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tracks: state.tracks,
    headings: state.headings,
  };
};

export default connect(mapStateToProps)(Tracks);

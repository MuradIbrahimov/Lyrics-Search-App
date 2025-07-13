import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import Track from "./Track";

function Tracks({ tracks, headings }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (tracks?.length > 0) {
      setLoading(false);
    }
  }, [tracks]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="fade-in">
          <h3 className="text-center mb-4">{headings}</h3>
          <div className="row">
            {tracks.map(({ track }, index) => {
              return <Track track={track} key={track.track_id} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tracks: state.tracks,
    headings: state.headings,
  };
};

export default connect(mapStateToProps)(Tracks);

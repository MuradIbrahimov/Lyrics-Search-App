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

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="row">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="text-center mb-4">{headings}</h3>
          {tracks.map(({ track }) => {
            return <Track track={track} key={track.track_id} />;
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

import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Moment from "react-moment";
connect;
function Lyrics() {
  const id = useParams().id;
  const [isloading, setLoading] = useState(true);
  const [lyrics, setLyrics] = useState("");
  const [track, setTrack] = useState("");
  const fetchLyrics = async (id) => {
    const data = await axios.get(`http://localhost:3000/api/lyrics.get=${id}`);
    setLyrics(data.data.message.body.lyrics);
    if (lyrics && track) setLoading(false);
  };
  const fetchTrack = async (id) => {
    const data = await axios.get(`http://localhost:3000/api/track.get=${id}`);
    setTrack(data.data.message.body.track);
    if (lyrics && track) setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    fetchLyrics(id);
    fetchTrack(id);
  });
  return (
    <>
      {lyrics && track ? (
        <>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {track.track_name} by{" "}
              <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>

          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID</strong>: {track.album_id}
            </li>
            <li className="list-group-item">
              <strong>Song Genre</strong>:{" "}
              {track.primary_genres.music_genre_list.length === 0
                ? "NO GENRE AVAILABLE"
                : track.primary_genres.music_genre_list[0].music_genre
                    .music_genre_name}
            </li>
            <li className="list-group-item">
              <strong>Explicit Words</strong>:{" "}
              {track.explicit === 0 ? "No" : "Yes"}
            </li>
            <li className="list-group-item">
              <strong>Release Date: </strong>
              <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
            </li>
          </ul>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
const t = (a) => a;
export default connect(t)(Lyrics);

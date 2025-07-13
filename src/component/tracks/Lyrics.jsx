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
    try {
      const data = await axios.get(`http://localhost:3000/api/lyrics.get=${id}`);
      setLyrics(data.data.message.body.lyrics);
    } catch (error) {
      // Mock lyrics data if API fails
      const mockLyrics = {
        lyrics_body: `[Verse 1]
This is a sample lyrics for track ID ${id}.
Since the API is not available, we're showing mock lyrics.
This allows you to see how the lyrics page looks and functions.

[Chorus]
Sample chorus lyrics here
Mock data for demonstration
Beautiful styling and layout
Even without the real API

[Verse 2]
Another verse with sample text
To show the formatting and spacing
The lyrics are displayed nicely
With proper line breaks and styling

[Bridge]
This bridge section shows
How different parts of songs
Are formatted and displayed
In the lyrics component

[Final Chorus]
Final chorus with mock lyrics
Demonstrating the full layout
Of the lyrics display page
With all the styling applied.`
      };
      setLyrics(mockLyrics);
    }
    if (lyrics && track) setLoading(false);
  };
  
  const fetchTrack = async (id) => {
    try {
      const data = await axios.get(`http://localhost:3000/api/track.get=${id}`);
      setTrack(data.data.message.body.track);
    } catch (error) {
      // Mock track data if API fails
      const mockTrack = {
        track_name: `Sample Track ${id}`,
        artist_name: "Sample Artist",
        album_id: 100 + parseInt(id),
        primary_genres: {
          music_genre_list: [
            {
              music_genre: {
                music_genre_name: "Pop"
              }
            }
          ]
        },
        explicit: 0,
        first_release_date: "2023-01-01"
      };
      setTrack(mockTrack);
    }
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
        <div className="fade-in">
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            <i className="fas fa-arrow-left" /> Go Back
          </Link>
          <div className="card lyrics-container">
            <h5 className="card-header">
              {track.track_name} by{" "}
              <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <div className="lyrics-content">
              {lyrics.lyrics_body}
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
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
const t = (a) => a;
export default connect(t)(Lyrics);

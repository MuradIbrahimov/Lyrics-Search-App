const initialState = {
  tracks: [
    {
      track: {
        track_id: 1,
        track_name: "Bohemian Rhapsody",
        artist_name: "Queen",
        album_name: "A Night at the Opera",
        album_id: 101,
        primary_genres: {
          music_genre_list: [
            {
              music_genre: {
                music_genre_name: "Rock"
              }
            }
          ]
        },
        explicit: 0,
        first_release_date: "1975-10-31"
      }
    },
    {
      track: {
        track_id: 2,
        track_name: "Hotel California",
        artist_name: "Eagles",
        album_name: "Hotel California",
        album_id: 102,
        primary_genres: {
          music_genre_list: [
            {
              music_genre: {
                music_genre_name: "Rock"
              }
            }
          ]
        },
        explicit: 0,
        first_release_date: "1976-12-08"
      }
    },
    {
      track: {
        track_id: 3,
        track_name: "Imagine",
        artist_name: "John Lennon",
        album_name: "Imagine",
        album_id: 103,
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
        first_release_date: "1971-09-09"
      }
    },
    {
      track: {
        track_id: 4,
        track_name: "Stairway to Heaven",
        artist_name: "Led Zeppelin",
        album_name: "Led Zeppelin IV",
        album_id: 104,
        primary_genres: {
          music_genre_list: [
            {
              music_genre: {
                music_genre_name: "Rock"
              }
            }
          ]
        },
        explicit: 0,
        first_release_date: "1971-11-08"
      }
    },
    {
      track: {
        track_id: 5,
        track_name: "Like a Rolling Stone",
        artist_name: "Bob Dylan",
        album_name: "Highway 61 Revisited",
        album_id: 105,
        primary_genres: {
          music_genre_list: [
            {
              music_genre: {
                music_genre_name: "Folk Rock"
              }
            }
          ]
        },
        explicit: 0,
        first_release_date: "1965-07-20"
      }
    },
    {
      track: {
        track_id: 6,
        track_name: "Smells Like Teen Spirit",
        artist_name: "Nirvana",
        album_name: "Nevermind",
        album_id: 106,
        primary_genres: {
          music_genre_list: [
            {
              music_genre: {
                music_genre_name: "Grunge"
              }
            }
          ]
        },
        explicit: 0,
        first_release_date: "1991-09-10"
      }
    }
  ],
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

import express from "express";
import cors from "cors"; // Import the cors package
import axios from "axios";

const app = express();
const port = 3000;

// Use cors middleware to allow cross-origin requests
app.use(cors());

// Define your API route
app.get("/api/chart", async (req, res) => {
  try {
    const apiUrl = "https://api.musixmatch.com/ws/1.1/chart.tracks.get";
    const queryParams = req.query;
    queryParams.apikey = "51a749301d672a7793ad5bd859786140";
    const response = await axios.get(apiUrl, { params: queryParams });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(error.response?.status || 500)
      .json({ error: "An error occurred" });
  }
});
app.get(`/api/lyrics.get=:id`, async (req, res) => {
  try {
    const id = req.params.id;
    const apiUrl = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}`;
    const queryParams = req.query;
    queryParams.apikey = "51a749301d672a7793ad5bd859786140";
    const response = await axios.get(apiUrl, { params: queryParams });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(error.response?.status || 500)
      .json({ error: "An error occurred" });
  }
});
app.get(`/api/track.get=:id`, async (req, res) => {
  try {
    const id = req.params.id;
    console.log();
    const apiUrl = `https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}`;
    const queryParams = req.query;
    queryParams.apikey = "51a749301d672a7793ad5bd859786140";
    const response = await axios.get(apiUrl, { params: queryParams });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(error.response?.status || 500)
      .json({ error: "An error occurred" });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get(`/api/search.track:name`, async (req, res) => {
  try {
    const name = req.params.name;
    const apiUrl = `https://api.musixmatch.com/ws/1.1/track.search?q_track=${name}&page_size=3&page=1&s_track_rating=desc`;
    const queryParams = req.query;
    queryParams.apikey = "51a749301d672a7793ad5bd859786140";
    const response = await axios.get(apiUrl, { params: queryParams });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(error.response?.status || 500)
      .json({ error: "An error occurred" });
  }
});

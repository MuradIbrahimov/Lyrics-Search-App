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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

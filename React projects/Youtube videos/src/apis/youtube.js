import axios from "axios";

const KEY = "AIzaSyDDtKd9QzgU6alK1sXyMp1b1GDm3m-ZGQ0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

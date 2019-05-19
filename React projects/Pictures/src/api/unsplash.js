import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 16a9b88b153fd25c700d8aeada8ddb2d1a2067239edc923491598b9963d01af6"
  }
});

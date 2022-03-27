import axios from "axios";
export default axios.create({
  baseURL: "https://pizzaplanet-capstone.herokuapp.com/api/",
  headers: {
    "Content-type": "application/json"
  }
});
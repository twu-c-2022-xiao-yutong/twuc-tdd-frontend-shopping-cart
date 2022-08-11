import axios from "axios";

export const getData = async () => {
  const response = await axios.get("http://localhost:8000/");
  return response.data;
};

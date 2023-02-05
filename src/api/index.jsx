import axios from "axios";

const baseUrl = "http://localhost:3000/api";
const getTeams = async (team) => {
  try {
    const res = await axios.get(`${baseUrl}/clubs/${team}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return { status: "error" };
  }
};
export { getTeams };

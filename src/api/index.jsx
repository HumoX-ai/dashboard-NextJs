import axios from "axios";

const baseUrl = "https://dashboard-next-js-two.vercel.app/api";
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

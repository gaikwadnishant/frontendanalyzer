import axios from "axios";
const apikey=process.env.BACKEND_API_KEY;
export const analyzeReport = (formData) => {
  return axios.post(`https://backendanalyzer.onrender.com/api/analyze`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

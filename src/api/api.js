import axios from "axios";

export const analyzeReport = (formData) => {
  return axios.post("https://backendanalyzer.onrender.com/api/analyze", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

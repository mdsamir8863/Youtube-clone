import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  url: "https://youtube138.p.rapidapi.com/auto-complete/",
  params: { q: "youtube", hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": 'cf0f092186mshece4168047b4886p1052e2jsnd5781f3ef247',
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};


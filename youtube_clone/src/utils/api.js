import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_APP_YOUTUBE_CLONE,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
export const featchdatafromapi = async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;

}
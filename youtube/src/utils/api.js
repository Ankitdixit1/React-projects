
import axios from "axios";

export const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '8d74e41c3emshdcf9ed7970425d0p1ad336jsn4580b8914ddc',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

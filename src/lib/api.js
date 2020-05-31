import axios from 'axios';

export function getAPOD(date = '') {
  return axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=rWwxvxslxpsr2usv5uLMpmyYyUo6u0V7DGNQ8y9p&date=${date}`,
  );
}

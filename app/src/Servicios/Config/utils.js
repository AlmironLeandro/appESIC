import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

// export async function getJsonFromApi(path) {
//   const response = await axios.get(`${apiUrl}/${path}`);
//   return response.data;
// }

export const newSecureClient = () => {

console.log(apiUrl)
  // return axios.create({
  //     baseURL: apiUrl,
  //     timeout: 180000,
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //         'Authorization': `Bearer ${localStorage.getItem('token')}`,
  //     }
  // });
}
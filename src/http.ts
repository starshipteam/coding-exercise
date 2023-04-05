import axios from 'axios';

const http = async (url: string) => {
  try {
    const res = await axios.get(url, {
        baseURL: 'https://pokeapi.co/api/v2/',
    });

    console.log(res.data)

    return res.data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export default http;
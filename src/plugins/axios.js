import _axios from "axios"

const axios = (baseURL) => {
  const instance = _axios.create({
    baseURL: baseURL || 'https://rarelease.herokuapp.com',
    timeout: 1000,
  });

  return instance;
}

export {axios};
export default axios();
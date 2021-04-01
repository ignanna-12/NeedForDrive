import * as axios from 'axios';

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://cors-anywhere.herokuapp.com/http://api-factory.simbirsoft1.com/api/'
      : '',
  headers: {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
  },
});

export const getCities = () => {
  return instance.get('db/city').then((response) => {
    return response.data;
  });
};

export const getPoints = (data_id) => {
  return instance.get('db/point/' + { data_id }).then((response) => {
    return response.data;
  });
};

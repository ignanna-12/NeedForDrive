import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api-factory.simbirsoft1.com/api/',
  headers: {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
  },
});

export const getCities = () => {
  return instance.get('db/city', { crossdomain: true }).then((response) => {
    return response.data;
  });
};

// export const getCompetitions = () => {
//   return instance.get('competitions').then((response) => {
//     return response.data;
//   });
// };

// export const getLeagueCalendar = (id = '', dateFrom = '', dateTo = '') => {
//   return instance
//     .get('competitions/' + id + '/matches?dateFrom=' + dateFrom + '&dateTo=' + dateTo)
//     .then((response) => {
//       return response.data;
//     });
// };

// export const getTeamCalendar = (id = '', dateFrom = '', dateTo = '') => {
//   return instance
//     .get('teams/' + id + '/matches?dateFrom=' + dateFrom + '&dateTo=' + dateTo)
//     .then((response) => {
//       return response.data;
//     });
// };

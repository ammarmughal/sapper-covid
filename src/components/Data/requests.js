import axios from 'axios';
import parsers from './parsers';

  const usStats = async () => {
  const response = await axios.get('https://covidtracking.com/api/v1/us/current.json');

  return parsers.usStats(response.data)
}

export default {
  usStats,
};
import axios from 'axios';
import {GET_DATA} from './api';

export const getData = async () => {
  const response = await axios.get(GET_DATA);
  return response.data;
};
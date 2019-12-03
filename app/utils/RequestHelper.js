import axios from 'axios';
import { BASE_URL } from './constants';

const axiosIntance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

const RequestHelpers = ({ method, options }) =>
  axiosIntance({
    method,
    ...options,
  });

const Request = {
  get(options) {
    return RequestHelpers({ method: 'GET', options });
  },
  post(options) {
    return RequestHelpers({ method: 'POST', options });
  },
  delete(options) {
    return RequestHelpers({ method: 'DELETE', options });
  },
  put(options) {
    return RequestHelpers({ method: 'PUT', options });
  },
  patch(options) {
    return RequestHelpers({ method: 'PATCH', options });
  },
};

export default Request;

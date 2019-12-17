import axios from 'axios';
import {ActionCreator} from './reducers/data/data';

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    const {url, method} = err.response.config;
    switch (err.response.status) {
      case 401:
        if (!url.endsWith(`/login`) && method !== `get`) {
          dispatch(ActionCreator.serverError(401));
        }
        break;
      case 404:
        window.location.replace(`/page-not-found`);
    }
    return err;
  };
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;

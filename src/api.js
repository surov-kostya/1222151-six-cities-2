import axios from 'axios';
import {ActionType} from './reducers/index';
import {ActionCreator} from './reducers/data/data';

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => {
    // dispatch(ActionCreator.serverError(0));

    return response;
  };
  const onFail = (err) => {
    if (err.response && [403, 400, 401].includes(err.response.status)) {
      switch (err.response.status) {
        case 401:
          // window.location.replace(`/login?prevUrl=${window.location.pathname}`);
          dispatch(ActionCreator.serverError(401));
          break;
        default:
          window.location.replace(`/page-not-found`);
      }
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;

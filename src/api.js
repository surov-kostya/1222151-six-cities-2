import axios from 'axios';
import {ActionCreator as ActionCreatorData} from './reducers/data/data';
import {ActionCreator as ActionCreatorApp} from './reducers/application/application';

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => {
    dispatch(ActionCreatorData.serverError({status: 0, message: ``}));
    return response;
  };
  const onFail = (err) => {
    dispatch(ActionCreatorApp.toggleFormBlock(false));
    const {url, method} = err.response.config;
    switch (err.response.status) {
      case 401:
        if (!url.endsWith(`/login`) && method !== `get`) {
          dispatch(ActionCreatorData.serverError({status: 401, message: ``}));
        }
        break;
      default:
        dispatch(ActionCreatorData.serverError({
          status: err.response.status,
          message: err.response.data.error}));
    }
    return err;
  };
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;

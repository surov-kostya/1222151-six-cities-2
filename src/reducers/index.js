
import {combineReducers} from 'redux';
import {reducer as application, ActionType as applicationActionType, getInitState as getApplicationInitState} from './application/application';
import {reducer as data, ActionType as dataActionType, Operation, getInitState as getDataInitState} from './data/data';

export const reducer = combineReducers({
  application,
  data
});

export const ActionType = Object.assign({}, applicationActionType, dataActionType);

export {Operation};

export const initialState = Object.assign({}, getApplicationInitState(), getDataInitState());


import {combineReducers} from 'redux';
import {reducer as application, ActionType as applicationActionType, getInitState as getApplicationInitState, Operation as AppOperation} from './application/application';
import {reducer as data, ActionType as dataActionType, Operation as DataOperation, getInitState as getDataInitState} from './data/data';

export const reducer = combineReducers({
  application,
  data
});

export const ActionType = Object.assign({}, applicationActionType, dataActionType);

export const Operation = Object.assign({}, DataOperation, AppOperation);

export const initialState = Object.assign({}, getApplicationInitState(), getDataInitState());

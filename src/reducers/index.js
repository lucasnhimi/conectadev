import { combineReducers } from 'redux';

import accountReducer from './accountReducer';
import notificationsReducer from './notificationsReducer';

const rootReducer = combineReducers({
  account: accountReducer,
  notifications: notificationsReducer,
});

export default rootReducer;

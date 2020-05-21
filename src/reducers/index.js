import { combineReducers } from 'redux';

import accountReducer from './accountReducer';

const rootReducer = combineReducers({
  account: accountReducer
})

export default rootReducer;
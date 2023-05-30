import { combineReducers } from 'redux';
import reposReducer from './repos';

const rootReducer = combineReducers({
  repos: reposReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

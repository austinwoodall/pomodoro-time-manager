import { combineReducers } from 'redux';
import workTimerReducer from './WorkTimerReducer';

export default combineReducers({
	work: workTimerReducer,
});

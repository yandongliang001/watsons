import {combineReducers} from "redux";
import sunReducers from './sunyuxiao/reducers';
import yanReducers from './yandongliang/reducers';
const reducers  = combineReducers({
	sunReducers,yanReducers
});
export default reducers;
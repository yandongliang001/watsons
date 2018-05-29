import states from './state';
import {MSG} from './const';
const reducers = (state = states,action)=>{
	let new_state = {...state};
	switch(action.type){
		case MSG:
			new_state = action.value;
		break;
		default :break;
	}
	return new_state;
}
export default reducers;
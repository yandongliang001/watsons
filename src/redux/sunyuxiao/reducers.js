import states from './state';
import {MSG} from './const';
const reducers = (state = states,action)=>{
	let new_state = {...state};
	switch(action.type){
		case MSG:
			new_state = {msg:action.value};
		break;
		default :break;
	}
	console.log(new_state);
	return new_state;
}
export default reducers;
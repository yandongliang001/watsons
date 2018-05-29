import {MSG} from './const';
import Store from '../store';
const actionCreator = {
	//测试代码
	changeValue(value){
		let action = {
			type:MSG,
			value
		};
		Store.dispatch(action);
	}
}
export default actionCreator;
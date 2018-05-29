import React,{ Component } from 'react';
import Store from '../../redux/store';
import axios from 'axios';
import actionCreator from '../../redux/sunyuxiao/actionCreator';
class Ceshi extends Component {
	constructor(props){
		super(props);
		this.state = {
			list:Store.getState().sunReducers.msg
		}
		console.log(this.state);
	}
	getNum(){
		let url = "http://localhost:8888/anhao/activity/specials/info?code=Home_flashSale__Top_Img";
		axios.get(url).then((res)=>{
			console.log(res.data.data.specials_item_v_o_s);
			actionCreator.changeValue("b");
		});
	}
	componentWillMount(){
		Store.subscribe(()=>{
			this.setState({list:Store.getState().sunReducers.msg});
		});
	}
	render(){
		return (
			<div>
				<button onClick={this.getNum}>测试</button>
				<p>显示数据:{this.state.list}</p>
			</div>
		)
	}
}
export default Ceshi;
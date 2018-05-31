import React,{ Component } from 'react';
class Time extends Component {
	constructor(props){
		super(props);
		this.state={
			countDown:[]
		}
	}
	componentWillMount(){
		setInterval(()=>{
			let leftTime = (new Date(2018,5,12,8,0,0)) - (new Date()); //计算剩余的毫秒数 
			let days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10); //计算剩余的天数 
			let hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时 
			let minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟 
			let seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数 
			this.setState({msg:days+"天" + hours+"小时" + minutes+"分"+seconds+"秒"});
		},1000);
	}
	render(){
		return (
			<div className="countDown">
	   			<span> 据 结 束 : </span>
	   			<i>{this.state.msg}</i>
	   		</div>
		)
	}
}
export default Time;
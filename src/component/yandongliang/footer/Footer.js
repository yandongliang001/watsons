import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss';
class Footer extends Component {
//	constructor(props){
//		super(props);
//		this.state={
//			msg:1
//		}
//	}
	changeBg(num){
		this.setState({msg:num});
		console.log(num,this.state);
	}
	getTitle(){
		return this.props.list.map((itme)=>{
			return (<NavLink exact={itme.exact} to={itme.path}  onClick={this.changeBg.bind(this,itme.id)} key={itme.id}>{itme.title}</NavLink>)
		});
	}
	render(){
		return (
			<div className="footer">
				<div className="top">
					<span className="iconfont login">&#xe7ab;</span>
					<input type="text" placeholder="索搜更多"/>
					<i className="iconfont goshop">&#xe6e6;</i>
				</div>
				<ul className="bottom">
					{this.getTitle()}
				</ul>
			</div>
		)
	}
}
Footer.defaultProps = {
	list:[
		{id:1,title:'今日推荐',path:"/",exact:true},
		{id:2,title:'面膜中心',path:'/fac',exact:false},
		{id:3,title:'居家生活',path:'/family',exact:false}
	]
}
export default Footer;
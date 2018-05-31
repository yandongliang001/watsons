import React,{ Component } from "react";
import axios from 'axios';
import './nav.scss';
import Time from './Time';
class Nav extends Component {
	constructor(props){
		super(props);
		this.state = {
			html:""
		}
	}
	getMsg(value){
		let url = "http://localhost:8888/anhao/topic/T20180530172003499";//https://h5.watsons.com.cn/topic/T20180530172003499
		axios.get(url).then((res)=>{
			//console.log(res.data,11111);
			this.setState({html:res.data});
		});
		if(this.props.nav_footer != null){
			if(value === "nav"){
				return this.props.nav_footer.new_Home_4navs_180105_1.datas.map((itme)=>{
					return (<li key={itme.id}><img src={itme.image_url}/></li>)
				});
			}else{
				return this.props.nav_footer.new_Home_coupon_180105_4.datas.map((item)=>{
					return (<li key={item.id}><img src={item.image_url}/></li>)
				});
			}
		}else{
			return (<li></li>)
		}
	}
	componentWillMount(){
		
	}
    render(){
        return (
            <div className="nav">
               <ul className="nav_footer">
               		{this.getMsg("nav")}
               </ul>
               <ul className="nav_youhu">
               		{this.getMsg("null")}
               </ul>
               <div className='nav_bg_img'>
	               <img src="https://image.watsons.com.cn//upload/090ff5df.png?x-oss-process=image/quality,q_80/format,webp"/>
	               <div className="content">
	               		<Time className="countDown"/>
	               		<div className="nav_shop">
	               			这是后端返回的结构数据
	               		</div>
	               </div>
               </div>
            </div>
        )
    }
}
export default Nav;
//https://h5.watsons.com.cn/topic/T20180521104327376    下面的大组件的商品信息
//https://h5.watsons.com.cn/topic/T20180530172003499    秒杀组件
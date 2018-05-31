//今日推荐
import React,{ Component } from 'react';
import Footer from '../../footer/Footer';
import axios from 'axios';
import Swiper from 'swiper';
import './recommend.scss';
import Swipers from './swiper/Swiper';
import Nav from './nav/Nav';
class Recommend extends Component {
	constructor(props){
		super(props);
		this.state = {
			imgList:[],
			nav_footer:null
			
		}
	}
	getMsg(){
		let url = "https://h5.watsons.com.cn/aladdin/get_batch_data?codes=[%22new_Home_topBig_forcase_180105_1%22,%22new_Home_4navs_180105_1%22,%22new_Home_coupon_180105_4%22,%22Case+seckill%22,%22Home_seckill%22,%22wsc_duli%22,%22Home_pingo_170505_5%22,%22Home_AboveTopic_activity_170505_7%22,%22Home_TopicCase_170505_7%22,%22Home_CategaryNavs_170505_7%22]&app_channel=wap&plat=wap&access_token=";
		axios.get(url).then((res)=>{
			console.log(res.data.data.new_Home_coupon_180105_4.datas);
			this.setState({
				imgList:res.data.data.new_Home_topBig_forcase_180105_1.datas,
				nav_footer:res.data.data
			})
		});
	}
	
	componentWillMount(){
		this.getMsg();
	}
	render(){
		return (
			<div className="">
				<Footer/>
				<Swipers imgList = {this.state.imgList}/>
				<Nav nav_footer = {this.state.nav_footer}/>
			</div>
		)
	}
}
export default Recommend;
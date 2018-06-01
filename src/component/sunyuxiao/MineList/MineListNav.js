import React,{Component} from 'react'
import Copy from '../common/Copy'
 class MineListNav extends Component{
 	renderminelistnav(){
 		let {minelistnavs}=this.props
 		return  minelistnavs.map(item=>(
 			   <li key={item.id}>
 			     <div>
 			      <i className={'iconfont icon-'+item.icon}></i>
 			      <span>{item.title}</span>
 			      </div>
 			   </li>
 		))
 	}
 	render(){
 		return(
 			<div className="minelistnav">
 			   <div className="guess">
 			     <span>我猜你经常用</span>
 			  
 			   </div>
 			   <ul className="minelistnavcontent">
 			       {this.renderminelistnav()}
 			   </ul>
 			   <div className="copybox">
 			    <Copy/>
 			   </div>
 			</div>
 		)
 	}
 }
 
 MineListNav.defaultProps={
 	minelistnavs:[
 	    
 	      {id: 1, title: '消息', icon: 'message'},
 	      {id: 2, title: '优惠券', icon: 'youhuiquan'},
 	      {id: 3, title: '我的拼团', icon: 'wodepintuan'},
 	      {id: 4, title: '收货地址', icon: 'dizhi'},
 	      {id: 5, title: '联系客服', icon: 'kefu-'},
 	      {id: 6, title: '会员卡', icon: 'huiyuanqia'},
 	      {id: 7, title: '建议反馈', icon: 'feedback'},
 	      {id: 8, title: '退出登录', icon: 'tuichudenglu'},
 	      {id: 9, title: '关于我们', icon: 'guanyuwomen'},
 	]
 	
 }
 export default MineListNav
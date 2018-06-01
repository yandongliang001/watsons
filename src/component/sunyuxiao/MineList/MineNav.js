import React,{Component} from 'react'

 class MineNav extends Component{
 	renderminenav(){
 		let {minenavs}=this.props
 		return  minenavs.map(item=>(
 			   <li key={item.id}>
 			      <i className={'iconfont icon-'+item.icon}></i>
 			      <span>{item.title}</span>
 			   </li>
 		))
 	}
 	render(){
 		return(
 			<div className="minenav">
 			   <div className="order">
 			     <span>全部订单</span>
 			     <i className='iconfont icon-jiantou'></i>
 			   </div>
 			   <ul className="minenavcontent">
 			       {this.renderminenav()}
 			   </ul>

 			</div>
 		)
 	}
 }
 
 MineNav.defaultProps={
 	minenavs:[
 	      {id: 1, title: '待付款', icon: 'yifukuan'},
 	      {id: 2, title: '待发货', icon: 'lipin'},
 	      {id: 3, title: '待收货', icon: 'yifahuo'},
 	      {id: 4, title: '待评价', icon: 'daipingjia_'},
 	      {id: 5, title: '待退货', icon: 'icon5'},
 	      
 	]
 }
 export default MineNav
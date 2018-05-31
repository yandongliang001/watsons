import React,{ Component } from 'react';
import Swiper from 'swiper';
import './swiper.scss'
class Swipers extends Component {
	constructor(props){
		super(props);
	}
	componentDidUpdate(){
		new Swiper ('.swiper-container', {
		    loop: true,
		    autoplay : {
			    delay:2000
			  },
		    // 如果需要滚动条
		    scrollbar: {
		      el: '.swiper-scrollbar'
		    }
		  })               
	}
	getImg(){
		return this.props.imgList.map((itme)=>{
			return (<div key={itme.id} className="swiper-slide"><img src={itme.image_url}/></div>)
		});
	}
	render(){
		return (
			<div className="swiper-container swiper">
			    <div className="swiper-wrapper">
			        {this.getImg()}
			    </div>
			    <div className="swiper-scrollbar"></div>
			</div>
		)
	}
}
export default Swipers;
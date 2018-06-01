import React,{Component} from 'react'
import Copy from '../common/Copy'
import '../stylesheets/login.scss'
 class LoginContent extends Component{
 	constructor(props){
 		super(props)
 		this.state={
 			msg:1
 		}
 		this.ddd = this.ddd.bind(this);
 	}
 	getRandom(){
 		var num="";  
		for(var i=0;i<4;i++){  
		    num+=" "+Math.floor(Math.random()*10)  
		}  
		return num
 	}
 	ddd(){
 		this.setState({msg:1})
 	}
 	componentWillUpdate(){
 		console.log(this.state.msg,111111);
 	}
 	render(){
 		return(
 			<div className="logincontent">
 			<p><i className="iconfont icon-tishi"></i> 
        商城全新版本上线，手机登录更安全哦
      </p>
      <input type="text" placeholder="输入手机号" className="phonenum"/>
       <div>
            <input type="text" placeholder="输入图片验证码"/><span className="yanzheng" onClick={this.ddd}>{this.getRandom()}</span>
       </div>
     <div>
        <input type="text" placeholder="输入验证码"/><span className="phone">发送验证码</span>
     </div>
            <p> <span><i className="iconfont icon-xieyixuanzhong"></i></span>登录/注册即同意用户协议和隐私政策 </p>
 			        <button>用户登录/注册</button>
 			 <Copy/>
 			</div>
 		)
 	}
 }
 export default LoginContent
import React,{Component} from 'react'
import LoginHeader from './LoginHeader'
 import LoginContent from  './LoginContent'                       
import '../stylesheets/login.scss'
 class Login extends Component{
 	render(){
 		return(
 			<div>
 			
 			<LoginHeader/>
 			
 			<LoginContent/>
 			
 			
 			</div>
 		)
 	}
 }
 export default Login 
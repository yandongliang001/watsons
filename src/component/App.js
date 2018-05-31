import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import './yandongliang/icofont/iconfont.js';
import './yandongliang/icofont/iconfont.css';
//测试模块
import Recommend from './yandongliang/section/recommend/Recommend';
import Fac from './yandongliang/section/fac/Fac';
import Family from './yandongliang/section/family/Family';

class App extends Component {
	getComponent(){
		return this.props.routes.map((itme)=>{
			return (<Route key={itme.id} path={itme.path} component={itme.component} exact={itme.exact}/>);
		});
	}
  render() {
    return (
      <div>
      	<Switch>
	      	<Route path="/" component={Recommend} exact/>
	      	<Route path="/fac" component={Fac} />
	      	<Route path="/family" component={Family} />
	      </Switch>
      </div>
    );
  }
}
App.defaultProps = {
	routes:[
	{id:1,path:'/',component:Recommend,exact:true},
	{id:2,path:'/fac',component:Fac,exact:false},
	{id:3,path:'/family',component:Family,exact:false}
	]
}
export default App;

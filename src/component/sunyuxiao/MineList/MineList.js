import React,{Component} from 'react'
import MineHeader from './MineHeader'
import MineNav from './MineNav' 
import MineListNav from './MineListNav' 
import '../stylesheets/mine.scss'
 class MineList extends Component{
 	render(){
 		return(
 			<div className="minelist">
 			   <MineHeader/>
 			   <MineNav/>
 			   <MineListNav/>
 			</div>
 		)
 	}
 }
 export default MineList 
import React from 'react';
import ReactDOM from 'react-dom';
import './javaScript/rem.js'
import './index.scss';
import App from './component/App';
import {BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		<App/>
	</Router>
	, document.getElementById('root'));
registerServiceWorker();

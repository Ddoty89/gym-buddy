import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux';

import './index.css';
import LandingPage from './components/LandingPage.js';
import registerServiceWorker from './registerServiceWorker';
import store from './store'


ReactDOM.render(
	<Provider store={store}>
		<LandingPage />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();

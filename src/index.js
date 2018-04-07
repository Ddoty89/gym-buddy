import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import App from './App.js';
import store from './store.js'


ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
			<Router>
				<App />
			</Router>
		</MuiThemeProvider>
	</Provider>,
document.getElementById('root'));

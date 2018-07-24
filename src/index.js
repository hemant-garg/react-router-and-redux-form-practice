import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';

import Home from './components/Home';
import NewPost from './components/newpost';
import ActivePost from './components/active_post';
import { HOME_URL } from './actions';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)} >
		<BrowserRouter>
			<div>
			<Switch>
				<Route path={`${HOME_URL}/post/new`} component={NewPost} />
				<Route path={`${HOME_URL}/post/:id`} component={ActivePost} />
				<Route path={HOME_URL} component={Home} />
			</Switch>
			</div>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));

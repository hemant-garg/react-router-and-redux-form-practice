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

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)} >
		<BrowserRouter>
			<div>
			<Switch>
				<Route path="/post/new" component={NewPost} />
				<Route path="/post/:id" component={ActivePost} />
				<Route path="/" component={Home} />
			</Switch>
			</div>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));

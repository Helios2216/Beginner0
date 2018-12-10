import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/PageNotFound';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Display from './components/Display';
import Navigation from './components/navigation';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Navigation />
			<Switch>
				<Route path="/" component={Home} exact={true} />
				<Route path="/portfolio" component={Portfolio} exact={true} />
				<Route path="/portfolio/:id" component={Display} exact={true} />
				<Route path="/contact" component={Contact} exact={true} />
				<Route component={NotFound} exact={true} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;

var React = require('react'),
	ReactDom = require('react-dom'),
	
	ReactRouter = require('react-router'),
	Router = ReactRouter.Router,
	Route = ReactRouter.Route,
	hashHistory = ReactRouter.hashHistory,
	
	Base = require('./components/router/Base.jsx'),
	Page1 = require('./components/router/Page1.jsx'),
	Page2 = require('./components/router/Page2.jsx');

//ReactDom.render(<List/>, document.getElementById('main'));
ReactDom.render(
	<Router history={hashHistory}>
		<Route path="/" component={Base}>
			<Route path="/page1" component={Page1} />
			<Route path="/page2" component={Page2} />
		</Route>
	</Router>, 
	document.getElementById('main')
);
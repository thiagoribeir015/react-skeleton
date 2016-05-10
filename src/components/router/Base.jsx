var React = require('react'),
	ReactRouter = require('react-router'),
	Link = ReactRouter.Link;

var Base = React.createClass({
	render: function(){
		return (
			<div style={{margin: 10}}>
				{/* example of comment */}
				<h1>Header</h1>
				<button><Link to={'page1'}>Page 1</Link></button>
				<button><Link to={'page2'}>Page 2</Link></button>
				{this.props.children}
				<h1>Footer</h1>
			</div>
		)
	}
});

module.exports = Base;


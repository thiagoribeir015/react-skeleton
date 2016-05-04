var React = require('react');

var ListItem = React.createClass({
	render: function(){
		return (
			<div className="item">
		    	<i className="large github middle aligned icon"></i>
		    	<div className="content">
		     		<a className="header">{this.props.text}</a>
		     		<div className="description">{(new Date()).toString()}</div>
			   	</div>
			</div>
		);
	}
});

module.exports = ListItem;
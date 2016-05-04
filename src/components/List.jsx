var React = require('react'),
	ListItem = require('./ListItem.jsx'),
	arrayData = [
		{id:1, text: "First"},
		{id:2, text: "Second"}
	];

var List = React.createClass({
	render: function (){
		return(
			<div className="ui relaxed divided list">
				{
					arrayData.map(function(item){
						return <ListItem key={item.id} text={item.text} />;
					})
				}
			</div>
		);
	}
});

module.exports = List;
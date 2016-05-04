var React = require('react'),
	ListItem = require('./ListItem.jsx');

var List = React.createClass({

	getInitialState: function(){
		return {
			items:[
				{id:1, text: "First!"}
			]
		}
	},

	buttonClick: function(){
		newItems = this.state.items;
		newItems.push({
			id: newItems.length + 1,
			text: "Item number " + (newItems.length + 1)
		});

		this.setState({
			items: newItems
		});
	},

	render: function (){
		return(
			<div>
				<button className="ui button" onClick={this.buttonClick}>Add New</button>
				<div className="ui relaxed divided list">
					{
						this.state.items.map(function(item){
							return <ListItem key={item.id} text={item.text} />;
						})
					}
				</div>
			</div>
			
		);
	}
});

module.exports = List;
var React = require('react'),
	ReactDom = require('react-dom');

var Validator = require("email-validator");

var EmailInput = React.createClass({
	
	getInitialState: function(){
		return {
			valid:true
		}
	},

	onChange: function(e){
	
		this.setState({
			valid: (Validator.validate(e.target.value) || e.target.value === "")
		});
	},

	clear:function(){
		this.refs.emailInput.value = "";
	},

	render:function(){
		return (
			<div className={this.state.valid ? "ui action input" : "ui action input error"}>
			  <input type="text" ref="emailInput" placeholder="Type Email..." onChange={this.onChange}/>
			  <button className="ui button">Clear</button>
			</div>
		)
	}
});

module.exports = EmailInput;
var React = require('react');
var EmailInput = require('./EmailInput.jsx');

var Page1 = React.createClass({

	onSubmit: function(e){
		if(!this.refs.emailfield.state.valid){
			alert("Not Valid!");
		}
		else{
			this.refs.emailfield.clear();
		}
	},

	render: function(){
		return (
			<div className="ui card">
			  <div className="content">
			    <div className="header">Email Validator</div>
			  </div>
			  <div className="content">
			  	<EmailInput ref="emailfield"/>

			    {/*<h4 className="ui sub header">Activity</h4>
			    <div className="ui small feed">
			      <div className="event">
			        <div className="content">
			          <div className="summary">
			             <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
			          </div>
			        </div>
			      </div>
			      <div className="event">
			        <div className="content">
			          <div className="summary">
			             <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
			          </div>
			        </div>
			      </div>
			      <div className="event">
			        <div className="content">
			          <div className="summary">
			             <a>Helen Troy</a> added two pictures
			          </div>
			        </div>
			      </div>
			    </div>*/}
			    
			  </div>
			  <div className="extra content">
			    <button className="ui button" onClick={this.onSubmit}>Submit</button>
			  </div>
			</div>
		)
	}
});

module.exports = Page1;
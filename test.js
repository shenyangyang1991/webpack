import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './test.css';

class Test extends Component {
	render() {
		return (
			<div>hello react + webpack!</div>
		);
	}
};

ReactDOM.render(<Test/>, document.getElementById('root'));
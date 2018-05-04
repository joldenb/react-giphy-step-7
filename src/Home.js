import React, { Component } from 'react';
import SearchContainer from './SearchContainer'
import dinosaur from './trex-lives.png'
import App from './App.css'

class Home extends Component {
	render() {
		return (
			<div className="App">
				<h1>Search</h1>
				<img src={dinosaur} className="App-logo"/>
				<SearchContainer />
			</div>
		)
	}
}

export default Home
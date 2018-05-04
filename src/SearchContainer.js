import React, {Component} from 'react'
import Search from './Search'
import Results from './Results'
import axios from 'axios'

class SearchContainer extends Component {



	constructor(props){
		super(props)

			this.state = {
		  "data": [ ]
		}

		this.search = this.search.bind(this)
	}
	
	search (searchTerm) {
		// jbZvjtw5YKyC5kvsMDr258Jw0wpgoroE
    axios.get("https://api.giphy.com/v1/gifs/search?api_key=jbZvjtw5YKyC5kvsMDr258Jw0wpgoroE&q=" + searchTerm).then((request) =>{
    	this.setState({
				data : request.data.data
			})    
    })
	}

	render() {
		return (
			<div>
				<Search search={this.search}/>
				<Results results={this.state.data}/>
			</div>
		)
	}

}

export default SearchContainer